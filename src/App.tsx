import CreateTodo from "./component/createTodo"
import FilterTodo from "./component/filterTodo"
import NavBar from "./component/navBar"
import TodoView from "./features/todoView"



const App = () => {
  

  return (
    <main className="font-candara">
      <NavBar/>
      <div className="flex justify-between items-end mx-10 px-10 py-8">
        <CreateTodo/>
        <FilterTodo/>
      </div>
      <TodoView/>
    </main>
  )
  
}

export default App