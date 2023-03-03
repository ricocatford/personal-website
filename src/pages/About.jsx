import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../assets/css/style.css"

const About = () => {
    return (
        <Container className="main-container py-3 px-0">
            <Row>
                <Col className="col-sm-12 text-center">
                    <h2 className="heading">
                        Who is Rico?
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-12 col-md-9 mx-auto">
                    <p>
                        Hello! My name is Ricardo Albarenque, and I'm based in London. Currently finishing my diploma of Full-Stack Web Development at City of Bristol college. If I'm not coding some App, I'm probably playing drums or videogames.
                    </p>
                    <p>
                        My preferred framework is ReactJS. I have a diverse set of skills, from HTML + CSS + JavaScript + Python, to Responsive Design and UX/UI, to Unit Testing and Debugging.
                    </p>
                    <p>
                        I'm very passionate about pixel-perfect designs, high performance and reusable code.
                    </p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col className="col-sm-12 text-center">
                    <h3 className="subheading">
                        Skills
                    </h3>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    );
}

export default About;