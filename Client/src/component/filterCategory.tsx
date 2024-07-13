import React from 'react';
import { AppDispatch, allCategories } from '../stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { BsX } from 'react-icons/bs'
import { removeCategoryAsync } from '../features/categorySlice';
import { useEffect, useState } from 'react';
import { setCategory } from '../features/todoSlice';
import { useToast } from "../components/ui/use-toast"

interface Category {
  _id: string;
  category: string;
}


const FilterCategory: React.FC  = () => {

    const { toast } = useToast()
    const [ filter, setFilter ] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector(allCategories)
    

    const handleRemoveCategory = (_id: string) => {
        const dispatchData: any = dispatch(removeCategoryAsync(_id))
        if (dispatchData) {
          toast({
            title: "Successfull!!",
            description: "Category deleted",
            })
        } else {
          toast({
            title: "OOPS!!",
            description: "Category not deleted",
            })
        }
    };

    useEffect(() => {
        dispatch(setCategory(filter))
    }, [filter, dispatch])

  return (
    // <main className='space-y-3'>
    //     <div className='text-xl font-semibold'><h1>Categories</h1></div>
    //         <div><button className='ms-3'>All</button></div>
    //         {categories.map((category) => (
    //             <div key={category._id} className="flex justify-between items-center group px-2 py-1 rounded hover:bg-[#EEE4B1]">
    //                 <a href="/">
    //                     <button onClick={(e) => { e.preventDefault(); setFilter(category.category)} }>{category.category}</button>
    //                 </a>
    //                 <div className="hidden group-hover:block">
                        
    //                     <FaTrash
    //                     className="text-slate-700 text-sm cursor-pointer"
    //                     onClick={(event) => {
    //                         event.stopPropagation();
    //                         handleRemoveCategory(category._id);
    //                     }}
    //                     />
    //                 </div>
                   
    //             </div>
    //         ))}
    // </main>

    <main className='flex items-center space-x-5'>
      {/* <div className='text-xl font-semibold'><h1>Categories</h1></div> */}
      <div><button onClick={() => setFilter('')} className='bg-black text-white dark:bg-slate-800 text-sm px-3 py-1 rounded-md'>All</button></div>
      {categories.map((category: Category) => (
        <div key={category._id} className="flex justify-between items-center dark:text-white rounded-md space-x-2 text-black group px-2 py-1 hover:bg-black hover:dark:bg-slate-800 hover:dark:text-white hover:border-none hover:text-white">
          <button
            onClick={(e) => {
              e.preventDefault();
              setFilter(category.category);
            }}
            className="flex-grow text-left text-sm"
          >
            {category.category}
          </button>
          <div className="hidden group-hover:block">
            <BsX
              className="text-white text-base cursor-pointer"
              onClick={(event) => {
                event.stopPropagation();
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