//import TodoForm from "./todoForm"
import React from "react"
import TodoList from "./todoList"



const TodoView: React.FC = () => {


    return (
        <div className="relative z-10">
            <TodoList/>
        </div>
    )
}

export default TodoView