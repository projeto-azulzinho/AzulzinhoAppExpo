// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYqfsW9Zk4-GUXf_uQPmISephnJnQr5rs",
  authDomain: "azulzinho-1a8c4.firebaseapp.com",
  projectId: "azulzinho-1a8c4",
  storageBucket: "azulzinho-1a8c4.appspot.com",
  messagingSenderId: "256882541790",
  appId: "1:256882541790:web:e1d33faafddc5e11b22e4f",
  measurementId: "G-0SSP9C4B9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
