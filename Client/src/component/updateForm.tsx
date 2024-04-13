import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoAsync } from '../features/todoSlice';
import {  AppDispatch, RootState } from '../stores/store'
import { BsX } from 'react-icons/bs'
// import { useSelector } from 'react-redux';
// import { RootState } from '../stores/store';

interface Change {
    visible: boolean,
    onClose: () => void,
    //todos: Todo[],
    _id: string
}

const UpdateForm: React.FC<Change> = ({visible, onClose }) => {
   
    
  
    interface Todo {
        _id: string,
        date: Date,
        todo: string,
        description: string,
        status: string,
        category: string
        assigned: string
        //todos: []
    }
    
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.categories)
    //const todos = useSelector((state: RootState) => state.todos.todos);
    //const [ selectedValue, setSelectedValue ] = useState<string>()
    const [ formData, setFormData ] = useState<Todo>({
        _id: '',
        date: new Date(),
        todo: '',
        description: '',
        status: '',
        category: '',
        assigned: ''
        //todo: todos[]
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
        dispatch(updateTodoAsync(formData))
        //dispatch(updateTodoAsync({ ...todo, status: 'Pending' }));
        //setFormData({...todos, description: "",  category: "" })
        //dispatch(updateTodoAsync())
    };

    return (
        <div id='container' onClick={handleOnClose} className='flex justify-center items-center fixed z-20 inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 py-5'>
            <div className="flex justify-center text-lg">
                <form className="px-10 py-5 bg-slate-200 rounded-md shadow-md" onSubmit={handleAddTodo}>
                    
                    <div className='mb-8 flex justify-between items-center'><h1 className='text-3xl text-slate-500 font-bold'>Update task</h1><div className='flex justify-end items-end hover:scale-110 transition-all'><button className='rounded-full p-2 border border-slate-500' onClick={onClose}><BsX/></button></div></div>
                    <div className='space-y-3'>
                        <div className='space-y-1'>
                            <label htmlFor="todo">Task:</label><br/>
                            <input className="w-72 p-1 text-base rounded-md" name="todo" type="text" value={formData.todo} onChange={handleInputChange} required />
                        </div>
                    
                        <div className='space-y-1'>
                            <label htmlFor="description">Description:</label><br/>
                            
                            <textarea className='w-72 p-1 text-base rounded-md' name="description" id="description" cols={30} rows={3} value={formData.description} onChange={handleInputChange} required></textarea>
                        </div>
                    
                        <div className='space-y-1'>
                            <label htmlFor="category">Category:</label><br/>
                             
                            <select className='w-72 p-1 text-base rounded-md' name="category" id="category" value={formData.category} onChange={handleInputChange} required>
                            
                                {categories.map((option, index) => (
                                    <option key={index} value={option.category}>{option.category}</option>
                                ))}
                                
                            </select>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <button className="py-1 px-4 rounded-md text-white bg-slate-500 hover:scale-110 transition-all" type="submit">Update</button>
                    </div>                   
                    
                </form>
            </div>

        </div>
    )
}

export default UpdateForm