import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { isPrerender } from "../utils/prerender";

const sectionIds = ["home", "about", "skills", "experience", "education", "projects"];

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const menuRef = useRef(null);
    const { lang, toggleLang } = useLanguage();
    const t = translations[lang].nav;

    const links = sectionIds.map((id) => ({ id, href: `#${id}`, label: t[id] }));

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        // Igual que el resto de los efectos de scroll del sitio: no corre
        // durante la captura de prerender, para que el HTML estático siempre
        // arranque con "home" activo (coincide con el primer render real).
        if (isPrerender()) return;

        const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
        const visible = {};

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    visible[entry.target.id] = entry.isIntersecting;
                });
                const current = sectionIds.filter((id) => visible[id]);
                if (current.length > 0) {
                    setActiveSection(current[current.length - 1]);
                }
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const linkClass = (id) =>
        `transition-colors ${activeSection === id
            ? "text-accent glow-text"
            : "opacity-80 hover:opacity-100 hover:text-accent"
        }`;

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
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex space-x-8 font-mono text-sm">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={linkClass(link.id)}
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
                <div className="lg:hidden flex items-center gap-3" ref={menuRef}>
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
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isOpen}
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
                                    className={`px-4 py-2 rounded ${linkClass(link.id)}`}
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
