import React from "react"
// import TodoList from "./todoList"
import SideBar from "../component/sideBar"
// import DashboardView from "../component/dashboardView"

const TodoView: React.FC = () => {

    return (
        <div className="px-5 py-10">
            <div className=" rounded-2xl">
                <div className="">
                    <SideBar/>
                </div>
            </div>
            {/* <div className="">
                <DashboardView/>
                <TodoList/>
            </div> */}
        </div>
    )
}

export default TodoView