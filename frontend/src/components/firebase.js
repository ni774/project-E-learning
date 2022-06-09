// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNxJvH7SZw8wctw8S_PHD39ClaUcm1mMo",
  authDomain: "e-learning-authenticatio-73f0e.firebaseapp.com",
  projectId: "e-learning-authenticatio-73f0e",
  storageBucket: "e-learning-authenticatio-73f0e.appspot.com",
  messagingSenderId: "709852944135",
  appId: "1:709852944135:web:6bc9aecb9493b004ce17a2",
  measurementId: "G-TT154CRWXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};