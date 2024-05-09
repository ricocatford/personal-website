import { Link } from "react-router-dom";
import { useContext } from "react";

import LanguageContext from "../context/LanguageContext";

import data from "../data/skills.json";

import Bio from "../components/about/Bio";
import Skills from "../components/about/Skills";

import "../assets/css/About.css";

export default function About() {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="container">
            <Bio />
            <h3 className="subheading">{texts.about.skills.heading}</h3>
            <div className="flex skills__section">
                <div className="skills__text__wrapper flex align-center">
                    <p className="skills__text">
                        {texts.about.skills.paragraph}
                    </p>
                    <Link
                        to={texts.about.skills.link}
                        download="ricardo-albarenque-cv"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-solid fa-file-arrow-down resume__icon" />
                    </Link>
                </div>
                <Skills skills={data} />
            </div>
        </div>
    );
}
