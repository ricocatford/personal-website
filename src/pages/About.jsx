import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import python from "../assets/images/python.png";
import flask from "../assets/images/flask.png";
import django from "../assets/images/django.png";

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
                <Col className="col-sm-12 col-md-9 py-3 mx-auto">
                    <p>
                        Hello! My name is Ricardo Albarenque, and I'm based in London. Currently finishing my diploma of Full-Stack Web Development at City of Bristol college. If I'm not coding some App, I'm probably playing drums or videogames.
                    </p>
                    <p>
                        My preferred framework is ReactJS. I have a diverse set of skills, from HTML + CSS + JavaScript + Python, to Responsive Design and UX/UI, to Unit Testing and Debugging.
                    </p>
                </Col>
            </Row>
            <br />
            <Row>
            <Col className="col-sm-12 col-md-12 text-center">
                <h3 className="subheading">
                    Skills
                </h3>
            </Col>
            <Col className="col-sm-12 col-md-9 py-3 mx-auto d-flex justify-content-center">
                <div className="skill-container">
                    <img src={html} alt="HTML" className="skill-image"/>
                    <p className="text-center">
                        HTML
                    </p>
                </div>
                <div className="skill-container">
                    <img src={css} alt="CSS" className="skill-image"/>
                    <p className="text-center">
                        CSS
                    </p>
                </div>
                <div className="skill-container">
                    <img src={js} alt="JavaScript" className="skill-image"/>
                    <p className="text-center">
                        JavaScript
                    </p>
                </div>
                <div className="skill-container">
                    <img src={python} alt="Python" className="skill-image"/>
                    <p className="text-center">
                        Python
                    </p>
                </div>
                <div className="skill-container">
                    <img src={flask} alt="Flask" className="skill-image"/>
                    <p className="text-center">
                        Flask
                    </p>
                </div>
                <div className="skill-container">
                    <img src={django} alt="Django" className="skill-image"/>
                    <p className="text-center">
                        Django
                    </p>
                </div>
            </Col>
            </Row>
        </Container>
    );
}