// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj36f32Sond7GYudDvK6bHjGFTbICMNpE",
  authDomain: "netgpt-122da.firebaseapp.com",
  projectId: "netgpt-122da",
  storageBucket: "netgpt-122da.firebasestorage.app",
  messagingSenderId: "983389254306",
  appId: "1:983389254306:web:cb505b0fc3d97318b35dfb",
  measurementId: "G-NJCQK5YET3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()