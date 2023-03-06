import { useState } from "react";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const FormConfirmation = () => {
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

    return (
        <ToastContainer position="bottom-center" className="p-5">
            <Toast show={show} onClose={toggleShow}>
                <Toast.Header>
                    <strong className="me-auto">Message sent successfully</strong>
                </Toast.Header>
                <Toast.Body>
                    Thank you. I will contact you back as soon as possible.
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default FormConfirmation;