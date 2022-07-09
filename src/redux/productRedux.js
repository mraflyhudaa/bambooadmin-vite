import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isFetching: false,
  isSuccess: false,
  error: false,
  message: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isSuccess = false;
      state.message = '';
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isSuccess = false;
      state.message = '';
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
      state.message = action.payload.message;
    },
    deleteProductFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
    //UPDATE
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isSuccess = false;
      state.message = '';
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
      state.isSuccess = true;
      state.message = action.payload.message;
    },
    updateProductFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
    //CREATE
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isSuccess = false;
      state.message = '';
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
      state.isSuccess = true;
      state.message = action.payload.message;
    },
    addProductFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
    },
    clear: (state) => {
      state.products = [];
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
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  clear,
  reset,
} = productSlice.actions;

export default productSlice.reducer;
