import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../stores/store';
import { login } from '../features/authSlice';
import axios from 'axios';

export const useRegister = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [error, setError] = useState(null); // Adjust type here
    const [isLoading, setIsLoading] = useState<boolean>(false); // Adjust type and initial value
        
    const registerApi = async (username: string, email: string, password: string) => {
        setIsLoading(true);
        setError(null);
        const data = { username, email, password };
        try {
            const response = await axios.post('http://localhost:8000/api/users/signup', data);
            console.log(response.data);

            if (!response.data) {
                setIsLoading(false);
            } else {
                localStorage.setItem('user', JSON.stringify(response.data));
                dispatch(login(response.data));
                navigate('/dashboard');
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Error signing in account:', error); // Fix typo
            setError(error.response.data.error);
        }
    };

    return { registerApi, isLoading, error };
};
