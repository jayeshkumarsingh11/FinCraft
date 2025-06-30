// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQude71ylHa1gzwh5SxlWpIFKQLxYqLec",
  authDomain: "personal-fin-4564e.firebaseapp.com",
  projectId: "personal-fin-4564e",
  storageBucket: "personal-fin-4564e.firebasestorage.app",
  messagingSenderId: "203455802118",
  appId: "1:203455802118:web:3673408560a9ac9cf3cc87",
  measurementId: "G-9YYD13BY8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };