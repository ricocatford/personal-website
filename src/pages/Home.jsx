import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../assets/css/Home.css";

const Home = () => {
    return (
        <Container className="main-container hero-container py-3 px-0">
            <Row>
                <Col className="col-sm-12">
                    <h1 className="heading hero-heading">
                        Hi! Looking for a Full-Stack Web Developer?
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;