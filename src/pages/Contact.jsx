import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
    return (
        <Container className="main-container py-3 px-0">
            <Row>
                <Col className="col-sm-12 text-center">
                    <h1 className="heading">
                        Contact Me
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;