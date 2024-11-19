// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCzGTMv4L9ve_qgCKpX6kZBJCDMc9TIEQ",
  authDomain: "event-1409e.firebaseapp.com",
  projectId: "event-1409e",
  storageBucket: "event-1409e.firebasestorage.app",
  messagingSenderId: "689783897007",
  appId: "1:689783897007:web:1d7a09906c6cdf8c770d5a",
  measurementId: "G-CM49DW4PFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);