//import { useEffect, useState } from 'react'
import { MdSearch} from 'react-icons/md'
import { setCategory } from '../features/todoSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../stores/store'


const FilterTodo: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()



    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCategory(e.target.value))
        
    }
    
    return (
        <main>
            <div className='flex space-x-2 items-center'>
                <input className="py-1 px-4 text-base border-b border-slate-500" type="text" placeholder="Filter by task category..." 
                onChange={handleFilterChange}
                />
                <div className='text-2xl'><MdSearch/></div>
            </div>

            
        </main>
    )
}

export default FilterTodo