import React from 'react'

const User = () => {
  return (
    <main>
        <div className='flex items-center gap-5'>
            <div className='text-slate-700'>
                <h1><strong>Welcome!</strong> elompassah81@gmail.com</h1>
            </div>
            <div>
                <button className='py-1 px-4 text-white rounded-lg bg-slate-700'>Logout</button>
            </div>
        </div>
    </main>
  )
}

export default User