import { Link } from "react-router-dom";
import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";

export default function LinkedIn() {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="linkedin__container">
            <Link
                to="https://linkedin.com/in/ricardo-albarenque"
                target="_blank"
                className="btn btn--primary"
            >
                {texts.contact.linkedin.link}
                <i className="fa-solid fa-arrow-up-right-from-square btn__icon" />
            </Link>
        </div>
    );
}
