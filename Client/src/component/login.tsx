import React, { useState } from 'react'
// import { BsGoogle } from 'react-icons/bs'
// import { IoRemoveOutline } from "react-icons/io5";
import { useLogin } from '../hooks/useLogin'
import { Input } from "../components/ui/input"


const Login = () => {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { loginApi, error, isLoading } = useLogin()
    
    const handleAddTodo = async (e: React.FormEvent) => {
        e.preventDefault()
        
        await loginApi(username, email, password )        
    };

    console.log(error)
    
    return (
        <main className='flex items-center px-5' style={{width: "32vw"}}>
            <form className='w-[100%] bg-white dark:bg-slate-900 border border-black p-8 space-y-8  rounded-md shadow-3xl' onSubmit={handleAddTodo}>
                {/* <div>
                    <h1 className='text-2xl text-black dark:text-white font-semibold'>Sign In</h1>
                </div> */}
                <div className='space-y-3'>
                    <div className='space-y-2'>
                        <label className='text-sm dark:text-white font-bold'>Username:</label><br/>
                        <Input className={`
                            "w-[100%] bg-transparent text-sm rounded-md focus:border-none 
                            focus:outline-none focus:ring-0 border border-black dark:border-slate-700"
                            ${error ? 'border-red-500' : null}
                        `}
                        type="text" 
                        placeholder='' 
                        onChange={(e) => setUsername(e.target.value)} value={username}
                        />
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
                        onChange={(e) => setEmail(e.target.value)} value={email}
                        />
                    </div>
                    <div className='space-y-2'>
                        <label className='text-sm dark:text-white font-bold'>Password:</label><br/>
                        <Input className={`
                            "w-[100%] bg-transparent text-sm rounded-md focus:border-none 
                            focus:outline-none focus:ring-0 border border-black dark:border-slate-700"
                            ${error ? 'border-red-500' : null}
                        `}
                        type="password" 
                        placeholder='' 
                        onChange={(e) => setPassword(e.target.value)} value={password}
                        />
                    </div>
                    {/* <div className='w-[100%]'>
                        <div className='flex items-center justify-between'>
                            <div className='space-x-2'>
                                <input className='text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-black dark:border-slate-700' type="checkbox" placeholder='' />
                                <label className='text-sm dark:text-white'>Remember Password</label>
                            </div>
                            <div>
                                <div><a href='' className='text-sm text-black dark:text-white'>Reset Password</a></div>
                            </div>
                        </div>
                    </div> */}
                    {error && <div className="bg-red-100 text-red-500 px-2 py-1 rounded-md text-center">{error}</div>}
                    <div className=''>
                        <button className='w-[100%] bg-black dark:bg-slate-800 p-2 rounded-md text-white font-bold' disabled={isLoading}>Login</button>
                        
                    </div>
                    <div className='w-[100%] py-5'>
                        <div className='flex items-center space-x-2 dark:text-white'>
                            <h1>Don't have an account?</h1><h1 className='text-black dark:text-white font-semibold'><a href="/">Sign up</a></h1>
                        </div>
                    </div>
                    {/* <div className='w-[100%]'>
                        <div className='flex justify-center items-center space-x-3'>
                            <IoRemoveOutline className='' /><h1>Or</h1><IoRemoveOutline />
                        </div>
                    </div> */}
                    
                    {/* <div>
                        <button className='w-[100%] flex items-center space-x-3 justify-center border p-2 rounded-md border-slate-500'><BsGoogle/><h1>Authorize with Google</h1></button>
                    </div> */}
                </div>
            </form>
        </main>
  )
}

export default Login