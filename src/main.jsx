import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBvLrarSkgbMxqsJVymY0F6PCGgdgSwXS0",
  authDomain: "reactjs-6b3f5.firebaseapp.com",
  projectId: "reactjs-6b3f5",
  storageBucket: "reactjs-6b3f5.appspot.com",
  messagingSenderId: "569765242475",
  appId: "1:569765242475:web:dce4bca3b8ca2411d5b32e",
  measurementId: "G-GYQF0LBBL1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
