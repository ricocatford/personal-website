import { useState, useRef, useContext } from "react";

import LanguageContext from "../../context/LanguageContext";

import emailjs from "@emailjs/browser";

import "../../assets/css/Contact.css";

export default function Form() {
    const { texts } = useContext(LanguageContext);
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
                    {texts.contact.form.confirmation}
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
                                {texts.contact.form.name}
                            </label>
                            <input
                                className="form__input"
                                name="user_name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="user_name" className="form__label">
                                {texts.contact.form.email}
                            </label>
                            <input
                                className="form__input"
                                name="user_name"
                                type="email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__field">
                        <label htmlFor="message" className="form__label">
                            {texts.contact.form.message}
                        </label>
                        <textarea
                            className="form__input"
                            name="message"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="btn btn--primary">
                            {texts.contact.form.submit}{" "}
                            <i className="fa-solid fa-paper-plane btn__icon" />
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
