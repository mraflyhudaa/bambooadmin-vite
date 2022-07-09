import { loginFailure, loginStart, loginSuccess, logout } from './userRedux';
import { publicRequest, userRequest } from '../requestMethods';
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  clear,
} from './productRedux';
import storage from 'redux-persist/lib/storage';
import { persistor } from './store';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data.message));
  }
};

export const logoutUser = async (dispatch) => {
  dispatch(logout);
  persistor.purge();
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure(err));
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product, message: res.data.message }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
