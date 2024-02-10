import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, updateTodoAsync } from './todoSlice';
import { fetchCategories } from './categorySlice';
import { RootState, AppDispatch, selectFilteredData, filterStatus } from '../stores/store';
import { MdAdd } from 'react-icons/md'
import FilterCategory from "../component/filterCategory"
import Status from '../component/status';
import UpdateTodo from '../component/updateTodo';
import DeleteTodo from '../component/deleteTodo';
//import { formatDistanceToNow } from "date-fns";

const ITEMS_PER_PAGE = 12;

const TodoList: React.FC = () => {
    
    interface Todo {
        id: number,
        todo: string,
        description: string,
        status: string,
        category: string,
    }

    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const filteredByStatus= useSelector(filterStatus)
    const filteredData = useSelector(selectFilteredData)
    // const filterTodos = todos ? todos.filter((todo) => 
    //     filteredData === null ? todo :
    //     todo.category.toLowerCase().includes(filteredData.toLocaleLowerCase())
        
    //     )
    //     : todos
    

    const filterTodos = todos ? (
        Array.isArray(todos) ?
          todos.filter((todo) => 
            filteredData === null ? true : todo.category.toLowerCase().includes(filteredData.toLowerCase())
          ) 
          // todos.filter((todo) => 
          //   filteredByStatus === null ? true : todo.status.toLowerCase().includes(filteredByStatus.toLowerCase())
          // )
        : []
    ) : [];
    const filter = todos ? (
      Array.isArray(todos) ?
        todos.filter((todo) => 
          filteredByStatus === null ? true : todo.category.toLowerCase().includes(filteredByStatus.toLowerCase())
        ) 
        // todos.filter((todo) => 
        //   filteredByStatus === null ? true : todo.status.toLowerCase().includes(filteredByStatus.toLowerCase())
        // )
      : []
  ) : [];

    const handleTogglePending = (todo: Todo) => {
      dispatch(updateTodoAsync({ ...todo, status: 'Pending' }));
    };
    const handleToggleInProgress = (todo: Todo) => {
      dispatch(updateTodoAsync({ ...todo, status: 'In progress' }));
    };
    const handleToggleStatus = (todo: Todo) => {
      dispatch(updateTodoAsync({ ...todo, status: 'Completed' }));
    };

    
    
  
    useEffect(() => {
      dispatch(fetchTodos());
      dispatch(fetchCategories());
    }, [dispatch]);
    
    const newfilter = filterTodos.length | filter.length;
    const totalPages = Math.ceil(newfilter / ITEMS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
      setCurrentPage(newPage);
    };
    
    const displayedTodos = filterTodos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className='flex mx-10 px-10 py-5 gap-10'>
          <div className='w-40 space-y-10 text-slate-700' >
            <div className=''>
              <FilterCategory/>
            </div>
            <div>
              <Status/>
            </div>
            <div className='space-y-3'>
              <div className='text-xl font-semibold'><h1>Filter</h1></div>
              <div><a href="/"><h1>Day</h1></a></div>
              <div><a href="/"><h1>Month</h1></a></div>
              <div><a href="/"><h1>Year</h1></a></div>
            </div>
          </div>
          <div className='w-full'>
            <div className="grid grid-cols-12 gap-10">
                {displayedTodos.slice(0, ITEMS_PER_PAGE).map((item) => (
                    <div key={item.id} className="relative col-span-4 rounded-lg bg-gray-50 border border-slate-300">
                        <div className='p-5'>
                            <div className="flex justify-between text-gray-500 mb-4">
                              
                              <div className='space-y-4'>
                                  <h1>{item.id}</h1>
                                  <h1 
                                      className={ item.status === "Pending"? 'text-red-500 font-semibold' : 
                                                  item.status === "In progress"? 'text-orange-500 font-semibold': 
                                                  item.status === "Completed"? 'text-green-500 font-semibold': ""
                                                }>
                                      {item.status}
                                  </h1>
                              </div>
                              <div className='flex space-x-2'>
                                  <UpdateTodo item={item.id}/>
                                  <DeleteTodo item={item.id}/>
                              </div>
                            </div>
                            <div className='space-y-3 mb-10'>
                                <div className="space-y-6">
                                  <h1 className="text-base font-semibold">Task:</h1>
                                  <span className="text-base text-slate-600">
                                    {item.todo}
                                  </span>
                                </div>
                                <div className="space-y-6">
                                  <h1 className="text-base font-semibold">
                                    Description:
                                  </h1>
                                  <span className="text-base text-slate-600">
                                    {item.description}
                                  </span>
                                </div>
                                {/* <div className="flex items-center justify-between">
                                    <div className='flex items-center space-x-3'>
                                      <h1 className="text-base font-semibold">
                                        Status:
                                      </h1>
                                      
                                    </div> 
                                </div> */}
                            </div> 
                        </div>
                        <div className='flex'>
                          <div className='absolute left-0 bottom-0 w-24 text-center font-semibold text-sm rounded-tr-md rounded-bl-md py-1 px-3 bg-slate-700 text-white mb-0'>
                            <h1>
                              {item.category}
                            </h1>
                          </div>
                          <div className='absolute right-2 bottom-1 space-x-2'>
                              <button className='text-center bg-red-600 text-base text-white px-2 py-1 rounded-lg' onClick={() => handleTogglePending(item)}><MdAdd/></button>
                              <button className='text-center bg-orange-600 text-base text-white px-2 py-1 rounded-lg' onClick={() => handleToggleInProgress(item)}><MdAdd/></button>
                              <button className='text-center bg-green-600 text-base text-white px-2 py-1 rounded-lg' onClick={() => handleToggleStatus(item)}><MdAdd/></button>
                          </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center space-x-5 mt-20 text-xl'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className='hover:scale-110 rounded-lg border border-slate-700 py-1 px-3 transition-all' key={index} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
    
          </div>
        </div>
    )
}

export default TodoList