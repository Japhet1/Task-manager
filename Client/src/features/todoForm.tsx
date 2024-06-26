import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from './todoSlice';
import {  AppDispatch, RootState } from '../stores/store'
import { BsX } from 'react-icons/bs'
import axios from 'axios';
import { setUser } from './authSlice';

interface Change {
    visible: boolean,
    onClose: () => void
}

const TodoForm: React.FC<Change> = ({visible, onClose}) => {

    interface FormData {
        _id: string,
        date: Date,
        todo: string,
        description: string,
        status: string,
        category: string,
        assigned: string
    }

    interface UserData {
        _id: string,
        username: string,
        email: string,
        password: string
    }


    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.categories)
    // const users = useSelector((state: RootState) => state.auth.selectedUser)
    const [user, setUsers] = useState<UserData[]>([{
        _id: "",
        username: "",
        email: "",
        password: ""
    }])

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/users/');
            setUsers(response.data);
            dispatch(setUser(response.data));
          } catch (error) {
            // setError(error);
            console.error(error);
          }
        };
        fetchUsers();
    }, [dispatch]);

    const [ formData, setFormData ] = useState<FormData>({
        _id: '',
        date: new Date(),
        todo: '',
        description: '',
        status: '',
        category: '',
        assigned: ''
    })

    if (!visible) return null

    const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const containerId = (e.target as HTMLDivElement).id 
        if (containerId === 'container') onClose()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        setFormData({_id: '', date: new Date(), todo: '', description: '', status: 'Pending', category: '', assigned: '' })
        dispatch(createTodo(formData))
        console.log(formData)
    };

    const data = user

    return (
        <div id='container' onClick={handleOnClose} className='flex justify-center items-center fixed z-20 inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 py-5'>
            <div className="flex justify-center text-lg">
                <form className="px-10 py-5 bg-slate-50 rounded-md shadow-md" onSubmit={handleAddTodo} style={{width: '35vw'}}>
                    
                    <div className='mb-8 flex justify-between items-center'><h1 className='text-3xl text-slate-900 font-bold'>Create</h1><div className='flex justify-end items-end hover:scale-110 transition-all'><button className='rounded-full p-2 flex' onClick={onClose}><BsX className='text-3xl'/></button></div></div>
                    <div className='space-y-3'>
                        <div className='flex justify-between space-x-4'>
                            <div className='space-y-2 w-[100%]'>
                                <label htmlFor="todo" className='text-slate-800'>Assigned To *</label><br/>
                                {/* <input className="w-[100%] p-1 text-base rounded-md" name="assigned" type="text" value={formData.assigned} onChange={handleInputChange} required /> */}
                                <select className='w-[100%] p-2 text-base text-slate-900 bg-slate-200 border border-slate-300 rounded-lg' name="assigned" value={formData.assigned} onChange={handleInputChange} required>
                                
                                    {data.map((data) => (
                                        data.username !== "Admin" ?
                                        <option className='text-slate-900 bg-slate-200 border border-slate-300 p-5' key={data._id} value={data.username}>
                                            {data.username}
                                        </option>
                                        : null
                                    ))}
                                    
                                </select>
                            
                            </div>
                            <div className='space-y-2 w-[100%]'>
                                <label htmlFor="category" className='text-slate-800'>Category *</label><br/>
                                
                                <select className='w-[100%] p-2 text-base text-slate-900 bg-slate-200 border border-slate-300 rounded-md' name="category" id="category" value={formData.category} onChange={handleInputChange}>
                                
                                    {categories.map((option) => (
                                        <option className='rounded-lg bg-slate-200 border border-slate-300' key={option._id} value={option.category}>{option.category}</option>
                                    ))}
                                    
                                </select>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="todo" className='text-slate-800'>Task *</label><br/>
                            <input className="w-[100%] p-2 text-base text-slate-900 bg-slate-200 border border-slate-300 rounded-md" name="todo" type="text" value={formData.todo} onChange={handleInputChange} required />
                        </div>

                        
                    
                        <div className='space-y-2'>
                            <label htmlFor="description" className='text-slate-800'>Description *</label><br/>
                            <textarea className='w-[100%] p-2 text-base text-slate-900 bg-slate-200 border border-slate-300 rounded-md' name="description" id="description" cols={30} rows={3} value={formData.description} onChange={handleInputChange} required></textarea>
                        </div>
                    
                    </div>
                    <div className='mt-8'>
                        <button className="py-1 px-4 rounded-md text-slate-900 bg-slate-200 hover:scale-110 transition-all" type="submit">Save</button>
                    </div>                   
                    
                </form>
            </div>

        </div>
    )
}

export default TodoForm