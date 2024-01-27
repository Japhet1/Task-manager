import { useState } from 'react'
import { MdNoteAdd } from 'react-icons/md'
import TodoForm from '../features/todoForm'
import React from 'react'


const CreateTodo: React.FC = () => {
    
    const [ openModal, setOpenModal ] = useState(false)

    const handleOnClose = () => setOpenModal(false)

    return (
        <main>
            <div className='flex space-x-1 text-xl'>
                <div className='text-2xl text-slate-700'><MdNoteAdd/></div>
                <button className='text-slate-700'
                    onClick={() => setOpenModal(true)}
                >
                    <h1>New Task</h1>
                </button>
            </div>
           
            <TodoForm onClose={handleOnClose} visible={openModal}/>
        </main>
    )
}

export default CreateTodo