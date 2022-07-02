import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = () => {
  if (
    JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.token
  ) {
    return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.token;
  } else {
    return '';
  }
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
