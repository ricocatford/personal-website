import React from "react";
import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default App;