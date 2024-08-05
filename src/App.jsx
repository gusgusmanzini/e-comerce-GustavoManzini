import React from "react";
import NavBar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";


function App() {
  return (
  
      <BrowserRouter>

        <NavBar />

        <Routes>
          
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:id" element={ <ItemListContainer  />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />}  />
          <Route path="/contacto" element={<Contacto />}  />
          
        </Routes>


      </BrowserRouter>
    
  );
}

export default App;
