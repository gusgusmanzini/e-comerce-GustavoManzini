// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import CartWidget from "./CartWidget";

// export const NavBar = () => (
//   <>
//     <Navbar bg="dark" data-bs-theme="dark">
//       <Container>
//         <div className="dropdown">
//           <button className="dropbtn">Categorias</button>
          
//         </div>
//         <Navbar.Brand href="/">Tienda Mates</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="/">Inicio</Nav.Link>
//           <Nav.Link href="/nosotros">Nosotros</Nav.Link>
//           <Nav.Link href="/contacto">Contacto</Nav.Link>
//         </Nav>
//         <CartWidget />
//       </Container>
//     </Navbar>
//   </>
// );

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import './NavBar.css';


const NavBar =() => {

  const categories = ['Mate1', 'Mate2', 'Mate3'];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
        <h1>Mates</h1>
        </Link>
        
      </div>
      <ul className="navbar-categories">
        {categories.map((category, index) => (
          <li key={index} className="navbar-item">
            {category}
          </li>
        ))}
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  )
}
 

export default NavBar;