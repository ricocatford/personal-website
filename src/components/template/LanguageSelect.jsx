import { useContext, useRef, useEffect, useState } from "react";

import LanguageContext from "../../context/LanguageContext";

import DropdownItem from "./DropdownItem";

import "../../assets/css/Dropdown.css";

export default function LanguageSelect() {
    const { languages, language, handleLanguage } = useContext(LanguageContext);
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setToggleDropdownMenu(!toggleDropdownMenu);
    };

    const handleDropdownItemClick = (language) => {
        handleLanguage(language);
        handleToggle();
    };

    const toggleDropdownMenuOnOutsideClick = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setToggleDropdownMenu(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    toggleDropdownMenuOnOutsideClick(dropdownRef);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown__btn" onClick={handleToggle}>
                <span className="dropdown__icon">
                    <i className="fa-solid fa-earth-europe" />
                </span>
                <p className="dropdown__text">{language}</p>
                <span>
                    {!toggleDropdownMenu ? (
                        <i className="fa-solid fa-chevron-down dropdown__chevron--down" />
                    ) : (
                        <i className="fa-solid fa-chevron-down dropdown__chevron--rotate" />
                    )}
                </span>
            </button>
            {toggleDropdownMenu && (
                <div className="dropdown__content__wrapper">
                    {languages.map((languageItem) => (
                        <DropdownItem
                            key={languageItem.languageName}
                            onClick={() =>
                                handleDropdownItemClick(
                                    languageItem.languageCode
                                )
                            }
                            value={languageItem.languageName}
                            checked={languageItem.languageCode === language}
                        />
                    ))}

                    {/* <DropdownItem
                        onClick={() => handleLanguage("es")}
                        value={"Español"}
                        checked={false}
                    /> */}
                    {/* <div
                        className="dropdown__content flex"
                        onClick={() => handleLanguage("en")}
                    >
                        <p>English</p>
                        {language === "en" && (
                            <span>
                                <i className="fa-solid fa-circle-check dropdown__option--active" />
                            </span>
                        )}
                    </div> */}
                    {/* <div
                        className="dropdown__content flex"
                        onClick={() => handleLanguage("es")}
                    >
                        <p>Español</p>
                        {language === "es" && (
                            <span>
                                <i className="fa-solid fa-circle-check dropdown__option--active" />
                            </span>
                        )}
                    </div> */}
                </div>
            )}
        </div>
    );
}
