import React from 'react'
import { BsTwitterX, BsInstagram, BsDiscord, BsTelegram } from 'react-icons/bs'
const Footer = () => {

  return (
    <main className="">
        <div className="flex justify-between items-center text-slate-700 me-10 px-10 p-5">
            {/* <div className='flex items-center space-x-5 text-xl text-gray-500'>
                <BsTwitterX/>
                <BsInstagram/>
                <BsDiscord/>
                <BsTelegram/>
            </div>
            <div><h1>@Gunstein.dev 2023</h1></div> */}

            <div className="items-center">
              <p>Copyright © Gunstein.dev 2024 - All right reserved</p>
            </div> 
            <nav className="flex gap-4 md:place-self-center md:justify-self-end text-lg text-slate-700">
              <a><BsTwitterX/></a>
              <a><BsInstagram/></a>
              <a><BsDiscord/></a>
              <a><BsTelegram/></a>
            </nav>
        </div>
    </main>
  )
}

export default Footer