import { Link } from "react-router-dom";

import data from "../data/skills.json";

import Bio from "../components/about/Bio";
import Skills from "../components/about/Skills";

import "../assets/css/About.css";

export default function About() {
    return (
        <div className="container">
            <Bio />
            <h3 className="subheading">Skills and Resume</h3>
            <div className="flex skills__section">
                <div className="skills__text__wrapper flex align-center">
                    <p className="skills__text">
                        Here you can find a list of my skills. For more
                        information about my professional background, please
                        refer to my resume, which you can access here:
                    </p>
                    <Link
                        to="/documents/resume.pdf"
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
