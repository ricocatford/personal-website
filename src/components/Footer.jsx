import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Footer.css";

const CustomFooter = () => {
    return (
        <footer className="footer py-3 mt-auto footer-wrapper">
            <Container>
                <Row>
                    <Col className="col-sm-6 d-flex align-items-center">
                        <p className="footer-copyright">&copy; Copyright 2023 - Ricardo Albarenque</p>
                    </Col>
                    <Col className="col-sm-6 d-flex align-items-center justify-content-end">
                        <Link to="https://www.github.com/ricocatford" target="_blank" className="link">
                            <i className="fa-brands fa-github footer-social-icon" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/ricardo-albarenque/" target="_blank" className="link">
                            <i className="fa-brands fa-linkedin footer-social-icon" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default CustomFooter;