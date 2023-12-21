import { useState } from 'react'
import { MdNoteAdd} from 'react-icons/md'
import TodoForm from '../features/todoForm'


const CreateTodo: React.FC = () => {
    
    const [ openModal, setOpenModal ] = useState(false)

    const handleOnClose = () => setOpenModal(false)

    return (
        <main>
            <div className='flex space-x-2 text-lg'>
                <div className='text-2xl text-slate-500'><MdNoteAdd/></div>
                <button className=''
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