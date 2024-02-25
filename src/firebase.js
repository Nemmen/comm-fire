// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBvZS0QAjWLk8La6S0EimPs_0y6Z9bZ1M",
  authDomain: "empowermend-justice.firebaseapp.com",
  projectId: "empowermend-justice",
  storageBucket: "empowermend-justice.appspot.com",
  messagingSenderId: "605910864704",
  appId: "1:605910864704:web:3bf57d48211eb3b4f220a5",
  measurementId: "G-6DK9LV1HF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app






