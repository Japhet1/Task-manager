import { useState } from 'react'
//import { MdNoteAdd } from 'react-icons/md'
//import TodoForm from '../features/todoForm'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import UpdateForm from './updateForm'
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';

interface ID {
    item: number
}

const UpdateTodo: React.FC<ID> = ({item}) => {
    
    const [ openModal, setOpenModal ] = useState(false)
    const todos = useSelector((state: RootState) => state.todos.todos);

    const handleOnClose = () => setOpenModal(false)

    return (
        <main>
            <button className='p-2 text-slate-700 rounded-lg bg-gray-200' onClick={() => setOpenModal(true)}>
                <FaEdit />
            </button>  
            <UpdateForm onClose={handleOnClose} visible={openModal} todos={todos} id={item}/> 

        </main>
    )
}

export default UpdateTodo