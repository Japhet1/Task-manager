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
                    <div className='flex space-x-2 text-base bg-black dark:bg-slate-800 px-4 py-2 rounded-md '>
                        <div className='text-lg text-white'><MdAddTask/></div>
                        <button className='text-white'
                            onClick={() => setOpenModal(true)}
                        >
                            <h1 className='text-sm'>New Task</h1>
                        </button>
                    </div>
                    <TodoForm onClose={handleOnClose} visible={openModal}/>
                </div> : null
            }
        </main>
    )
}

export default CreateTodo