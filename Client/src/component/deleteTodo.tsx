//import { useState } from 'react'
import { removeTodoAsync } from '../features/todoSlice';
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { AppDispatch } from '../stores/store';
import { useDispatch } from 'react-redux';
//import { RootState } from '../stores/store';

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
             <button className='items-center p-2 text-slate-700 rounded-lg bg-gray-200' onClick={() => handleRemoveTodo(item)}>
                <FaTrash/>
            </button>

        </main>
    )
}

export default DeleteTodo