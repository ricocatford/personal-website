import { createContext, useState } from "react";
import translations from "../data/translations.json";

const LanguageContext = createContext();

const defaultLanguage = "en";

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(defaultLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (value) => {
        setLanguage(value);
        setTexts(translations[value]);
    };

    const data = { language, texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
