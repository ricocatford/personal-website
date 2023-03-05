import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import "../assets/css/style.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_bu6f7fw", 
            "template_k8b224s", 
            form.current, 
            "N_EBd8TvptZq0HlHI")
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <Container className="main-container py-3 px-0">
            <Row>
                <Col className="col-sm-12 text-center">
                    <h1 className="heading">
                        Contact Me
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-12 text-center">
                    <p className="flow-text mb-5">
                        Have a question? Please enquire below.
                    </p>
                </Col>
            </Row>
            <Row>
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="col-sm-12 col-md-4 mb-3 mx-auto" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="user_email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            I'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="col-sm-12 col-md-4 mb-3 mx-auto" controlId="formBasicUsername">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="user_name" type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="col-sm-12 col-md-4 mb-3 mx-auto" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="message" as="textarea" rows={3} placeholder="Enter message" />
                    </Form.Group>
                    <Col className="col-sm-12 col-md-4 mx-auto text-center">
                        <Button size="lg" variant="primary" type="submit" className="px-5 mx-auto btn-primary">
                            Send
                        </Button>
                    </Col>
                </Form>
            </Row>
        </Container>
    );
}

export default Contact;