import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import LanguageContext from "../../context/LanguageContext";

import LanguageSelect from "./LanguageSelect";

import "../../assets/css/Navbar.css";

export default function Navbar() {
    const { texts } = useContext(LanguageContext);
    const [toggle, setToggle] = useState(false);

    const closeMobileMenu = () => setToggle(false);

    useEffect(() => {
        const handleScrollNavVisibility = () => {
            if (window.scrollY > 80) {
                setToggle(false);
            }
        };

        window.addEventListener("scroll", handleScrollNavVisibility);

        return () => {
            window.removeEventListener("scroll", handleScrollNavVisibility);
        };
    }, []);

    return (
        <header>
            <nav className="navbar flex align-center">
                <div className="navbar__container flex">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img
                            src="images/logo/logo.png"
                            alt="Logo"
                            className="navbar__logo"
                        />
                    </Link>

                    <button
                        className="navbar__toggler"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? (
                            <i className="fa-solid fa-xmark" />
                        ) : (
                            <i className="fa-solid fa-bars" />
                        )}
                    </button>
                    <ul
                        className={
                            toggle
                                ? "navbar__nav navbar--active"
                                : "navbar__nav"
                        }
                    >
                        <li>
                            <Link
                                to="/"
                                className="navbar__link"
                                onClick={closeMobileMenu}
                            >
                                <span>
                                    <i className="fa-solid fa-house navbar__link__icon" />
                                </span>
                                {texts.navbarLinks.home}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                className="navbar__link"
                                onClick={closeMobileMenu}
                            >
                                <span>
                                    <i className="fa-solid fa-id-card navbar__link__icon" />
                                </span>
                                {texts.navbarLinks.about}
                            </Link>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/#portfolio"
                                className="navbar__link"
                                onClick={closeMobileMenu}
                            >
                                <span>
                                    <i className="fa-solid fa-briefcase navbar__link__icon" />
                                </span>
                                {texts.navbarLinks.portfolio}
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/#contact"
                                className="navbar__link"
                                onClick={closeMobileMenu}
                            >
                                <span>
                                    <i className="fa-solid fa-paper-plane navbar__link__icon" />
                                </span>
                                {texts.navbarLinks.contact}
                            </HashLink>
                        </li>
                        <hr className="navbar__divider" />
                        <LanguageSelect />
                    </ul>
                </div>
            </nav>
        </header>
    );
}
