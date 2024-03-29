import { RootState, AppDispatch } from '../stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa'
import { removeCategoryAsync } from '../features/categorySlice';
import { useEffect, useState } from 'react';
import { setCategory } from '../features/todoSlice';

const FilterCategory: React.FC  = () => {
    const [ filter, setFilter ] = useState("")
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.categories)
    //const todos = useSelector((state: RootState) => state.todos.todos);

    const handleRemoveCategory = (id: number) => {
        dispatch(removeCategoryAsync(id));
    };

    // const showAll = () => {
    //     dispatch(setTodos(todos))
    // }


    useEffect(() => {
        dispatch(setCategory(filter))
        // showAll()
    })

  return (
    <main className='space-y-3'>
        <div className='text-xl font-semibold'><h1>Categories</h1></div>
            <div><button className='ms-3'>All</button></div>
            {categories.map((category, index) => (
                <div key={index} className="flex justify-between items-center group px-2 rounded">
                    <a href="/">
                        <button onClick={(e) => { e.preventDefault(); setFilter(category.category)} }>{category.category}</button>
                    </a>
                    <div className="hidden group-hover:block">
                        {/* Delete icon appears on hover */}
                        <FaTrash
                        className="text-slate-700 text-sm cursor-pointer"
                        onClick={(event) => {
                            event.stopPropagation(); // Prevent the click event from propagating to parent elements
                            handleRemoveCategory(category.id);
                        }}
                        />
                    </div>
                </div>
                
              ))}
    </main>
  )
}

export default FilterCategory