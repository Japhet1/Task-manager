import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createCategory } from '../features/categorySlice';
import {  AppDispatch } from '../stores/store'


interface FormData {
  _id: string,
  category: string
}

const CreateCategory: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const token = JSON.parse(localStorage.getItem('user') || '')
    const [formData, setFormData] = useState<FormData>({
        _id: '',
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
        setFormData({_id: '', category: '' })
        dispatch(createCategory(formData))

      };
  return (
    <main>
        {token.username == "Admin" ?
          <div className=''>
              <div className='bg-slate-50 p-2 rounded-2xl'>
                  <form onSubmit={handleSubmit} className='flex item-center space-x-2' action="">
                      <div className=''>
                          <input 
                              className='text-md text-slate-900 py-1 px-2 text-md focus:border-none focus:outline-none focus:ring-0 bg-transparent' 
                              type="text" 
                              name="category"
                              placeholder='Add new category ....'
                              value={formData.category}
                              onChange={handleInputChange}
                              required
                          />
                      </div>
                      {/* <div><button className='bg-slate-900 text-slate-100 rounded-lg py-1 px-2' type='submit'>Add</button></div> */}
                  </form>      
              </div>
          </div> : null
        }
    </main>
  )
}

export default CreateCategory