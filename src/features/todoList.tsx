import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, updateTodoAsync, removeTodoAsync } from './todoSlice';
import { RootState, AppDispatch, selectFilteredData } from '../stores/store';
import { BsPencilFill, BsTrash2Fill } from 'react-icons/bs'
//import { formatDistanceToNow } from "date-fns";


const TodoList: React.FC = () => {
    
    interface Todo {
        id: number,
        todo: string,
        description: string,
        completed: string,
        category: string,
    }

    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const filteredData = useSelector(selectFilteredData)

    const filterTodos = todos ? todos.filter((todo) => 
        filteredData === null ? todo :
        todo.category.toLowerCase().includes(filteredData.toLocaleLowerCase())
        
        )
        : todos
  
    useEffect(() => {
      dispatch(fetchTodos());
    }, [dispatch]);
  
    const handleToggleTodo = (todo: Todo) => {
      dispatch(updateTodoAsync({ ...todo, completed: 'Completed' }));
    };
  
    const handleRemoveTodo = (id: number) => {
      dispatch(removeTodoAsync(id));
    };




    return (
        <div className='mx-10 px-10 py-5'>
            <div className="grid grid-cols-12 gap-10">
                {filterTodos.map((item) => (
                    <div key={item.id} className="relative col-span-4 rounded-md bg-white shadow-md">
                        <div className='p-5'>
                            <div className="flex justify-between text-slate-500 mb-4"><h1>{item.id}</h1><div className='flex space-x-3'><button className=' text-slate-500 rounded-md bg-slate-200 items-center p-2'><BsPencilFill/></button><button className='items-center p-2 text-slate-500 rounded-md bg-slate-200' onClick={() => handleRemoveTodo(item.id)}><BsTrash2Fill/></button></div></div>
                            <div className='space-y-3 mb-10'>
                                <div className="flex space-x-3"><h1 className="text-base font-semibold">Todo:</h1><span className="text-base">{item.todo}</span></div>
                                <div className="flex space-x-3"><h1 className="text-base font-semibold">Description:</h1><span className="text-base">{item.description}</span></div>
                                <div className="flex items-center justify-between">
                                    <div className='flex items-center space-x-3'><h1 className="text-base font-semibold">Status:</h1><h1 className={item.completed === "Not completed"? 'text-red-500 font-semibold' : 'text-green-500 font-semibold'}>{item.completed}</h1></div>
                                    {item.completed === "Not completed"?
                                    <div><button className='text-center bg-slate-500 text-base text-white px-3 py-1 rounded-md' onClick={() => handleToggleTodo(item)}>Complete</button></div>
                                    : null
                                    }
                                </div>
                            </div> 
                        </div>
                        <div className='absolute left-0 bottom-0 w-32 text-center font-semibold text-sm rounded-tr-md rounded-bl-md py-1 px-3 bg-orange-200 text-slate-500 mb-0'><h1>{item.category}</h1></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList