import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const { lang, toggleLang } = useLanguage();
    const t = translations[lang].nav;

    const links = [
        { href: "#home", label: t.home },
        { href: "#about", label: t.about },
        { href: "#skills", label: t.skills },
        { href: "#experience", label: t.experience },
        { href: "#education", label: t.education },
        { href: "#projects", label: t.projects },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-void/80 backdrop-blur-md border-b border-accent/15 py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo clickeable */}
                <div
                    className="text-xl font-display font-bold text-accent glow-text cursor-pointer tracking-wide"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    FG
                </div>

                {/* Menú de escritorio */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex space-x-8 font-mono text-sm">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={toggleLang}
                        className="font-mono text-xs border border-accent/30 rounded-full px-3 py-1 text-accent hover:bg-accent/10 transition-colors"
                        aria-label="Cambiar idioma / Switch language"
                    >
                        {lang === "es" ? "EN" : "ES"}
                    </button>
                </div>

                {/* Menú móvil */}
                <div className="md:hidden flex items-center gap-3" ref={menuRef}>
                    <button
                        onClick={toggleLang}
                        className="font-mono text-xs border border-accent/30 rounded-full px-2.5 py-1 text-accent hover:bg-accent/10 transition-colors"
                        aria-label="Cambiar idioma / Switch language"
                    >
                        {lang === "es" ? "EN" : "ES"}
                    </button>

                    <button
                        className="text-accent"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute right-6 top-full mt-2 w-52 bg-void/95 border border-accent/20 backdrop-blur-md rounded-lg shadow-lg py-2 flex flex-col gap-1 font-mono text-sm">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 hover:bg-accent/10 hover:text-accent rounded transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
