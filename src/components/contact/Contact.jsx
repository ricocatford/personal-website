import { useState } from "react";

import Form from "./Form";
import GitHub from "./GitHub";

import "../../assets/css/Contact.css";

export default function Contact() {
    const [activeTab, setActiveTab] = useState("mail");

    const activeTabSelector = {
        mail: <Form />,
        github: <GitHub />,
        linkedin: <h1>LinkedIn</h1>,
    };

    return (
        <div className="container--fluid bg-light">
            <div className="container" id="contact">
                <h3 className="subheading contact__subheading">
                    Let's connect and have a chat!
                </h3>
                <p className="contact__text">
                    If you wish to contact me, hire me, or start a project with
                    my help, I'm always open to ideas and most likely would
                    enjoy working with you! Below you can write me an email or
                    find my socials, just click on the different tabs.
                </p>
                <div className="contact__container flex">
                    <div className="contact__content__wrapper box-shadow">
                        {activeTabSelector[activeTab]}
                    </div>
                    <div className="contact__sidenav__wrapper text-center">
                        <ul className="contact__sidenav flex justify-between">
                            <li
                                className="contact__sidenav__btn contact__sidenav__btn--orange box-shadow"
                                onClick={() => setActiveTab("mail")}
                            >
                                <span>
                                    <i className="fa-solid fa-envelope contact__sidenav__icon" />
                                </span>
                                <h4 className="contact__sidenav__subheading">
                                    Mail
                                </h4>
                            </li>
                            <li
                                className="contact__sidenav__btn box-shadow"
                                onClick={() => setActiveTab("github")}
                            >
                                <span>
                                    <i className="fa-brands fa-github-alt contact__sidenav__icon" />
                                </span>
                                <h4 className="contact__sidenav__subheading">
                                    GitHub
                                </h4>
                            </li>
                            <li
                                className="contact__sidenav__btn contact__sidenav__btn--blue box-shadow"
                                onClick={() => setActiveTab("linkedin")}
                            >
                                <span>
                                    <i className="fa-brands fa-linkedin contact__sidenav__icon" />
                                </span>
                                <h4 className="contact__sidenav__subheading">
                                    LinkedIn
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
