import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCzGTMv4L9ve_qgCKpX6kZBJCDMc9TIEQ",
  authDomain: "event-1409e.firebaseapp.com",
  projectId: "event-1409e",
  storageBucket: "event-1409e.firebasestorage.app",
  messagingSenderId: "689783897007",
  appId: "1:689783897007:web:1d7a09906c6cdf8c770d5a",
  measurementId: "G-CM49DW4PFB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
