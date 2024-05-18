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
}

const UpdateTodo: React.FC<ID> = ({item, assigned, category, todo, desc}) => {
    
    const [ openModal, setOpenModal ] = useState(false)

    const handleOnClose = () => setOpenModal(false)

    return (
        <main>
            <button className='p-2 text-[#FFC470] rounded-lg bg-slate-700' onClick={() => setOpenModal(true)}>
                <FaEdit />
            </button>  
            <UpdateForm onClose={handleOnClose} visible={openModal} item={item} assigned={assigned} category={category} todo={todo} desc={desc}/> 
        </main>
    )
}

export default UpdateTodo