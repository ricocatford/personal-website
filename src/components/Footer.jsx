import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Footer.css"

export default function CustomFooter() {
    return (
        <div className="footer-container">
            <Container className="py-3">
                <Row>
                    <Col className="col-sm-6">
                        <p>&copy; Copyright 2023 - Ricardo Albarenque</p>
                    </Col>
                    <Col className="col-sm-6 d-flex justify-content-end">
                        <Link to="https://www.github.com/ricocatford" target="_blank" className="footer-link">
                            <i className="fa-brands fa-github footer-social-icon" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/ricardo-albarenque/" target="_blank" className="footer-link">
                            <i className="fa-brands fa-linkedin footer-social-icon" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}