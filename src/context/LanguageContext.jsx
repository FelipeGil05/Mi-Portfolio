// src/context/LanguageContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        const stored = localStorage.getItem("lang");
        if (stored === "es" || stored === "en") return stored;
        return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
    return ctx;
}
