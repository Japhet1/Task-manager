import React from 'react'
import CreateTodo from "../component/createTodo"
import NavBar from "../component/navBar"
import TodoView from "../features/todoView"
import CreateCategory from '../component/createCategory'
// import TodoList from '../features/todoList'


const Dashboard = () => {
  

  return (
    <main className="font-candara">
      <NavBar/>
      <div className="relative flex justify-center space-x-10 items-end px-10 py-5">
        <CreateTodo/>
        <CreateCategory/>
      </div>
      <TodoView/>
      {/* <TodoList/> */}
    </main>
  )
  
}

export default Dashboard