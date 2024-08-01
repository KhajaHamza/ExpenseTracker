// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKQoO-sybMqNTP8P9tYkUMtFgQyY4AOkA",
  authDomain: "expense-tracker-866db.firebaseapp.com",
  projectId: "expense-tracker-866db",
  storageBucket: "expense-tracker-866db.appspot.com",
  messagingSenderId: "113793801023",
  appId: "1:113793801023:web:62feef1be791d7fa4ed18a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);