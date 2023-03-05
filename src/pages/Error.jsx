import { useRouteError } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CustomError = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <Container className="main-container py-3">
        <Row>
          <Col className="col-sm-12 text-center">
            <h1 className="heading">
              Oops! Are you okay?
            </h1>
            <p>
              Sorry, an unexpected error has occurred.
            </p>
            <p>
              Error {error.status || error.message}.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default CustomError;