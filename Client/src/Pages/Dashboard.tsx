import React from 'react'
import CreateTodo from "../component/createTodo"
import NavBar from "../component/navBar"
import TodoView from "../features/todoView"
import CreateCategory from '../component/createCategory'


const Dashboard = () => {
  

  return (
    <main className="font-candara">
      <NavBar/>
      <div className="relative flex justify-between items-center mx-10 px-10 py-10">
        <CreateTodo/>
        <CreateCategory/>
      </div>
      <TodoView/>
    </main>
  )
  
}

export default Dashboard