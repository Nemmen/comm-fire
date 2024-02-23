// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBopUcTNZSVbP6FcBvJmFUkrTavELSZGfU",
  authDomain: "empowermendd.firebaseapp.com",
  projectId: "empowermendd",
  storageBucket: "empowermendd.appspot.com",
  messagingSenderId: "1010759436804",
  appId: "1:1010759436804:web:8240b01b708b4342f40351",
  measurementId: "G-Q7MF9DL3L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app






