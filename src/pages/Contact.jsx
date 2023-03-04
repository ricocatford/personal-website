import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                <Col className="col-sm-12">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;