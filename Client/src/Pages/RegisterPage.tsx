import React from 'react'
import NavBarHomePage from '../component/navBarHomePage'
import Register from '../component/register'


const RegisterPage = () => {

  return (
    <main className="font-candara">
      <NavBarHomePage/>
      <div className=" px-10 flex gap-4">
        <div className='w-[75%] items-center pe-20 py-36 space-y-10'>
          {/* <img className='text-slate-300 w-[50%] object-cover' src="/3.png" alt="" /> */}
          
          <div><h1 className='font-bold text-3xl text-slate-700'><span className='text-5xl bg-slate-700 text-[#FFC470] p-2 rounded-tr-xl rounded-bl-xl'>Welcome</span> Champion of Productivity! 🌟</h1></div>
          <div>
            <h1 className='leading-10 text-xl text-slate-700'>
              Prepare to conquer your tasks and reign supreme over your schedule with our powerful 
              Task Manager app. Let's embark on this journey together, turning your to-do lists into 
              triumphs and your goals into glorious achievements. Embrace efficiency, seize success, 
              and let's make every day a masterpiece!
            </h1>
          </div>
           
        </div>
        <div className='w-[40%]'>
          <Register/>
        </div>
      </div>
    </main>
  )
  
}

export default RegisterPage