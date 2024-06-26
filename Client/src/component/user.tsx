import React from 'react'
import Notification from './notification'
import Logout from './logout'

const User = () => {
  const token = JSON.parse(localStorage.getItem('user') || '')

  return (
    <main>
        <div className='flex items-center gap-5'>
            <div className='text-slate-500 flex justify-center items-center space-x-4'>
                <div className='flex space-x-3'><h1 className=''>Welcome!</h1><span className='font-semibold text-slate-950'>{token.username}</span></div>
                <Notification/>
            </div>
            <div>
              <Logout/>
            </div>
        </div>
    </main>
  )
}

export default User