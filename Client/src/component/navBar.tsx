import React from "react";
import { PiNotepad } from "react-icons/pi";
import User from "./user";


const NavBar = () => {



  return (
    <main className="">
        <div className='py-5 px-5 flex justify-between items-center  text-black'>
          <div className='flex text-xl font-bold space-x-2'>
              <PiNotepad className="text-2xl dark:text-white" />
              <a href='/'><h1 className="text-black dark:text-white">ACTRACKER</h1></a>
          </div>
          <User/>
        </div>
    </main>


  )
}

export default NavBar