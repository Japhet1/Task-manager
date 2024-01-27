import { configureStore, ThunkAction, Action  } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice"
import categoriesReducer from "../features/categorySlice"
//import paginationReducer from "../features/todoPaginationSlice"

const store = configureStore ({
    reducer: {
        todos: todosReducer,
        categories: categoriesReducer
        //pagination: paginationReducer
    }

})

export const selectFilteredData = (state: RootState) => state.todos.selectedCategory
export const filterStatus = (state: RootState) => state.todos.selectedStatus
//export const selectPagination = (state: RootState) => state.pagination
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;


export default store