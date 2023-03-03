import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import python from "../assets/images/python.png";
import flask from "../assets/images/flask.png";
import django from "../assets/images/django.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/nodejs.png";
import git from "../assets/images/git.png";

import "../assets/css/style.css"

export default function About() {
    return (
        <Container className="main-container py-3 px-0">
            <Row>
                <Col className="col-sm-12 text-center">
                    <h2 className="heading">
                        About Rico
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
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={html} alt="HTML" className="skill-image"/>
                        <p className="text-center">
                            HTML
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={css} alt="CSS" className="skill-image" />
                        <p className="text-center">
                            CSS
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={js} alt="JavaScript" className="skill-image" />
                        <p className="text-center">
                            JavaScript
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={python} alt="Python" className="skill-image"/>
                        <p className="text-center">
                            Python
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={flask} alt="Flask" className="skill-image"/>
                        <p className="text-center">
                            Flask
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={django} alt="Django" className="skill-image"/>
                        <p className="text-center">
                            Django
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={react} alt="ReactJS" className="skill-image"/>
                        <p className="text-center">
                            ReactJS
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={nodejs} alt="NodeJS" className="skill-image"/>
                        <p className="text-center">
                            NodeJS
                        </p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                            <img src={git} alt="Git" className="skill-image"/>
                            <p className="text-center">
                                Git
                            </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}