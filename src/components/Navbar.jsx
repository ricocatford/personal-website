import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img src="images/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"} className="link text-uppercase">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"portfolio"} className="link text-uppercase">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to={"about"} className="link text-uppercase">
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"contact"} className="link text-uppercase">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;