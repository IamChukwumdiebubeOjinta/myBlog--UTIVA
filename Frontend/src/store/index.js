import {configureStore, createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {userLogin: false},
  reducers: {
    login(state){
      state.userLogin = true;
    },
    logout(state){
      state.userLogin = false;
    }
  }
});

export const store = configureStore({
  reducer: authSlice.reducer
});

export const authActions = authSlice.actions