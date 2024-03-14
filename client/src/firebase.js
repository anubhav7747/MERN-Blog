// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-82c30.firebaseapp.com",
  projectId: "mern-blog-82c30",
  storageBucket: "mern-blog-82c30.appspot.com",
  messagingSenderId: "530869797316",
  appId: "1:530869797316:web:68eee4e055307d513b2491",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
