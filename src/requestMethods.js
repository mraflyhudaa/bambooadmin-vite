import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
// let TOKEN;
// if (localStorage.getItem('persist:root') != null) {
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//     .currentUser?.token;
// }
// const myToken = localStorage.getItem('token');

const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
