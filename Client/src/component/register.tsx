import React, { useState } from 'react'
import { useRegister } from '../hooks/useRegister'
import { Input } from "../components/ui/input"


const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { registerApi, error, isLoading } = useRegister()

    const handleAddTodo = async (e: React.FormEvent) => {
        e.preventDefault()

        await registerApi (username, email, password)
    };

    console.log(error);
    

    return (
        <main className='flex items-center px-5'>
            <form className='w-[100%] bg-white dark:bg-slate-900 border border-black p-8 space-y-5 rounded-md shadow-3xl' onSubmit={handleAddTodo}>
                <div>
                    <h1 className='text-2xl text-black dark:text-white font-semibold'>Register</h1>
                </div>
                <div className='space-y-2'>
                    <div className='space-y-2'>
                        <label className='text-sm dark:text-white font-bold'>Full name:</label><br/>
                        <Input className={`
                        "w-[100%] bg-transparent text-sm rounded-md focus:border-none 
                        focus:outline-none focus:ring-0 border border-black dark:border-slate-700"
                        ${error ? 'border-red-500' : null}
                        `}
                        type="text" 
                        placeholder='' 
                        onChange={(e) => setUsername(e.target.value)} value={username}/>
                    </div>
                    <div className='space-y-2'>
                        <label className='text-sm dark:text-white font-bold'>Email:</label><br/>
                        <Input className={`
                        "w-[100%] bg-transparent text-sm rounded-md focus:border-none 
                        focus:outline-none focus:ring-0 border border-black dark:border-slate-700"
                        ${error ? 'border-red-500' : null}
                        `}
                        type="email" 
                        placeholder='' 
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className='space-y-2 mb-5'>
                        <label className='text-sm dark:text-white font-bold'>Password:</label><br/>
                        <Input className={`
                        "w-[100%] bg-transparent text-sm rounded-md focus:border-none 
                        focus:outline-none focus:ring-0 border border-black dark:border-slate-700"
                        ${error ? 'border-red-500' : null}
                        `}
                        type="password" 
                        placeholder='' 
                        onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className='w-[100%]'>
                        <div className='flex items-center justify-between'>
                            <div className='space-x-2'>
                                <input className='text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-black dark:border-slate-700' type="checkbox" placeholder='' />
                                <label className='text-sm dark:text-white'>Remember Password</label>
                            </div>
                            {/* <div>
                                <div><a href='' className='text-sm text-black dark:text-white'>Reset Password</a></div>
                            </div> */}
                        </div>
                    </div>
                    {error && <div className="bg-red-100 text-red-500 px-2 py-1 rounded-md text-center">{error}</div>}
                    <div className='py-4'>
                        <button className='w-[100%] bg-black dark:bg-slate-800 p-2 rounded-md text-white font-bold' disabled={isLoading}>Sign up</button>
                        
                    </div>
                    <div className='w-[100%] py-5'>
                        {/* <div>
                            <p>By confirming your email, you agree to our <strong>Term of Service</strong> and that you have read and understand our <strong>Privacy Policy</strong>.</p>
                        </div> */}
                        <div className='flex items-center space-x-2'>
                            <h1>Already have an account?</h1><h1 className='text-black dark:text-white font-semibold'><a href="/login">Login</a></h1>
                        </div>
                        
                    </div>
                    {/* <div>
                        <button disabled={isLoading}>Sign up</button>
                        {error && <div className="error">{error}</div>}
                    </div> */}
                </div>
            </form>
        </main>
  )
}

export default Register