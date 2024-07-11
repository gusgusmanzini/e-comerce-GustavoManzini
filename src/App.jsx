import React from "react";
import  NavBar  from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Chau" />
    </>
  );
}

export default App;
