import { configureStore, ThunkAction, Action  } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice"
//import paginationReducer from "../features/todoPaginationSlice"

const store = configureStore ({
    reducer: {
        todos: todosReducer,
        //pagination: paginationReducer
    }

})

export const selectFilteredData = (state: RootState) => state.todos.selectedCategory
//export const selectPagination = (state: RootState) => state.pagination
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;


export default store