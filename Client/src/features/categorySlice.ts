import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import axios from "axios";
import { AppThunk } from '../stores/store';

interface Category {
  _id: string,
  category: string,
}

interface TodosState {
  categories: Category[];  
}
  
const initialState: TodosState = {
  categories: [],
};
  
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const index = state.categories.findIndex((category) => category._id === action.payload._id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter((category) => category._id !== action.payload);
    },
  },
});

export const { setCategories, addCategory, updateCategory, removeCategory } = categoriesSlice.actions;

// export const fetchCategories = (): AppThunk => async (dispatch) => {
//   try {
//     // const response = await axios.get('http://localhost:5000/category');
//     const response = await axios.get('http://localhost:8000/api/categories');
//     dispatch(setCategories(response.data));
//     console.log(response.data)
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//   }
// };

// export const createCategory = (category: Category): AppThunk => async (dispatch) => {
//   try {
//     // const response = await axios.post('http://localhost:5000/category', category);
//     const response = await axios.post('http://localhost:8000/api/categories', category);
//     dispatch(addCategory(response.data));
//   } catch (error) {
//     console.error('Error creating category:', error);
//   }
// };
  
// export const updateCategoryAsync = (category: Category): AppThunk => async (dispatch) => {
//   try {
//     // await axios.put(`http://localhost:5000/category/${category.id}`, category);
//     await axios.put(`http://localhost:8000/api/categories/${category._id}`, category);
//     dispatch(updateCategory(category));
//   } catch (error) {
//     console.error('Error updating category:', error);
//   }
// };
  
// export const removeCategoryAsync = (_id: string): AppThunk => async (dispatch) => {
//   try {
//     // await axios.delete(`http://localhost:5000/category/${id}`);
//     await axios.delete(`http://localhost:8000/api/categories/${_id}`);
//     dispatch(removeCategory(_id));
//   } catch (error) {
//     console.error('Error removing category:', error);
//   }
// };

export const fetchCategories = (): AppThunk => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8000/api/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    //const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    dispatch(setCategories(data));
    console.log(data);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const createCategory = (category: Category): AppThunk => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8000/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      throw new Error('Failed to create category');
    }
    const data = await response.json();
    dispatch(addCategory(data));
  } catch (error) {
    console.error('Error creating category:', error);
  }
};

export const updateCategoryAsync = (category: Category): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8000/api/categories/${category._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      throw new Error('Failed to update category');
    }
    dispatch(updateCategory(category));
  } catch (error) {
    console.error('Error updating category:', error);
  }
};

export const removeCategoryAsync = (_id: string): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8000/api/categories/${_id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to remove category');
    }
    dispatch(removeCategory(_id));
  } catch (error) {
    console.error('Error removing category:', error);
  }
};
  
export default categoriesSlice.reducer;

