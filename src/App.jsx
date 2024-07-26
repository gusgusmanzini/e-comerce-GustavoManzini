import React from "react";
import NavBar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros.jsx";

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="item/:id" element={ <ItemListContainer  />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
