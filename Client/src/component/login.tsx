import React, { useState } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { IoRemoveOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import {  AppDispatch } from '../stores/store'
import { loginApi } from '../features/authSlice'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        const data = { username, email, password }
        dispatch(loginApi(data))
        // localStorage.setItem('user', JSON.stringify(data));
        // setIsLoggedIn(true);

        // {isLoggedIn && <Navigate to="/dashboard" />}
        navigate('/dashboard');
    };
    
    return (
        <main>
            <form className='w-80 p-20 space-y-10' onSubmit={handleAddTodo}>
                <div>
                    <h1 className='text-4xl font-semibold'>Sign In</h1>
                </div>
                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <label>Username:</label><br/>
                        <input className='w-96 p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' 
                        type="text" 
                        placeholder='' 
                        onChange={(e) => setUsername(e.target.value)} value={username}
                        />
                    </div>
                    <div className='space-y-2'>
                        <label>Email:</label><br/>
                        <input className='w-96 p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' 
                        type="email" 
                        placeholder='' 
                        onChange={(e) => setEmail(e.target.value)} value={email}
                        />
                    </div>
                    <div className='space-y-2'>
                        <label>Password:</label><br/>
                        <input className='w-96 p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' 
                        type="password" 
                        placeholder='' 
                        onChange={(e) => setPassword(e.target.value)} value={password}
                        />
                    </div>
                    <div className='w-96'>
                        <div className='flex items-center justify-between'>
                            <div className='space-x-2'>
                                <input className='p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' type="checkbox" placeholder='' />
                                <label className='text-sm'>Remember Password</label>
                            </div>
                            <div>
                                <div><a href='' className='text-sm text-blue-500'>Reset Password</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <button className='w-96 bg-blue-500 p-2 rounded-md text-white'>Login</button>
                    </div>
                    <div className='w-96'>
                        <div className='flex items-center space-x-2'>
                            <h1>Don't have an account?</h1><h1 className='text-blue-500 font-semibold'><a href="/">Sign up</a></h1>
                        </div>
                    </div>
                    <div className='w-96'>
                        <div className='flex justify-center items-center space-x-3'>
                            <IoRemoveOutline className='' /><h1>Or</h1><IoRemoveOutline />
                        </div>
                    </div>
                    
                    <div>
                        <button className='w-96 flex items-center space-x-3 justify-center border p-2 rounded-md border-slate-500'><BsGoogle/><h1>Authorize with Google</h1></button>
                    </div>
                </div>
            </form>
        </main>
  )
}

export default Login