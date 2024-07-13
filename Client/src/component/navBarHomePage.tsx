import React from "react";
import { PiNotepad } from "react-icons/pi";
import Notification from "./notification";



const NavBarHomePage = () => {

  return (
    <main className="px-10">
        <div className=' py-5 flex justify-between items-center  text-black dark:text-white'>
          <div className='flex text-xl font-bold space-x-2'>
              <PiNotepad className="text-2xl " />
              <a href='/'><h1 className="">ACTRACKER</h1></a>
          </div>
          <Notification/>
        </div>
    </main>


  )
}

export default NavBarHomePage