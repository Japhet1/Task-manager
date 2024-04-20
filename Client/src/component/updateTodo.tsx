import { useState } from 'react'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import UpdateForm from './updateForm'

interface ID {
    item: string
}

const UpdateTodo: React.FC<ID> = ({item}) => {
    
    const [ openModal, setOpenModal ] = useState(false)

    const handleOnClose = () => setOpenModal(false)

    return (
        <main>
            <button className='p-2 text-slate-700 rounded-lg bg-gray-200' onClick={() => setOpenModal(true)}>
                <FaEdit />
            </button>  
            <UpdateForm onClose={handleOnClose} visible={openModal} _id={item}/> 
        </main>
    )
}

export default UpdateTodo