import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from '../stores/store';

interface Category {
  id: number
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
      const index = state.categories.findIndex((category) => category.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    removeCategory: (state, action: PayloadAction<number>) => {
      state.categories = state.categories.filter((category) => category.id !== action.payload);
    },
  },
});

export const { setCategories, addCategory, updateCategory, removeCategory } = categoriesSlice.actions;

export const fetchCategories = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/category');
    dispatch(setCategories(response.data));
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const createCategory = (category: Category): AppThunk => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/category', category);
    dispatch(addCategory(response.data));
  } catch (error) {
    console.error('Error creating category:', error);
  }
};
  
export const updateCategoryAsync = (category: Category): AppThunk => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5000/category/${category.id}`, category);
    dispatch(updateCategory(category));
  } catch (error) {
    console.error('Error updating category:', error);
  }
};
  
export const removeCategoryAsync = (id: number): AppThunk => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/category/${id}`);
    dispatch(removeCategory(id));
  } catch (error) {
    console.error('Error removing category:', error);
  }
};
  
export default categoriesSlice.reducer;

