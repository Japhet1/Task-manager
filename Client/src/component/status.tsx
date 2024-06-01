import React from 'react'
// import { BiSolidCheckbox } from "react-icons/bi";
// import { AppDispatch } from '../stores/store';
// import { useDispatch} from 'react-redux';
// import { setStatus } from '../features/todoSlice';
// import { useEffect, useState } from 'react';
import { MdOutlineConstruction } from "react-icons/md";


const Status: React.FC = () => {
    // const [ filter, setFilter ] = useState("")
    // const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     dispatch(setStatus(filter))
     
    // })

  return (
    <main className='flex justify-center items-center py-50 bg-slate-300 rounded-2xl h-96'>
        {/* <div className='space-y-3'>
            <div className='text-xl font-semibold'><h1>Status</h1></div>
            <div><button className='flex items-center space-x-2' onClick={(e) => { e.preventDefault(); setFilter("Pending")} }><BiSolidCheckbox className='text-red-600' /><h1>Pending</h1></button></div>
            <div><button className='flex items-center space-x-2' onClick={(e) => { e.preventDefault(); setFilter("In progress")} }><BiSolidCheckbox className='text-orange-600' /><h1>In progress</h1></button></div>
            <div><button className='flex items-center space-x-2' onClick={(e) => { e.preventDefault(); setFilter("Completed")} }><BiSolidCheckbox className='text-green-600' /><h1>Completed</h1></button></div>
        </div> */}
        <div className=''>
          <div className='flex justify-center'><MdOutlineConstruction className='text-8xl text-slate-400' /></div>
          <div><h1 className='text-4xl text-slate-400'>Under construction</h1></div>
        </div>
    </main>
  )
}

export default Status