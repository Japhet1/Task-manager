import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, updateTodoAsync } from './todoSlice';
import { fetchCategories } from './categorySlice';
import { RootState, AppDispatch, selectFilteredData, filterStatus } from '../stores/store';
import { MdAdd } from 'react-icons/md'
import { BsTable } from "react-icons/bs";
import { PiCards } from "react-icons/pi";
import FilterCategory from "../component/filterCategory"
// import Status from '../component/status';
import UpdateTodo from '../component/updateTodo';
import DeleteTodo from '../component/deleteTodo';
import date from 'date-and-time';

const ITEMS_PER_PAGE = 9;


const TodoList: React.FC = () => {  
  
    interface Todo {
        _id: string,
        date: Date,
        todo: string,
        description: string,
        status: string,
        category: string,
        assigned: string
    }

    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const filteredByStatus= useSelector(filterStatus)
    const filteredData = useSelector(selectFilteredData)

    console.log(filteredData)
    
    const filterTodos = todos ? (
        Array.isArray(todos) ?
          todos.filter((todo) => 
            filteredData === null || '' ? true : todo.category.toLowerCase().includes(filteredData.toLowerCase())
          ) 
        : []
    ) : [];
    const filter = todos ? (
      Array.isArray(todos) ?
        todos.filter((todo) => 
          filteredByStatus === null || '' ? true : todo.category.toLowerCase().includes(filteredByStatus.toLowerCase())
        ) 
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

    const [showCards, setShowCards] = useState(true);

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
    const token = JSON.parse(localStorage.getItem('user') || '')



    return (
        <div className='p-5 bg-slate-300 rounded-2xl'>
          
          <div className='flex items-center justify-between text-slate-900 ' >
            <div className='text-3xl font-semibold my-4'>
              <h1>Tasks</h1>
            </div>
            {token.username == "Admin" ?
              <div className=''>
                <FilterCategory/>
              </div> 
              : null 
            }
            {/* <div>
              <Status/>
            </div> */}
            {/* <div className='space-y-3'>
              <div className='text-xl font-semibold'><h1>Filter</h1></div>
              <div><a href="/"><h1>Day</h1></a></div>
              <div><a href="/"><h1>Month</h1></a></div>
              <div><a href="/"><h1>Year</h1></a></div>
            </div> */}
          </div>
          <div className='w-full'>
            <div className='flex justify-end items-center my-5'>
              <div className='flex items-center  rounded-lg'>
                <div className={`flex p-2 items-center space-x-2 rounded-md ${showCards ? 'bg-slate-200 text-slate-900' : 'button-inactive'}`}>
                  <button onClick={() => setShowCards(true)}>
                    <PiCards className='text-xl'/>
                  </button>
                </div>
                <div className={`flex p-2 items-center space-x-2 rounded-md ${showCards ? 'button-active' : 'bg-slate-200 text-slate-900'}`}>
                  <button onClick={() => setShowCards(false)}>
                    <BsTable className='text-xl'/>
                  </button>
                </div>
              </div>
            </div>
            { showCards ? (
                <div className="grid grid-cols-12 gap-10">
                  {displayedTodos.slice(0, ITEMS_PER_PAGE).map((item) => (
                      <div key={item._id} className="relative col-span-4 rounded-lg bg-slate-50">
                          <div className='p-5'>
                              <div className="flex justify-between text-slate-900 mb-5">
                                
                                <div className=''>
                                    <h1>{date.format(new Date(item.date), 'DD-MM-YYYY')}</h1>
                                    
                                </div>
                                <div className='text-lg'>
                                    <h1 
                                        className={ item.status === "Pending"? 'text-red-500 font-semibold' : 
                                                    item.status === "In progress"? 'text-orange-500 font-semibold': 
                                                    item.status === "Completed"? 'text-green-500 font-semibold': ""
                                                  }>
                                        {item.status}
                                    </h1>
                                </div>
                                {token.username == "Admin" ?
                                  <div className='flex space-x-2'>
                                    <UpdateTodo item={item._id} assigned={item.assigned} category={item.category} todo={item.todo} desc={item.description} status={item.status}  />
                                    <DeleteTodo item={item._id}/>
                                  </div>
                                  : null
                                }
                                
                              </div>
                              <div className='space-y-3 mb-10'>
                                  <div className="space-y-6">
                                    <h1 className="text-base font-semibold">Task:</h1>
                                    <span className="text-sm text-slate-500">
                                      {item.todo}
                                    </span>
                                  </div>
                                  <div className="space-y-6">
                                    <h1 className="text-base font-semibold">
                                      Description:
                                    </h1>
                                    <span className="text-sm text-slate-500">
                                      {item.description}
                                    </span>
                                  </div>
                                  <div className="space-y-6">
                                    <h1 className="text-base font-semibold">Assigned To:</h1>
                                    <span className="text-sm text-slate-500">
                                      {item.assigned}
                                    </span>
                                  </div>
                              </div> 
                          </div>
                          <div className='flex'>
                            <div className='absolute left-0 bottom-0 w-36 text-center font-semibold text-sm rounded-tr-lg rounded-bl-lg py-1 px-3 bg-slate-600 text-slate-50 mb-0'>
                              <h1>
                                {item.category}
                              </h1>
                            </div>
                            {token.username !== "Admin" ? 
                              <div className='absolute right-2 bottom-1 space-x-2'>
                                <button className='text-center bg-red-600 text-base text-white px-2 py-1 rounded-lg' onClick={() => handleTogglePending(item)}><MdAdd/></button>
                                <button className='text-center bg-orange-600 text-base text-white px-2 py-1 rounded-lg' onClick={() => handleToggleInProgress(item)}><MdAdd/></button>
                                <button className='text-center bg-green-600 text-base text-white px-2 py-1 rounded-lg' onClick={() => handleToggleStatus(item)}><MdAdd/></button>
                              </div>  
                              : null
                            }
                          </div>
                          
                      </div>
                  ))}
                </div>
              ): (
                <div className="">
                    <div>
                      <table className='bg-slate-50 rounded-xl'>
                        <thead>
                          <tr className='font-semibold text-start bg-slate-600 text-slate-50'>
                            <th className='w-[10%] p-3 text-start text-lg'>Date</th>
                            <th className='w-[10%] p-3 text-start text-lg'>Status</th>
                            <th className='w-[30%] p-3 text-start text-lg'>Task</th>
                            <th className='w-[30%] p-3 text-start text-lg'>Description</th>
                            <th className='w-[10%] p-3 text-start text-lg'>Assigned</th>
                            <th className='w-[20%] p-3 text-start text-lg'>Category</th>
                            <th className='w-[20%] p-3 text-start text-lg'>Actions</th>

                            {/* <th className='w-[20%] p-3 text-start text-lg'></th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {displayedTodos.slice(0, ITEMS_PER_PAGE).map((item) => (
                            <tr key={item._id} className=' rounded-lg hover:bg-slate-100'>
                              <td className='p-3 text-sm text-slate-800'><h1>{date.format(new Date(item.date), 'DD-MM-YYYY')}</h1></td>
                              <td className='p-3 text-sm'>
                                <h1 className={ item.status === "Pending"? 'text-red-500 font-semibold' : 
                                                item.status === "In progress"? 'text-orange-500 font-semibold': 
                                                item.status === "Completed"? 'text-green-500 font-semibold': ""
                                              }>
                                    {item.status}
                                  </h1>
                                </td>
                                <td className='p-3 text-sm text-slate-800'><h1>{item.todo}</h1></td>
                                <td className='p-3 text-sm text-slate-800'><h1>{item.description}</h1></td>
                                <td className='p-3 text-sm text-slate-800 font-bold'>
                                  <h1>
                                    {item.assigned}
                                  </h1>
                                </td>
                                <td className='p-3 text-sm text-slate-800'>
                                  <h1>
                                    {item.category}
                                  </h1>
                                </td>
                                
                                  {token.username !== "Admin" ? 
                                    <td className='p-3'>
                                      <div className='flex justify-center space-x-2'>
                                        <button className='text-center bg-red-600 text-sm text-white px-2 py-1 rounded-lg' onClick={() => handleTogglePending(item)}><MdAdd/></button>
                                        <button className='text-center bg-orange-600 text-sm text-white px-2 py-1 rounded-lg' onClick={() => handleToggleInProgress(item)}><MdAdd/></button>
                                        <button className='text-center bg-green-600 text-sm text-white px-2 py-1 rounded-lg' onClick={() => handleToggleStatus(item)}><MdAdd/></button>
                                      </div>  
                                    </td>
                                    : null
                                  }
                                
                                
                                  {token.username == "Admin" ?
                                    <td className='p-3'>
                                      <div className='flex space-x-2'>
                                        <UpdateTodo item={item._id} assigned={item.assigned} category={item.category} todo={item.todo} desc={item.description} status={item.status} />
                                        <DeleteTodo item={item._id}/>
                                      </div>
                                    </td>
                                    : null
                                  }
                                  
                                
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                </div>
            )}
            <div className='flex justify-center items-center space-x-5 mt-20 text-xl'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className='hover:scale-110 rounded-xl text-slate-50 bg-slate-600 py-1 px-4 transition-all' key={index} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
          </div>
        </div>
    )
}

export default TodoList