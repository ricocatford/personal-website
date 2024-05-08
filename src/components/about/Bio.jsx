import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";

export default function Bio() {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="flex justify-between bio__container">
            <div className="bio__img__wrapper">
                <img
                    src="images/bio.jpg"
                    alt="Ricardo Albarenque"
                    className="bio__img"
                />
            </div>
            <div className="bio__text__wrapper">
                {texts.about.bio.paragraphs.map((paragraph) => (
                    <p className="bio__text">{paragraph}</p>
                ))}
            </div>
        </div>
    );
}
