import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from '../stores/store';
import axios from "axios";
interface AuthData {
  // Define the structure of authentication data here
  username: string,
  email: string,
  password: string
}

interface AuthState {
  // Define the state structure here
  user: AuthData[] | null
  isLoading: boolean;
  error: string | null;

  selectedUser: AuthData[]
}

const initialState: AuthState = {
  // Set initial state values here
  user: null,
  isLoading: false,
  error: null,

  selectedUser: [],
};
  
const authSlice = createSlice({
  name: 'auths',
  initialState,
  reducers: {
    // Reducer for logging in

    setUser: (state, action: PayloadAction<AuthData[]>) => {
      state.selectedUser = action.payload
    },
    signup: (state, action: PayloadAction<AuthData[]>) => {
      state.user = action.payload;
    },
    // Reducer for logging in
    login: (state, action: PayloadAction<AuthData[]>) => {
      state.user = action.payload;
    },
    // Reducer for logging out
    logout: (state) => {
      state.user = null;
    },

  },
});

export const { 
  setUser,
  signup, 
  login, 
  logout, 
} = authSlice.actions;

  export const fetchUsers = (): AppThunk => async (dispatch) => {
    try {
      // const token = JSON.parse(localStorage.getItem('user') || '')
      // const user = token
      const response = await axios.get('http://localhost:8000/api/users/');
      dispatch(setUser(response.data));
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  
  
export const logoutApi = (): AppThunk => async (dispatch) => {
  localStorage.removeItem('user')
  // dispatch logout action
  dispatch(logout())
}
export default authSlice.reducer;




