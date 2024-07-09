import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
export const NavBar = () => (
  <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda Mates</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Nuestros Productos</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </>
);
