/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  AppDispatch } from '../stores/store'
import { logout } from '../features/authSlice'
import { Navigate } from 'react-router-dom';

const Logout = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogout = () => {

        const dispatch = useDispatch<AppDispatch>();
        // Simulate logout logic
        dispatch(logout());
        localStorage.removeItem('user');
        setIsLoggedIn(false);

        {isLoggedIn && <Navigate to="/dashboard" />}
    };
    return (
        <main>
            <div>
                <button className='py-1 px-4 text-slate-50 rounded-lg bg-slate-600' onClick={handleLogout}>
                    <a href="/login">Logout</a>
                </button>
            </div>
        </main>
  )
}

export default Logout