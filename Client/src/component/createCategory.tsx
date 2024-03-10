import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createCategory } from '../features/categorySlice';
import {  AppDispatch } from '../stores/store'


interface FormData {
  id: number,
  category: string
}

const CreateCategory: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const [formData, setFormData] = useState<FormData>({
        id: Date.now(),
        category: ""
      });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({id: Date.now(), category: "" })
        dispatch(createCategory(formData))

      };
  return (
    <main>
        <div className=''>
            <div className='border border-slate-300 p-2 rounded-lg'>
                <form onSubmit={handleSubmit} className='flex item-center space-x-2' action="">
                    <div className=''>
                        <input 
                            className='bg-slate-50 text-md py-1 px-2 text-md focus:border-none focus:outline-none focus:ring-0' 
                            type="text" 
                            name="category"
                            placeholder='Add new category ....'
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div><button className='bg-slate-700 text-white rounded-lg py-1 px-2' type='submit'>Add</button></div>
                </form>      
            </div>
        </div>
        {/* <TodoForm onClose={handleOnClose} visible={openModal}/> */}
    </main>
  )
}

export default CreateCategory