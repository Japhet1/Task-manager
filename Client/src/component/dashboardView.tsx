import React, { useState, useEffect } from 'react';
import { BsDashLg } from "react-icons/bs";
import { AppDispatch, allCategories } from '../stores/store';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../features/authSlice';

interface Category {
    _id: string;
    category: string;
  }

  interface UserData {
    _id: string,
    username: string,
    email: string,
    password: string
}

const DashboardView = () => {

    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector(allCategories)

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


    return (
        <main className='p-5 bg-slate-300 rounded-2xl'>
            <div className='text-3xl font-semibold my-8 '>
                <h1>Dashboard</h1>
            </div>
            <div className=''>
                <div className='text-xl font-semibold my-8'>
                    <h1>Categories</h1>
                </div>
                <div className='flex flex-wrap gap-10 justify-between items-center'>
                    {categories.map((category: Category) => (
                        <div key={category._id} className='w-[30%] p-5 bg-slate-50 text-slate-900 rounded-xl'>
                            <h1 className='text-xl font-bold mb-5'>{category.category}</h1>
                            <div className='flex flex-wrap gap-4'>
                                <h1>Task: 0</h1>
                                <h1>Pending: 0</h1>
                                <h1>In Progress: 0</h1>
                                <h1>Completed: 0</h1>
                                <h1>Users: 0</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-wrap my-8 space-x-10 rounded-xl bg-slate-50'>
                <div className='w-[48%] p-10'>
                    <div className='text-slate-900 text-xl font-semibold mb-5 '>
                        <h1>Status</h1>
                    </div>
                    <div className='space-y-5 text-slate-500'>
                        <h1>Pending Tasks: 0</h1>
                        <h1>In Progress Tasks: 0</h1>
                        <h1>Completed Tasks: 0</h1>
                    </div>
                </div>
                <div className='w-[48%] p-10'>
                    <div className='text-slate-900 text-2xl font-semibold mb-5 '>
                        <h1>Users</h1>
                    </div>
                    {user.map((user) => (
                        user.username !== "Admin" ?
                        <div key={user._id} className='space-y-3 text-slate-500 mb-5'>
                            <div className='flex ite space-x-2 text-slate-900'>
                                <BsDashLg />
                                <h1 className='font-bold '>{user.username}</h1>
                            </div>
                            <div className='flex items-center space-x-5'>
                                <h1>Pending Tasks: 0</h1>
                                <h1>In Progress Tasks: 0</h1>
                                <h1>Completed Tasks: 0</h1>
                            </div>
                        </div>
                        : null
                    ))}
                </div>
            </div>
            <div className='flex flex-wrap gap-10'>
                <div className='w-[50%] my-8 p-10 rounded-xl bg-slate-50'>
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