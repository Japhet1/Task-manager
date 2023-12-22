import { configureStore, ThunkAction, Action  } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice"

const store = configureStore ({
    reducer: {
        todos: todosReducer
    }

})

export const selectFilteredData = (state: RootState) => state.todos.selectedCategory
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store