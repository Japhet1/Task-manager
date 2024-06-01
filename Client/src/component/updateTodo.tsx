import { useState } from 'react'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import UpdateForm from './updateForm'



interface ID {
    item: string
    assigned: string
    category: string
    todo: string
    desc: string
    status: string
}

const UpdateTodo: React.FC<ID> = ({item, assigned, category, todo, desc, status}) => {
    
    const [ openModal, setOpenModal ] = useState(false)

    const handleOnClose = () => setOpenModal(false)

    return (
        <main>
            <button className='p-2 text-slate-900 rounded-lg bg-slate-200' onClick={() => setOpenModal(true)}>
                <FaEdit />
            </button>  
            <UpdateForm onClose={handleOnClose} visible={openModal} item={item} assigned={assigned} category={category} todo={todo} desc={desc} status={status}/> 
        </main>
    )
}

export default UpdateTodo