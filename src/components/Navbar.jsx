import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Navbar.css";

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
            <Nav.Link as={Link} to={"/"} className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"portfolio"} className="nav-link">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to={"about"} className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"contact"} className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;