// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClFG6dFJf-qVaV9usULRqmEzImW4DSdw8",
  authDomain: "mr-mechanic-e1b7e.firebaseapp.com",
  projectId: "mr-mechanic-e1b7e",
  storageBucket: "mr-mechanic-e1b7e.appspot.com",
  messagingSenderId: "198678444203",
  appId: "1:198678444203:web:71a7d6e0e4b9497e139fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;