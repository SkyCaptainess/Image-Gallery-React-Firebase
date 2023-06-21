// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO7tLtxHAU97ycKuXOtyrXP08_rCqbHJI",
  authDomain: "image-gallery-test-bb2b0.firebaseapp.com",
  projectId: "image-gallery-test-bb2b0",
  storageBucket: "image-gallery-test-bb2b0.appspot.com",
  messagingSenderId: "302552423038",
  appId: "1:302552423038:web:2f721a08ce6cf1b380d62f",
  measurementId: "G-G51JBV7LC3"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore, auth };
