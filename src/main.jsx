import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import CartProvider from './CartContext';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




