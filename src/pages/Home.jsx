import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
        <Container className="main-container py-3 px-0">
            <Row>
                <Col className="col-sm-12 text-center">
                    <h2 className="heading">
                        Hello!
                    </h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;