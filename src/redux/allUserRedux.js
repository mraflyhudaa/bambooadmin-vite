import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
  isFetching: false,
  isSuccess: false,
  error: false,
  message: '',
};

export const allUserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    //GET ALL
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isSuccess = false;
      state.message = '';
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.allUsers = action.payload;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isSuccess = false;
      state.message = '';
    },
    deleteUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.allUsers.splice(
        state.allUsers.findIndex((item) => item._id === action.payload),
        1
      );
      state.message = action.payload.message;
    },
    deleteUsersFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
    //UPDATE
    updateUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isSuccess = false;
      state.message = '';
    },
    updateUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.allUsers[
        state.allUsers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
      state.isSuccess = true;
      state.message = action.payload.message;
    },
    updateUsersFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
    //CREATE
    addUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isSuccess = false;
      state.message = '';
    },
    addUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.allUsers.push(action.payload);
      state.isSuccess = true;
      state.message = action.payload.message;
    },
    addUsersFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
    clear: (state) => {
      state.allUsers = [];
    },
    reset: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.error = false;
      state.message = '';
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUsersStart,
  deleteUsersSuccess,
  deleteUsersFailure,
  updateUsersStart,
  updateUsersSuccess,
  updateUsersFailure,
  addUsersStart,
  addUsersSuccess,
  addUsersFailure,
  clear,
  reset,
} = allUserSlice.actions;

export default allUserSlice.reducer;
