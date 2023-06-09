import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import "../../assets/css/Contact.css";

export default function Form() {
    const form = useRef();

    const [showConfirmation, setShowConfirmation] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                "service_bu6f7fw",
                "template_k8b224s",
                form.current,
                "N_EBd8TvptZq0HlHI"
            )
            .then((result) => {
                console.log(result.text);
                event.target.reset();
                setShowConfirmation(true);
            });
    };

    return (
        <div className="contact__tab flex justify-center align-center">
            {showConfirmation ? (
                <h5 className="form__feedback__text text-center">
                    Thank you very much for getting it touch. I will reply as
                    soon as possible!
                </h5>
            ) : (
                <form
                    className="contact__form flex justify-between"
                    ref={form}
                    onSubmit={submitForm}
                >
                    <div className="flex justify-between">
                        <div className="form__field flex">
                            <label htmlFor="user_name" className="form__label">
                                Name *
                            </label>
                            <input
                                className="form__input"
                                name="user_name"
                                type="text"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="user_name" className="form__label">
                                Email *
                            </label>
                            <input
                                className="form__input"
                                name="user_name"
                                type="email"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__field">
                        <label htmlFor="message" className="form__label">
                            Message *
                        </label>
                        <textarea
                            className="form__input"
                            name="message"
                            placeholder="Your message"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="btn btn--primary">
                            Submit{" "}
                            <i className="fa-solid fa-paper-plane btn__icon" />
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
