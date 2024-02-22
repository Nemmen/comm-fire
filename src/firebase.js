// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMMU5befOqDCOdy-wM9c0_LNb__tX2J9g",
  authDomain: "empowerr-a6948.firebaseapp.com",
  projectId: "empowerr-a6948",
  storageBucket: "empowerr-a6948.appspot.com",
  messagingSenderId: "2218474056",
  appId: "1:2218474056:web:1b6a5b38909fc6bcc7767d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app






