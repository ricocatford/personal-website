import { Link } from "react-router-dom";

import Stack from "./Stack";

import "../../assets/css/Hero.css";

export default function Hero() {
    return (
        <div className="container flex">
            <div className="hero__container flex">
                <div className="hero__wrapper flex">
                    <h2 className="hero__subheading">
                        Hello, I'm Ricardo Albarenque
                    </h2>
                    <h1 className="hero__heading">Full-Stack Developer</h1>
                    <p className="hero__text">
                        Currently based in Asturias, Spain. I've achieved my
                        diploma in Full-Stack Web Development at City of Bristol
                        College. I'm passionate about pixel-perfect designs and
                        reusable code!
                    </p>
                    <Link to="about" className="btn hero__btn">
                        Learn More
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
