import { useContext, useState } from "react";

import "../../assets/css/Dropdown.css";
import LanguageContext from "../../context/LanguageContext";

export default function LanguageSelect() {
    const { language, handleLanguage } = useContext(LanguageContext);
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);
    const handleToggle = () => {
        setToggleDropdownMenu(!toggleDropdownMenu);
    };

    return (
        <div className="dropdown">
            <button className="dropdown__btn" onClick={handleToggle}>
                <i className="fa-solid fa-earth-europe" />
                <span>
                    {!toggleDropdownMenu ? (
                        <i className="fa-solid fa-caret-down dropdown__caret--down" />
                    ) : (
                        <i className="fa-solid fa-caret-down dropdown__caret--rotate" />
                    )}
                </span>
            </button>

            {toggleDropdownMenu && (
                <div className="dropdown__content__wrapper">
                    <div
                        className="dropdown__content flex"
                        onClick={() => handleLanguage("en")}
                    >
                        <p>English</p>
                        {language === "en" && (
                            <span>
                                <i className="fa-solid fa-check dropdown__option--active" />
                            </span>
                        )}
                    </div>
                    <div
                        className="dropdown__content flex"
                        onClick={() => handleLanguage("es")}
                    >
                        <p>Español</p>
                        {language === "es" && (
                            <span>
                                <i className="fa-solid fa-check dropdown__option--active" />
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
