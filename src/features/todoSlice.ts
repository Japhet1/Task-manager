import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from '../stores/store';

interface Todo {
    id: number,
    todo: string,
    description: string,
    completed: string,
    category: string,
}


interface TodosState {
    todos: Todo[];
    selectedCategory: string | null
    
  }
  
  const initialState: TodosState = {
    todos: [],
    selectedCategory: null
  };
  

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      setTodos: (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload;
      },
      setCategory: (state, action: PayloadAction<string | null>) => {
        state.selectedCategory = action.payload
      },
      addTodo: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      },
      updateTodo: (state, action: PayloadAction<Todo>) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      },
      removeTodo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
    },
  });

  export const { setTodos, addTodo, updateTodo, removeTodo, setCategory } = todosSlice.actions;

  export const fetchTodos = (): AppThunk => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/todo');
      dispatch(setTodos(response.data));
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  export const createTodo = (todo: Todo): AppThunk => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/todo', todo);
      dispatch(addTodo(response.data));
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };
  
  export const updateTodoAsync = (todo: Todo): AppThunk => async (dispatch) => {
    try {
      await axios.put(`http://localhost:3000/todo/${todo.id}`, todo);
      dispatch(updateTodo(todo));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  
  export const removeTodoAsync = (id: number): AppThunk => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      dispatch(removeTodo(id));
    } catch (error) {
      console.error('Error removing todo:', error);
    }
  };
  
  export default todosSlice.reducer;

