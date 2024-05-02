import React from 'react'
import NavBarHomePage from '../component/navBarHomePage'
import Login from '../component/login'


const SignInPage = () => {
  

  return (
    <main className="font-candara">
      <NavBarHomePage/>
      <div className="flex justify-center px-10 ">
        {/* <div className='col-span-8 items-center'>
          <div className='flex justify-center'><img className='text-slate-300 w-[50%] object-cover' src="/1.png" alt="" /></div>
        </div> */}
        <div className='items-center'>
          <Login/>
        </div>
      </div>
    </main>
  )
  
}

export default SignInPage