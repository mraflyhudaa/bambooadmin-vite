// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyCvwWyd9picl-MEljlrq0MjBqDVO1KUWdE',
//   authDomain: 'ecommerce-bamboo.firebaseapp.com',
//   projectId: 'ecommerce-bamboo',
//   storageBucket: 'ecommerce-bamboo.appspot.com',
//   messagingSenderId: '404268447617',
//   appId: '1:404268447617:web:d50915cee515d4c2f09a80',
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
