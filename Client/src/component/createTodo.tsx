import { useState } from 'react'
// import { MdNoteAdd } from 'react-icons/md'
import { MdAddTask } from "react-icons/md";
import TodoForm from '../features/todoForm'
import React from 'react'


const CreateTodo: React.FC = () => {
    
    const [ openModal, setOpenModal ] = useState(false)

    const handleOnClose = () => setOpenModal(false)

    const token = JSON.parse(localStorage.getItem('user') || '')

    return (
        <main>
            {token.username == "Admin" ? 
                <div>
                    <div className='flex space-x-1 text-base bg-slate-900 px-4 py-2 rounded-xl '>
                        <div className='text-xl text-slate-100'><MdAddTask/></div>
                        <button className='text-slate-100 '
                            onClick={() => setOpenModal(true)}
                        >
                            <h1>New Task</h1>
                        </button>
                    </div>
                    <TodoForm onClose={handleOnClose} visible={openModal}/>
                </div> : null
            }
        </main>
    )
}

export default CreateTodo