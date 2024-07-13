import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from './todoSlice';
import {  AppDispatch, RootState } from '../stores/store'
import { BsX } from 'react-icons/bs'
import axios from 'axios';
import { setUser } from './authSlice';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
// import { Button } from "../components/ui/button"
import { useToast } from "../components/ui/use-toast"


  

interface Change {
    visible: boolean,
    onClose: () => void
}

const TodoForm: React.FC<Change> = ({visible, onClose}) => {

    const { toast } = useToast()

    interface FormData {
        _id: string,
        date: Date,
        todo: string,
        description: string,
        status: string,
        category: string,
        assigned: string
    }

    interface UserData {
        _id: string,
        username: string,
        email: string,
        password: string
    }


    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.categories)
    // const users = useSelector((state: RootState) => state.auth.selectedUser)
    const [user, setUsers] = useState<UserData[]>([{
        _id: "",
        username: "",
        email: "",
        password: ""
    }])

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/users/');
            setUsers(response.data);
            dispatch(setUser(response.data));
          } catch (error) {
            // setError(error);
            console.error(error);
          }
        };
        fetchUsers();
    }, [dispatch]);

    const [ formData, setFormData ] = useState<FormData>({
        _id: '',
        date: new Date(),
        todo: '',
        description: '',
        status: '',
        category: '',
        assigned: ''
    })

    if (!visible) return null

    const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const containerId = (e.target as HTMLDivElement).id 
        if (containerId === 'container') onClose()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        setFormData({_id: '', date: new Date(), todo: '', description: '', status: 'Pending', category: '', assigned: '' })
        dispatch(createTodo(formData))
        console.log(formData)
    };

    const data = user

    return (
        <div id='container' onClick={handleOnClose} className='flex justify-center items-center fixed z-20 inset-0 bg-black bg-opacity-50 backdrop-blur-sm px-10 py-5'>
            <div className="flex justify-center text-lg">
                <form className="px-8 py-5 bg-white dark:bg-slate-900 rounded-md shadow-md" onSubmit={handleAddTodo} style={{width: '35vw'}}>
                    
                    <div className='mb-5 flex justify-between items-center'><h1 className='text-xl text-black dark:text-white font-bold'>Create</h1><div className='flex justify-end items-end hover:scale-110 transition-all'><button className='rounded-full p-2 flex' onClick={onClose}><BsX className='text-3xl'/></button></div></div>
                    <div className='space-y-3'>
                        <div className='flex justify-between space-x-4'>
                            <div className='space-y-2 w-[100%]'>
                                <label htmlFor="todo" className='text-black dark:text-white text-sm font-bold'>Assigned To *</label><br/>
                                {/* <input className="w-[100%] p-1 text-base rounded-md" name="assigned" type="text" value={formData.assigned} onChange={handleInputChange} required /> */}
                                {/* <select className='w-[100%] p-2 text-sm text-black bg-gray-200 rounded-md' name="assigned" value={formData.assigned} onChange={handleInputChange} required>
                                
                                    {data.map((data) => (
                                        data.username !== "Admin" ?
                                        <option className='text-black bg-gray-200 p-5' key={data._id} value={data.username}>
                                            {data.username}
                                        </option>
                                        : null
                                    ))}
                                    
                                </select> */}

                            <Select name="assigned">
                                <SelectTrigger className="w-[100%] p-2 text-sm text-black dark:text-white bg-gray-200 dark:bg-transparent rounded-md focus:border-none focus:outline-none focus:ring-0">
                                    <SelectValue placeholder="Select team member" value={formData.assigned} onChange={handleInputChange}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {/* <SelectLabel>Member</SelectLabel> */}
                                        {data.filter((data) => data.username!== "Admin").map((data) => (
                                            <SelectItem className="text-black dark:text-white" key={data._id} value={data.username}>
                                                {data.username}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            
                            </div>
                            <div className='space-y-2 w-[100%]'>
                                <label htmlFor="category" className='text-black dark:text-white text-sm font-bold'>Category *</label><br/>
                                
                                {/* <select className='w-[100%] p-2 text-sm text-black bg-gray-200 rounded-md' name="category" id="category" value={formData.category} onChange={handleInputChange}>
                                
                                    {categories.map((option) => (
                                        <option className='text-black bg-gray-200 p-5' key={option._id} value={option.category}>{option.category}</option>
                                    ))}
                                    
                                </select> */}

                                <Select name="category" >
                                    <SelectTrigger className="w-[100%] p-2 text-sm text-black dark:text-white bg-gray-200 dark:bg-transparent rounded-md focus:border-none focus:outline-none focus:ring-0">
                                        <SelectValue placeholder="Select category" value={formData.category} onChange={handleInputChange}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {/* <SelectLabel>Member</SelectLabel> */}
                                            {categories.map((option) => (
                                                <SelectItem className="text-black dark:text-white" key={option._id} value={option.category}>
                                                    {option.category}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="todo" className='text-black dark:text-white text-sm font-bold'>Task *</label><br/>
                            <Input className="w-[100%] p-2 text-sm text-black bg-gray-200 dark:text-white dark:bg-transparent rounded-md focus:border-none focus:outline-none focus:ring-0" name="todo" type="text" value={formData.todo} onChange={handleInputChange} required />
                        </div>

                        
                    
                        <div className='space-y-2'>
                            <label htmlFor="description" className='text-black dark:text-white text-sm font-bold'>Description *</label><br/>
                            <Textarea className='w-[100%] p-2 text-sm text-black bg-gray-200 dark:text-white dark:bg-transparent rounded-md focus:border-none focus:outline-none focus:ring-0' name="description" id="description" cols={30} rows={3} value={formData.description} onChange={handleInputChange} required></Textarea>
                        </div>
                    
                    </div>
                    <div className='mt-8'>
                        <button className="py-1 px-4 rounded-md text-sm text-white dark:text-black bg-black dark:bg-white hover:scale-110 transition-all font-bold" type="submit"
                            onClick={() => {
                                toast({
                                    title: "Successfull!!",
                                    description: "New task created",
                                })
                            }}
                        >Save</button>
                    </div>                   
                    
                </form>
            </div>

        </div>
    )
}

export default TodoForm