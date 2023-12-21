import { MdSearch} from 'react-icons/md'

const FilterTodo: React.FC = () => {
    

    return (
        <main>
            <div className='flex space-x-2 items-center'>
                
                <input className="py-1 px-4 text-base border-b border-slate-500" type="text" placeholder="Filter by task category..." />
                <div className='text-2xl'><MdSearch/></div>
            </div>
            
        </main>
    )
}

export default FilterTodo