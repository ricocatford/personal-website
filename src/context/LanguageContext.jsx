import { createContext, useState } from "react";

const LanguageContext = createContext();

const defaultLanguage = "en";
const translations = {
    en: {
        testText: "Hello",
    },
    es: {
        testText: "Hola",
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(defaultLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        if (e.target.value === "en") {
            setLanguage("en");
            setTexts(translations.en);
        } else {
            setLanguage("es");
            setTexts(translations.es);
        }
    };

    const data = { texts, handleLanguage };

    return <LanguageContext.Provider>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
