import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from '../stores/store';
import getUser from '../component/getUser';

interface Todo {
  _id: string,
  date: Date,
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
      const index = state.todos.findIndex((todo) => todo._id === action.payload._id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, updateTodo, removeTodo, setCategory, setStatus } = todosSlice.actions;

export const fetchTodos = (): AppThunk => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem('user') || '')
    const user = token
    //const response = await axios.get('http://localhost:5000/todo');
    const response = await axios.get('http://localhost:8000/api/todos', {
      headers: {
      'Authorization': `Bearer ${user.token}`
      }

    });
    const reversedData = response.data; //.reverse();
    dispatch(setTodos(reversedData));
    // console.log(response.data)
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const createTodo = (todo: Todo): AppThunk => async (dispatch) => {
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
    console.log(user.token);
    //const response = await axios.post('http://localhost:5000/todo', todo);
    const response = await axios.post('http://localhost:8000/api/todos/', todo, {
      headers: {
      'Authorization': `Bearer ${user.token}`
      }

    });
    dispatch(addTodo(response.data));
    console.log(response.data)
  } catch (error) {
    console.error('Error creating todo:', error);
  }
};
  
export const updateTodoAsync = (todo: Todo): AppThunk => async (dispatch) => {
  try {
    const user = getUser();
    //await axios.put(`http://localhost:5000/todo/${todo.id}`, todo);
    await axios.put(`http://localhost:8000/api/todos/${todo._id}`, todo, {
      headers: {
      'Authorization': `Bearer ${user.token}`
      }

    });
    dispatch(updateTodo(todo));
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};
  
export const removeTodoAsync = (_id: string): AppThunk => async (dispatch) => {
  try {
    //await axios.delete(`http://localhost:5000/todo/${id}`);
    await axios.delete(`http://localhost:8000/api/todos/${_id}`);
    dispatch(removeTodo(_id));
  } catch (error) {
    console.error('Error removing todo:', error);
  }
};
  

export default todosSlice.reducer;

