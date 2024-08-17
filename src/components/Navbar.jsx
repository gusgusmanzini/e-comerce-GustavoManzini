import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <div className="dropdown">
          <button className="dropbtn">Categorias</button>
          
        </div>
        <Navbar.Brand href="/">Tienda Mates</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/nosotros">Nosotros</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </>
);

export default NavBar;