import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="images/new-logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="link text-uppercase">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="portfolio" onClick={() => setExpanded(false)} className="link text-uppercase">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="about" onClick={() => setExpanded(false)} className="link text-uppercase">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="contact" onClick={() => setExpanded(false)} className="link text-uppercase">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;