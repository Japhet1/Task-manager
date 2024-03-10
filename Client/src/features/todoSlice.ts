import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from '../stores/store';

interface Todo {
  id: number,
  todo: string,
  description: string,
  status: string,
  category: string,
  assigned: string
}

interface TodosState {
  todos: Todo[];
  selectedCategory: string | null
  selectedStatus: string
    
}
  
const initialState: TodosState = {
  todos: [],
  selectedCategory: null,
  selectedStatus: ""
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
    setStatus: (state, action: PayloadAction<string>) => {
      state.selectedStatus = action.payload
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

export const { setTodos, addTodo, updateTodo, removeTodo, setCategory, setStatus } = todosSlice.actions;

export const fetchTodos = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/todo');
    //const response = await axios.get('http://localhost:8000/api/todos');
    const reversedData = response.data.reverse();
    dispatch(setTodos(reversedData));
    //console.log(response.data)
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const createTodo = (todo: Todo): AppThunk => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/todo', todo);
    //const response = await axios.post('http://localhost:8000/api/todos', todo);
    dispatch(addTodo(response.data));
  } catch (error) {
    console.error('Error creating todo:', error);
  }
};
  
export const updateTodoAsync = (todo: Todo): AppThunk => async (dispatch) => {
  try {
    await axios.put(`http://localhost:5000/todo/${todo.id}`, todo);
    //await axios.put(`http://localhost:8000/api/todos/${todo.id}`, todo);
    dispatch(updateTodo(todo));
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};
  
export const removeTodoAsync = (id: number): AppThunk => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/todo/${id}`);
    //await axios.delete(`http://localhost:8000/api/todos/${id}`);
    dispatch(removeTodo(id));
  } catch (error) {
    console.error('Error removing todo:', error);
  }
};
  
export default todosSlice.reducer;

