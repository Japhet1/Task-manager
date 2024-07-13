import React from 'react'
import Notification from './notification'
import Logout from './logout'

const User = () => {
  const token = JSON.parse(localStorage.getItem('user') || '')

  return (
    <main>
        <div className='flex items-center gap-5'>
            <div className='text-black dark:text-white flex justify-center items-center space-x-4'>
                <div className='flex space-x-3 items-baseline'><h1 className='text-sm'>Welcome!</h1><span className='font-semibold text-black dark:text-white'>{token.username}</span></div>
                <Notification />
            </div>
            <div>
              <Logout/>
            </div>
        </div>
    </main>
  )
}

export default User