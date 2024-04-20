import { configureStore, ThunkAction, Action  } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice"
import categoriesReducer from "../features/categorySlice"
import authsReducer from "../features/authSlice"

const store = configureStore ({
    reducer: {
        todos: todosReducer,
        categories: categoriesReducer,
        auth: authsReducer,
    }

})

export const selectFilteredData = (state: RootState) => state.todos.selectedCategory
export const filterStatus = (state: RootState) => state.todos.selectedStatus
export const allCategories = (state: RootState) => state.categories.categories
export const allAuth = (state: RootState) => state.auth.user
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;


export default store