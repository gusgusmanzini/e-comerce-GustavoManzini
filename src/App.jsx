import React from "react";
import NavBar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros.jsx";

function App() {
  return (
  
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:id" element={ <ItemListContainer  />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>


      </BrowserRouter>
    
  );
}

export default App;
