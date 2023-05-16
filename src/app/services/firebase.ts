// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{ firebase } from 'firebase/app';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
const analytics = getAnalytics(app);
const firestore = firebase.firestore();