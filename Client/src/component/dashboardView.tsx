import React from 'react'
import { BsDashLg } from "react-icons/bs";

const DashboardView = () => {
  return (
    <main className='p-5 bg-slate-50 rounded-2xl'>
        <div className='text-3xl font-semibold my-8 drop-shadow-lg'>
            <h1>Dashboard</h1>
        </div>
        <div className='drop-shadow-lg'>
            <div className='text-xl font-semibold my-8'>
                <h1>Categories</h1>
            </div>
            <div className='flex flex-wrap gap-10 justify-center items-center'>
                <div className='w-[30%] p-5 bg-slate-900 text-slate-100 rounded-xl'>
                    <h1 className='text-xl font-bold mb-5'>Backend</h1>
                    <div className='flex flex-wrap gap-4'>
                        <h1>Task: 0</h1>
                        <h1>Pending: 0</h1>
                        <h1>In Progress: 0</h1>
                        <h1>Completed: 0</h1>
                        <h1>Users: 0</h1>
                    </div>
                </div>
                <div className='w-[30%] p-5 bg-slate-900 text-slate-100 rounded-xl'>
                    <h1 className='text-xl font-bold mb-5'>Frontend</h1>
                    <div className='flex flex-wrap gap-4'>
                        <h1>Task: 0</h1>
                        <h1>Pending: 0</h1>
                        <h1>In Progress: 0</h1>
                        <h1>Completed: 0</h1>
                        <h1>Users: 0</h1>
                    </div>
                </div>
                <div className='w-[30%] p-5 bg-slate-900 text-slate-100 rounded-xl'>
                    <h1 className='text-xl font-bold mb-5'>UI/UX</h1>
                    <div className='flex flex-wrap gap-4'>
                        <h1>Task: 0</h1>
                        <h1>Pending: 0</h1>
                        <h1>In Progress: 0</h1>
                        <h1>Completed: 0</h1>
                        <h1>Users: 0</h1>
                    </div>
                </div>
                <div className='w-[30%] p-5 bg-slate-900 text-slate-100 rounded-xl'>
                    <h1 className='text-xl font-bold mb-5'>DevOps</h1>
                    <div className='flex flex-wrap gap-4'>
                        <h1>Task: 0</h1>
                        <h1>Pending: 0</h1>
                        <h1>In Progress: 0</h1>
                        <h1>Completed: 0</h1>
                        <h1>Users: 0</h1>
                    </div>
                </div>
                <div className='w-[30%] p-5 bg-slate-900 text-slate-100 rounded-xl'>
                    <h1 className='text-xl font-bold mb-5'>Data Science</h1>
                    <div className='flex flex-wrap gap-4'>
                        <h1>Task: 0</h1>
                        <h1>Pending: 0</h1>
                        <h1>In Progress: 0</h1>
                        <h1>Completed: 0</h1>
                        <h1>Users: 0</h1>
                    </div>
                </div>
                <div className='w-[30%] p-5 bg-slate-900 text-slate-100 rounded-xl'>
                    <h1 className='text-xl font-bold mb-5'>Q&A</h1>
                    <div className='flex flex-wrap gap-4'>
                        <h1>Task: 0</h1>
                        <h1>Pending: 0</h1>
                        <h1>In Progress: 0</h1>
                        <h1>Completed: 0</h1>
                        <h1>Users: 0</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-wrap justify-between items-center'>
            <div className='w-[50%] my-8 p-5 rounded-xl drop-shadow-sm'>
                <div className='text-slate-900 text-xl font-semibold mb-5 '>
                    <h1>Status</h1>
                </div>
                <div className='space-y-5 text-slate-500'>
                    <h1>Pending Tasks: 0</h1>
                    <h1>In Progress Tasks: 0</h1>
                    <h1>Completed Tasks: 0</h1>
                </div>
            </div>
            <div className='w-[50%] my-8 p-5 rounded-xl drop-shadow-sm'>
                <div className='text-slate-900 text-xl font-semibold mb-5 '>
                    <h1>Users</h1>
                </div>
                <div className='space-y-5 text-slate-500'>
                    <div className='flex ite space-x-2'>
                        <BsDashLg />
                        <h1>User 1</h1>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <h1>Pending Tasks: 0</h1>
                        <h1>In Progress Tasks: 0</h1>
                        <h1>Completed Tasks: 0</h1>
                    </div>
                </div>
            </div>
            <div className='w-[50%] my-8 p-5 rounded-xl drop-shadow-sm'>
                <div className='text-slate-900 text-xl font-semibold mb-5 '>
                    <h1>Timeline</h1>
                </div>
                <div className='space-y-5 text-slate-500'>
                    <h1>Pending Tasks: 0</h1>
                    <h1>In Progress Tasks: 0</h1>
                    <h1>Completed Tasks: 0</h1>
                </div>
            </div>
        </div>
    </main>
  )
}

export default DashboardView