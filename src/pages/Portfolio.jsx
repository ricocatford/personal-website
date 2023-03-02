import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "../components/Carousel"

import "../assets/css/style.css"

export default function Portfolio() {
    return (
        <Container className="main-container py-3 px-0">
            <Row>
                <Col className="col-sm-12 text-center">
                    <h2 className="heading">
                        Portfolio
                    </h2>
                </Col>
                <Col className="col-sm-12 py-3">
                    <Carousel />
                </Col>
            </Row>
        </Container>
    );
}