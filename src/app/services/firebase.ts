import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7rPbsKSsfP92TkKv5mKOqfA_g-w9HV1k",
  authDomain: "desenv-mobile.firebaseapp.com",
  projectId: "desenv-mobile",
  storageBucket: "desenv-mobile.appspot.com",
  messagingSenderId: "868903155453",
  appId: "1:868903155453:web:9b5b4f728c6e084c1b7094",
  measurementId: "G-52Q4KLNN37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export { firestore };
export { firebaseConfig };