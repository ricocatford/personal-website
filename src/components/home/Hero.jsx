import { Link } from "react-router-dom";
import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";

import Stack from "./Stack";

import "../../assets/css/Hero.css";

export default function Hero() {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="container flex">
            <div className="hero__container flex">
                <div className="hero__wrapper flex">
                    <h2 className="hero__subheading">
                        {texts.hero.subheading}
                    </h2>
                    <h1 className="hero__heading">{texts.hero.heading}</h1>
                    <p className="hero__text">{texts.hero.paragraph}</p>
                    <Link to="about" className="btn hero__btn">
                        {texts.hero.button}
                        <span>
                            <i className="fa-solid fa-arrow-right btn__icon" />
                        </span>
                    </Link>
                </div>
                <div className="hero__stack flex justify-center align-center">
                    <Stack />
                </div>
            </div>
        </div>
    );
}
