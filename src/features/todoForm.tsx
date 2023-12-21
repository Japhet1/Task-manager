import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './todoSlice';
import {  AppDispatch } from '../stores/store'
import { BsX } from 'react-icons/bs'

interface Change {
    visible: boolean,
    onClose: () => void
}

const TodoForm: React.FC<Change> = ({visible, onClose}) => {
    
    if (!visible) return null
    const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const containerId = (e.target as HTMLDivElement).id 
        if (containerId === 'container') onClose()
    }

    const categoryOption = ["Office", "Home", "Church", "Shopping"]
  
    interface FormData {
        id: number,
        task: string,
        description: string,
        completed: string,
        category: string
    }
    const dispatch = useDispatch<AppDispatch>();
    //const [ selectedValue, setSelectedValue ] = useState<string>()
    const [ formData, setFormData ] = useState<FormData>({
        id: Date.now(),
        task: '',
        description: '',
        completed: '',
        category: ''
    })
   

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

  
    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        setFormData({id: Date.now(), task: '', description: '', completed: 'Not completed', category: '' })
        dispatch(createTodo(formData))
    };

    return (
        <div id='container' onClick={handleOnClose} className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 py-5'>
            <div className="flex justify-center text-lg">
                <form className="px-10 py-5 bg-slate-200 rounded-md shadow-md" onSubmit={handleAddTodo}>
                    
                    <div className='mb-8 flex justify-between items-center'><h1 className='text-3xl text-slate-500 font-bold'>Create Task</h1><div className='flex justify-end items-end'><button className='rounded-full p-2 border border-slate-500' onClick={onClose}><BsX/></button></div></div>
                    <div className='space-y-3'>
                        <div className='space-y-1'>
                            <label htmlFor="task">Name:</label><br/>
                            <input className="w-72 p-1 text-base rounded-md" name="task" type="text" value={formData.task} onChange={handleInputChange} required />
                        </div>
                    
                        <div className='space-y-1'>
                            <label htmlFor="description">Description:</label><br/>
                            
                            <textarea className='w-72 p-1 text-base rounded-md' name="description" id="description" cols={30} rows={3} value={formData.description} onChange={handleInputChange} required></textarea>
                        </div>
                    
                        <div className='space-y-1'>
                            <label htmlFor="category">Category:</label><br/>
                             
                            <select className='w-72 p-1 text-base rounded-md' name="category" id="category" value={formData.category} onChange={handleInputChange} required>
                            
                                {categoryOption.map((option) => (
                                    <option value={option}>{option}</option>
                                ))}
                                
                            </select>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <button className="py-1 px-4 rounded-md text-white bg-slate-500" type="submit">Add</button>
                    </div>                   
                    
                </form>
            </div>

        </div>
    )
}

export default TodoForm