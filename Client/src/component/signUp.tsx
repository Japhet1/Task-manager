import React from 'react'


const SignUp = () => {
  return (
    <main>
        <form className='w-80 p-20 space-y-10' action="">
            <div>
                <h1 className='text-4xl font-semibold'>Sign Up</h1>
            </div>
            <div className='space-y-6'>
                <div className='space-y-2'>
                    <label>Full name:</label><br/>
                    <input className='w-96 p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' type="text" placeholder='' />
                </div>
                <div className='space-y-2'>
                    <label>Email:</label><br/>
                    <input className='w-96 p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' type="text" placeholder='' />
                </div>
                <div className='space-y-2'>
                    <label>Password:</label><br/>
                    <input className='w-96 p-2 text-base rounded-md focus:border-none focus:outline-none focus:ring-0 border border-slate-300' type="text" placeholder='' />
                </div>
                <div>
                    <button className='w-96 bg-blue-500 p-2 rounded-md text-white'><a href="/dashboard">Continue</a></button>
                </div>
                <div className='w-96 space-y-4'>
                    <div>
                        <p>By confirming your email, you agree to our <strong>Term of Service</strong> and that you have read and understand our <strong>Privacy Policy</strong>.</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <h1>Already have an account?</h1><h1 className='text-blue-500 font-semibold'><a href="/signin">Login</a></h1>
                    </div>
                    
                </div>
            </div>
        </form>
    </main>
  )
}

export default SignUp