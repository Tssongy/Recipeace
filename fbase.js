// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4pZspuTm2K1p6ilLTuDOAnyFlvS02ieo",
  authDomain: "recipeace-e4349.firebaseapp.com",
  projectId: "recipeace-e4349",
  storageBucket: "recipeace-e4349.appspot.com",
  messagingSenderId: "460638505268",
  appId: "1:460638505268:web:da5f90b1549b69e5d47d61",
  measurementId: "G-6XTL83BCV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const authService = getAuth(app);