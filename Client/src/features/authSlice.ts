import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from '../stores/store';


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
}

const initialState: AuthState = {
  // Set initial state values here
  user: null,
  isLoading: false,
  error: null,
};
  
const authSlice = createSlice({
  name: 'auths',
  initialState,
  reducers: {
    // Reducer for logging in
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
    registerUser(state) {
      state.isLoading = true;
    },
    registerUserSuccess(state, action: PayloadAction<AuthData[]>) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    registerUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginUser(state) {
      state.isLoading = true;
      // Update state on successful login (handled in actions)
    },
    loginUserSuccess(state, action: PayloadAction<AuthData[]>) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser(state) {
      state.user = null;
    },
  },
});

export const { 
  signup, 
  login, 
  logout, 
  registerUser, 
  registerUserSuccess, 
  registerUserFailure,
  loginUser, 
  loginUserSuccess, 
  loginUserFailure, 
  logoutUser } = authSlice.actions;

export const logoutApi = (): AppThunk => async (dispatch) => {
  localStorage.removeItem('user')
  // dispatch logout action
  dispatch(logout())
}
export default authSlice.reducer;




