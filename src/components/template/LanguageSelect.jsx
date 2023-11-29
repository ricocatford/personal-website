import { useState } from "react";
import "../../assets/css/Dropdown.css";

export default function LanguageSelect() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="dropdown">
            <button
                className="dropdown__btn"
                onClick={() => setToggle(!toggle)}
            >
                <i className="fa-solid fa-earth-europe" />
            </button>
            {toggle && (
                <div className="dropdown__content__wrapper">
                    <div className="dropdown__content">English</div>
                    <div className="dropdown__content">Español</div>
                </div>
            )}
        </div>
    );
}
