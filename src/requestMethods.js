import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
let TOKEN;
if (localStorage.getItem('persist:root') != null) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
    .currentUser?.token;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
