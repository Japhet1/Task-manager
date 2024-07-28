// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../stores/store';
import { setUser } from '../features/authSlice';
import axios from 'axios';

export const useUsers = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const navigate = useNavigate();
    // /const [error, setError] = useState(null); // Adjust type here
    // const [isLoading, setIsLoading] = useState<boolean>(false); // Adjust type and initial value
        
    const userApi = async () => {
        // setIsLoading(true);
        // setError(null);
        // const data = { username, email, password };
        try {
            const response = await axios.get('http://localhost:8000/api/users/');
            console.log(response.data);
            dispatch(setUser(response.data));

            // if (!response.data) {
            //     setIsLoading(false);
            // } else {
            //     localStorage.setItem('user', JSON.stringify(response.data));
            //     dispatch(setUser(response.data));
            //     navigate('/dashboard');
            // }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Error signing in account:', error); // Fix typo
            // setError(error);
        }
    };

    return { userApi };

}