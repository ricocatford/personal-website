import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "../components/Carousel"

import data from "../data/projects.json";

const Portfolio = () => {
    return (
        <Container className="main-container py-3">
            <Row>
                <Col className="col-sm-12 text-center">
                    <h1 className="heading">
                        Portfolio
                    </h1>
                </Col>
                <Col className="col-sm-12">
                    <Carousel projects={data} />
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;