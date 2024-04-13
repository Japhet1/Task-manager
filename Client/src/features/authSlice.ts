import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from '../stores/store';


// interface User {
//   token: string,
// }

// export const getUser = (): User => {
//   // Get the token from local storage or any other storage mechanism you're using
//   const token = localStorage.getItem('user') || ''; // Ensure token is a string or an empty string
//   return { token };
// };


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

// Thunks
// export const fetchUserApi = (): AppThunk => async (dispatch) => {
//   try {
//     const user = getUser(); // Assuming you have a function to get the user token
//     const response = await axios.get('http://localhost:8000/api/users/', {
//       headers: {
//         'Authorization': `Bearer ${user.token}`
//       }
//     });
//     const json = response.data;

//     if (response.status === 200) {
//       dispatch({ type: "SET_WORKOUTS", payload: json });
//       // setWorkouts(json);
//     }
//   } catch (error) {
//     console.error(error);
//     // Handle error
//   }
// };

export const registerApi = (user: AuthData): AppThunk => async (dispatch) => {
    try {
        //Make async call to signup endpoint
        const response = await axios.post('http://localhost:8000/api/users/signup', user);
        console.log(response.data);
        // if (response) {
          // save the user to locale storage
          
          localStorage.setItem('user', JSON.stringify(response.data))

          // update Auth Context
          dispatch(signup(response.data));
        // }
    } catch (error) {
        //Handle error
        console.error('Error creating account:', error);
    }
};

export const loginApi = (user: AuthData): AppThunk => async (dispatch) => {
  try {
      //Make async call to signup endpoint
      const response = await axios.post('http://localhost:8000/api/users/login', user);
      console.log(response.data);
      // if (response) {
        // save the user to locale storage
        localStorage.setItem('user', JSON.stringify(response.data))

        // update Auth Context
        dispatch(login(response.data));
      // }
  } catch (error) {
      //Handle error
      console.error('Error creating account:', error);
  }
}

export const logoutApi = (): AppThunk => async (dispatch) => {
  localStorage.removeItem('user')
  // dispatch logout action
  dispatch(logout())
}
export default authSlice.reducer;



// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthData {
//   username: string,
//   email: string,
//   password: string
// }

// interface UserState {
//   currentUser: null | AuthData[];
//   isLoading: boolean;
//   error: string | null;
//   // user: AuthData[] | null
// }

// const initialState: UserState = {
//   currentUser: null,
//   isLoading: false,
//   error: null,
//   // user: null
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     registerUser(state) {
//       state.isLoading = true;
//       // Update state on successful registration (handled in actions)
//     },
//     registerUserSuccess(state, action: PayloadAction<AuthData[]>) {
//       state.isLoading = false;
//       state.currentUser = action.payload;
//       state.error = null;
//     },
//     registerUserFailure(state, action: PayloadAction<string>) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     loginUser(state) {
//       state.isLoading = true;
//       // Update state on successful login (handled in actions)
//     },
//     loginUserSuccess(state, action: PayloadAction<AuthData[]>) {
//       state.isLoading = false;
//       state.currentUser = action.payload;
//       state.error = null;
//     },
//     loginUserFailure(state, action: PayloadAction<string>) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     logoutUser(state) {
//       state.currentUser = null;
//     },
//   },
// });

// export const {
//   registerUser,
//   registerUserSuccess,
//   registerUserFailure,
//   loginUser,
//   loginUserSuccess,
//   loginUserFailure,
//   logoutUser,
// } = userSlice.actions;

// export const register = (user: AuthData): AppThunk => async (dispatch) => {
//   dispatch(registerUser());
//   try {
//     const response = await axios.post('http://localhost:8000/api/users/signup', user );
//     dispatch(registerUserSuccess(response.data));
//     // Navigate to home page
//   } catch (error) {
//     // dispatch(registerUserFailure(error.response.data.message));
//     console.error('Error creating account:', error);
//   }
// };

// export const login = (user: AuthData): AppThunk => async (dispatch) => {
//   dispatch(loginUser());
//   try {
//     const response = await axios.post('http://localhost:8000/api/users/login', user);
//     dispatch(loginUserSuccess(response.data));
//     // Navigate to home page
//   } catch (error) {
//     // dispatch(loginUserFailure(error.response.data.message));
//     console.error('Error creating account:', error);
//   }
// }

//   export default userSlice.reducer;



