import React, { useEffect } from "react";
import NavBar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import CategoryPage from "./components/CategoryPage";
import { CartProvider } from "./CartContext.jsx";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig.jsx';
import Cart from './Cart.jsx';
import Home from './components/ItemListContainer.jsx'

function App() {
  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", "N5fCLUxWKVmaxThMkwpW");

    getDoc(refDoc).then((snapshot) => {
      console.log({ id: snapshot.id, ...snapshot.data() });
    });
  });
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Cart" element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
