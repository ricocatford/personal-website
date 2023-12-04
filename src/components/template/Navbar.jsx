import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../../assets/css/Navbar.css";
import LanguageSelect from "./LanguageSelect";

export default function Navbar() {
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
                <div className="navbar__container flex justify-between">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img
                            src="images/logo/logo.png"
                            alt="Logo"
                            className="navbar__logo"
                        />
                    </Link>
                    {/* <LanguageSelect /> */}
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
                                Home
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
                                About
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
                                Portfolio
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
                                Contact
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
