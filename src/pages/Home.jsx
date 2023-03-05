import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../assets/css/Home.css";

const Home = () => {
    return (
        <div className="hero-container-image">
            <div className="hero-heading-wrapper">
                <Container>
                    <Row>
                        <Col className="col-sm-12 mx-auto">
                            <h1 className="hero-heading text-uppercase text-center">
                                Hi! Looking for a Full-Stack Web Developer?
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-sm-12 mx-auto mb-5 text-center">
                            <Button  as={Link} to={"portfolio"} size="lg" className="mx-2 mb-1 btn-primary">
                                See Work
                            </Button>
                            <Button  as={Link} to={"contact"} size="lg" className="mx-2 mb-1 btn-outline">
                                Contact Me
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;