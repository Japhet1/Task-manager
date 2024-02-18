import React from 'react'
import CreateTodo from "../component/createTodo"
// import FilterTodo from "./component/filterTodo"
import NavBar from "../component/navBar"
import TodoView from "../features/todoView"
import CreateCategory from '../component/createCategory'
import Notification from '../component/notification'



const Dashboard = () => {
  

  return (
    <main className="font-candara">
      <NavBar/>
      <div className='flex justify-end mx-10 px-10 pt-5'>
        <Notification/>
      </div>
      <div className="relative flex justify-between items-center mx-10 px-10 py-10">
        <CreateTodo/>
        <CreateCategory/>
      </div>
      <TodoView/>
    </main>
  )
  
}

export default Dashboard