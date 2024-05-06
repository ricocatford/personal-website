import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";

import "../../assets/css/Footer.css";

export default function Footer() {
    const { texts } = useContext(LanguageContext);

    return (
        <footer className="container--fluid">
            <div className="footer__container">
                <p className="footer__text text-center">
                    {texts.footer.content}
                </p>
            </div>
        </footer>
    );
}
