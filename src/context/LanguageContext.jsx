// src/context/LanguageContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

function detectPreferredLang() {
    const stored = localStorage.getItem("lang");
    if (stored === "es" || stored === "en") return stored;
    return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }) {
    // Siempre arranca en "es" para que el primer render coincida con el HTML
    // pre-renderizado (evita mismatches de hidratación). La preferencia real
    // del visitante se aplica en el efecto de abajo, después de montar.
    const [lang, setLang] = useState("es");

    useEffect(() => {
        const preferred = detectPreferredLang();
        if (preferred !== "es") setLang(preferred);
    }, []);

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
