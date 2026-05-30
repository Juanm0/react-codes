// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuEUqLKtetbRwKh1gRLOrxRWw4LzTkmsM",
  authDomain: "react-app-89680.firebaseapp.com",
  projectId: "react-app-89680",
  storageBucket: "react-app-89680.firebasestorage.app",
  messagingSenderId: "235932967737",
  appId: "1:235932967737:web:851840cd688a605444fee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//traer la bd

export const db = getFirestore(app)