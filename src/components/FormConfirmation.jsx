import { useState } from "react";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const FormConfirmation = (props) => {
    return (
        <ToastContainer position="bottom-center" className="p-5">
            <Toast onClose={props.toggleShow}>
                <Toast.Header>
                    <strong className="me-auto">Message sent</strong>
                </Toast.Header>
                <Toast.Body>
                    Thank you. I will contact you back as soon as possible.
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default FormConfirmation;