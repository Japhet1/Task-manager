import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
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


export const fetchCategories = (): AppThunk => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem('user') || '')
    const user = token
    const response = await axios.get('http://localhost:8000/api/categories', {
      headers: {
        'Authorization': `Bearer ${user.token}`
        }
    });
    dispatch(setCategories(response.data));
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const createCategory = (category: Category): AppThunk => async (dispatch) => {
  try {

    const userToken = localStorage.getItem('user');
    if (!userToken) {
      throw new Error('User token not found in localStorage');
    }

    // Parse the token
    const user = JSON.parse(userToken);
    if (!user.token) {
      console.log('Token not found in user object');
      console.log(user.token);
    }

    const response = await axios.post('http://localhost:8000/api/categories', category, {
      headers: {
        'Authorization': `Bearer ${user.token}`
        }
    });
    dispatch(addCategory(response.data));
    console.log(response.data)
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

