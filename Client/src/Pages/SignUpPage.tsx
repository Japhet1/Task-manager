import React from 'react'
// import FilterTodo from "./component/filterTodo"
import NavBarHomePage from '../component/navBarHomePage'
import SignUp from '../component/signUp'



const SignUpPage = () => {
  

  return (
    <main className="font-candara">
      <NavBarHomePage/>
      <div className="mx-10 px-10 flex justify-center ">
        <div>
          <img className='text-slate-300 w-192 h-192 object-cover' src="/3.png" alt="" />
        </div>
        <div>
          <SignUp/>
        </div>
      </div>
    </main>
  )
  
}

export default SignUpPage