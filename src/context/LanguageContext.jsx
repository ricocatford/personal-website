import { createContext, useState } from "react";
import data from "../data/translations.json";

const LanguageContext = createContext();

const defaultLanguage = "en";
const translations = {
    en: data[0],
    es: data[1],
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(defaultLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (value) => {
        if (value === "en") {
            setLanguage("en");
            setTexts(translations.en);
        } else if (value === "es") {
            setLanguage("es");
            setTexts(translations.es);
        }
    };

    const data = { language, texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
