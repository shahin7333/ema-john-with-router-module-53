// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzT2LhBHCBqAjpDYsmfqMOlUtX-l_AsW4",
  authDomain: "ema-john-simple-fb699.firebaseapp.com",
  projectId: "ema-john-simple-fb699",
  storageBucket: "ema-john-simple-fb699.appspot.com",
  messagingSenderId: "73090329473",
  appId: "1:73090329473:web:4c886df98ddcace1405680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth;