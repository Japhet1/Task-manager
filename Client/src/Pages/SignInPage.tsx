import React from 'react'
import NavBarHomePage from '../component/navBarHomePage'
import Login from '../component/login'


const SignInPage = () => {
  

  return (
    <main className="font-candara">
      <NavBarHomePage/>
      <div className="mx-10 px-10 grid grid-cols-12 gap-4 ">
        <div className='col-span-8'>
          <img className='text-slate-300 w-[50%] object-cover' src="/1.png" alt="" />
        </div>
        <div className='col-span-4 items-center'>
          <Login/>
        </div>
      </div>
    </main>
  )
  
}

export default SignInPage