import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  AppDispatch } from '../stores/store'
import { registerApi } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';


const Register = () => {


    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        const data = { username, email, password }
        dispatch(registerApi(data))
        // localStorage.setItem('user', JSON.stringify(data));
        // setIsLoggedIn(true);
        
        // {isLoggedIn && <Navigate to="/dashboard" />}
        navigate('/dashboard');
    };

    return (
        <main>
            <form className='w-80 p-20 space-y-10' onSubmit={handleAddTodo}>
                <div>
                    <h1 className='text-4xl font-semibold'>Sign Up</h1>
                </div>
                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <label>Full name:</label><br/>
                        <input className='w-96 p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' 
                        type="text" 
                        placeholder='' 
                        onChange={(e) => setUsername(e.target.value)} value={username}/>
                    </div>
                    <div className='space-y-2'>
                        <label>Email:</label><br/>
                        <input className='w-96 p-3 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' 
                        type="email" 
                        placeholder='' 
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className='space-y-2'>
                        <label>Password:</label><br/>
                        <input className='w-96 p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' 
                        type="password" 
                        placeholder='' 
                        onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div>
                        <button className='w-96 bg-blue-500 p-2 rounded-md text-white'>Continue</button>
                    </div>
                    <div className='w-96 space-y-4'>
                        <div>
                            <p>By confirming your email, you agree to our <strong>Term of Service</strong> and that you have read and understand our <strong>Privacy Policy</strong>.</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <h1>Already have an account?</h1><h1 className='text-blue-500 font-semibold'><a href="/signin">Login</a></h1>
                        </div>
                        
                    </div>
                    {/* <div>
                        <button disabled={isloading}>Sign up</button>
                        {error && <div className="error">{error}</div>}
                    </div> */}
                </div>
            </form>
        </main>
  )
}

export default Register