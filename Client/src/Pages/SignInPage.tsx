import React from 'react'
// import FilterTodo from "./component/filterTodo"
import NavBarHomePage from '../component/navBarHomePage'
import Login from '../component/login'



const SignInPage = () => {
  

  return (
    <main className="font-candara">
      <NavBarHomePage/>
      <div className="mx-10 px-10 flex justify-center ">
        <div>
          <img className='text-slate-300 w-192 h-192 object-cover' src="/1.png" alt="" />
        </div>
        <div>
          <Login/>
        </div>
      </div>
    </main>
  )
  
}

export default SignInPage