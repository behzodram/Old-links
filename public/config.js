// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD86tyq7FLbz3o013kFqVnALCsUgDHNltU",
  authDomain: "old-links.firebaseapp.com",
  projectId: "old-links",
  storageBucket: "old-links.firebasestorage.app",
  messagingSenderId: "599030210599",
  appId: "1:599030210599:web:0f209527ee359acc2aae02",
  measurementId: "G-TK3FGVHMJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);