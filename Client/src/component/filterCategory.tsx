import { AppDispatch, allCategories } from '../stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa'
import { removeCategoryAsync } from '../features/categorySlice';
import { useEffect, useState } from 'react';
import { setCategory } from '../features/todoSlice';
//import CategoryHead from './categoryHead'
//import TodoList from '../features/todoList'

//export let CategoryHead = ''

const FilterCategory: React.FC  = () => {
    const [ filter, setFilter ] = useState('')
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector(allCategories)
    //const todos = useSelector((state: RootState) => state.todos.todos);

    const handleRemoveCategory = (_id: string) => {
        dispatch(removeCategoryAsync(_id));
    };

    //console.log(categories)



    useEffect(() => {
        dispatch(setCategory(filter))
    })

  return (
    <main className='space-y-3'>
        <div className='text-xl font-semibold'><h1>Categories</h1></div>
            <div><button className='ms-3'>All</button></div>
            {categories.map((category) => (
                <div key={category._id} className="flex justify-between items-center group px-2 rounded">
                    <a href="/">
                        <button onClick={(e) => { e.preventDefault(); setFilter(category.category)} }>{category.category}</button>
                    </a>
                    <div className="hidden group-hover:block">
                        {/* Delete icon appears on hover */}
                        <FaTrash
                        className="text-slate-700 text-sm cursor-pointer"
                        onClick={(event) => {
                            event.stopPropagation(); // Prevent the click event from propagating to parent elements
                            handleRemoveCategory(category._id);
                        }}
                        />
                    </div>
                   
                </div>
            ))}
    </main>
  )
}

export default FilterCategory