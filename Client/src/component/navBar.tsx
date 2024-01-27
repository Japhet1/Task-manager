import React from "react";
import { PiNotepad } from "react-icons/pi";
import User from "./user";


const NavBar = () => {

  return (
    <main className="mx-10 px-10">
        <div className=' py-5 flex justify-between items-center  text-slate-700 border-b border-slate-500'>
          <div className='flex text-3xl font-bold space-x-2'>
              <PiNotepad className="text-4xl" />
              <a href='/'><h1 className="">ACTRACKER</h1></a>
          </div>
          <User/>
        </div>
    </main>


  )
}

export default NavBar