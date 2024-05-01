import { removeTodoAsync } from '../features/todoSlice';
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { AppDispatch } from '../stores/store';
import { useDispatch } from 'react-redux';


interface ID {
    item: string
}

const DeleteTodo: React.FC<ID> = ({item}) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleRemoveTodo = (_id: string) => {
        dispatch(removeTodoAsync(_id));
    }

    return (
        <main>
             <button className='items-center p-2 text-[#FFC470] rounded-lg bg-slate-700' onClick={() => handleRemoveTodo(item)}>
                <FaTrash/>
            </button>

        </main>
    )
}

export default DeleteTodo