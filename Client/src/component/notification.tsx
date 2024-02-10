import React from 'react';
import { BsBell, BsSun, BsMoon } from 'react-icons/bs'

const Notification: React.FC = () => {
  return (
    <main className='flex justify-center items-center space-x-3 text-xl text-slate-700'>
      
      <div><button><BsSun/></button></div>
      <div><button><BsMoon/></button></div>
      <div><button><BsBell/></button></div>
        
    </main>
  );
};

export default Notification;