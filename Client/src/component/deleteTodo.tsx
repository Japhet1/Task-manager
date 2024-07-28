import { removeTodoAsync } from '../features/todoSlice';
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { AppDispatch } from '../stores/store';
import { useDispatch } from 'react-redux';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../components/ui/alert-dialog"


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
            

            <AlertDialog>
                <AlertDialogTrigger>
                    <button className='items-center p-2 text-black dark:text-white rounded-md bg-slate-200 dark:bg-slate-950'>
                        <FaTrash className='text-sm'/>
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the task.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleRemoveTodo(item)}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>


        </main>
    )
}

export default DeleteTodo