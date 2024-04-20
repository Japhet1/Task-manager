import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  AppDispatch } from '../stores/store'
import { login } from '../features/authSlice'
import axios from "axios";

export const useLogin = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
        
    const loginApi = async (username: string, email: string, password: string) => {
            
        setIsLoading(true)
        setError(null)
        const data = { username, email, password }
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', data);
            console.log(response.data);

            if (!response.data) {
                setIsLoading(false)
                setError(response.data.error)
            } else {
                localStorage.setItem('user', JSON.stringify(response.data));
                dispatch(login(response.data));

                navigate('/dashboard');
            }
    
        } catch (error) {
            console.error('Error sign in account:', error);
        }
    }

    return { loginApi, isLoading, error }
}
