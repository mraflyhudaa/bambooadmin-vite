import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    isSuccess: false,
    error: false,
    message: '',
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.error = true;
      state.message = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    reset: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.error = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      storage.removeItem(state);
    });
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, reset } =
  userSlice.actions;
export default userSlice.reducer;
