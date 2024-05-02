import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from './todoSlice';
import {  AppDispatch, RootState } from '../stores/store'
import { BsX } from 'react-icons/bs'

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
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.categories)
    const users = useSelector((state: RootState) => state.auth.selectedUser)

    console.log(users)

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



    return (
        <div id='container' onClick={handleOnClose} className='flex justify-center items-center fixed z-20 inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 py-5'>
            <div className="flex justify-center text-lg">
                <form className="px-10 py-5 bg-[#FFC470] rounded-md shadow-md" onSubmit={handleAddTodo} style={{width: '35vw'}}>
                    
                    <div className='mb-8 flex justify-between items-center'><h1 className='text-3xl text-slate-700 font-bold'>Create</h1><div className='flex justify-end items-end hover:scale-110 transition-all'><button className='rounded-full p-2 flex' onClick={onClose}><BsX className='text-3xl'/></button></div></div>
                    <div className='space-y-3'>
                        <div className='flex justify-between space-x-4'>
                            <div className='space-y-2 w-[100%]'>
                                <label htmlFor="todo">Assigned To *</label><br/>
                                {/* <input className="w-[100%] p-1 text-base rounded-md" name="assigned" type="text" value={formData.assigned} onChange={handleInputChange} required /> */}
                                <select className='w-[100%] p-2 text-base text-slate-700 bg-transparent border border-slate-700 rounded-md' name="assigned" value={formData.assigned} onChange={handleInputChange} required>
                                
                                    {users.map((data, index) => (
                                        <option key={index} value={data.username}>{data.username}</option>
                                    ))}
                                    
                                </select>
                            
                            </div>
                            <div className='space-y-2 w-[100%]'>
                                <label htmlFor="category">Category *</label><br/>
                                
                                <select className='w-[100%] p-2 text-base text-slate-700 bg-transparent border border-slate-700 rounded-md' name="category" id="category" value={formData.category} onChange={handleInputChange}>
                                
                                    {categories.map((option) => (
                                        <option key={option._id} value={option.category}>{option.category}</option>
                                    ))}
                                    
                                </select>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="todo">Task *</label><br/>
                            <input className="w-[100%] p-2 text-base text-slate-700 bg-transparent border border-slate-700 rounded-md" name="todo" type="text" value={formData.todo} onChange={handleInputChange} required />
                        </div>

                        
                    
                        <div className='space-y-2'>
                            <label htmlFor="description">Description *</label><br/>
                            <textarea className='w-[100%] p-2 text-base text-slate-700 bg-transparent border border-slate-700 rounded-md' name="description" id="description" cols={30} rows={3} value={formData.description} onChange={handleInputChange} required></textarea>
                        </div>
                    
                    </div>
                    <div className='mt-8'>
                        <button className="py-1 px-4 rounded-md text-[#FFC470] bg-slate-700 hover:scale-110 transition-all" type="submit">Add</button>
                    </div>                   
                    
                </form>
            </div>

        </div>
    )
}

export default TodoForm