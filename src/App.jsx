import React, { useState } from 'react';
import './App.css'
import './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <header>
      <h3>LOGO</h3>
      <nav>
        <a href="/#">Inicio</a>
        <a href="/#">Sobre Nosotros</a>
        <a href="/#">Contacto</a>
      </nav>
     </header>
    </div>
     
    </>
  );
}

export default App
