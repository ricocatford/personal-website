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

    const handleLanguage = (value) => {
        if (value === "en") {
            setLanguage("en");
            setTexts(translations.en);
        } else if (value === "es") {
            setLanguage("es");
            setTexts(translations.es);
        }
        console.log(language);
    };

    const data = { texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
