import React from 'react'
import { BiSolidCheckbox } from "react-icons/bi";
import { AppDispatch } from '../stores/store';
import { useDispatch} from 'react-redux';
import { setStatus } from '../features/todoSlice';
import { useEffect, useState } from 'react';


const Status: React.FC = () => {
    const [ filter, setFilter ] = useState("")
    const dispatch = useDispatch<AppDispatch>();
    //const status = useSelector((state: RootState) => state.categories.categories)
    //const todos = useSelector((state: RootState) => state.todos.todos);

    useEffect(() => {
        dispatch(setStatus(filter))
     
    })

  return (
    <main>
        <div className='space-y-3'>
            <div className='text-xl font-semibold'><h1>Status</h1></div>
            <div><button className='flex items-center space-x-2' onClick={(e) => { e.preventDefault(); setFilter("Pending")} }><BiSolidCheckbox className='text-red-600' /><h1>Pending</h1></button></div>
            <div><button className='flex items-center space-x-2' onClick={(e) => { e.preventDefault(); setFilter("In progress")} }><BiSolidCheckbox className='text-orange-600' /><h1>In progress</h1></button></div>
            <div><button className='flex items-center space-x-2' onClick={(e) => { e.preventDefault(); setFilter("Completed")} }><BiSolidCheckbox className='text-green-600' /><h1>Completed</h1></button></div>
        </div>
    </main>
  )
}

export default Status