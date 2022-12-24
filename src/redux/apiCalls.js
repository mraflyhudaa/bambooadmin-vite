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
import { addUsersFailure, addUsersStart, addUsersSuccess, deleteUsersFailure, deleteUsersStart, deleteUsersSuccess, getUsersFailure, getUsersStart, getUsersSuccess, updateUsersFailure, updateUsersStart, updateUsersSuccess } from './allUserRedux';

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
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id, res.data.message));
  } catch (err) {
    dispatch(deleteProductFailure(err.response.data.message));
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product, message: res.data.message }));
  } catch (err) {
    dispatch(updateProductFailure(err.response.data.message));
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    console.log(res.data);
    const message = res.data.message
    dispatch(addProductSuccess(res.data.savedProduct ,message));
  } catch (err) {
    dispatch(addProductFailure(err.response.data.message));
  }
};

//Users Action
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get('/users');
    dispatch(getUsersSuccess(res.data.data));
  } catch (err) {
    dispatch(getUsersFailure());
    console.log(err);
  }
};

export const deleteUsers = async (id, dispatch) => {
  dispatch(deleteUsersStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUsersSuccess(id, res.data.message));
  } catch (err) {
    dispatch(deleteUsersFailure(err.response.data.message));
  }
};

export const updateUsers = async (id, user, dispatch) => {
  dispatch(updateUsersStart());
  try {
    const res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateUsersSuccess({ id, user, message: res.data.message }));
  } catch (err) {
    dispatch(updateUsersFailure(err.response.data.message));
  }
};
export const addUsers = async (user, dispatch) => {
  dispatch(addUsersStart());
  try {
    const res = await userRequest.post(`auth/addUser`, user);
    dispatch(addUsersSuccess(res.data.data));
  } catch (err) {
    dispatch(addUsersFailure());
  }
};
