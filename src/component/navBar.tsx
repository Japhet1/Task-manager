import { MdOutlineEditNote} from 'react-icons/md'

const NavBar = () => {

  return (
    <main className="mx-10 px-10">
        <div className=' py-5 flex text-3xl font-bold space-x-2 text-slate-500 border-b border-slate-500'>
            <MdOutlineEditNote/>
            <h1 className="">TodoApp</h1>
        </div>
    </main>


  )
}

export default NavBar