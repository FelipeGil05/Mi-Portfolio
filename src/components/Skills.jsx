// src/components/Skills.jsx
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const icons = [
    <path
        key="frontend"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
    />,
    <path
        key="backend"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
    />,
    <path
        key="db"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
    />,
    <path
        key="cloud"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M3 15a4 4 0 004 4h10a4 4 0 000-8 5 5 0 00-9.6-1.8A4 4 0 003 15z"
    />,
    <path
        key="ai"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M13 10V3L4 14h7v7l9-11h-7z"
    />,
    <path
        key="tools"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />,
];

export default function Skills() {
    const { lang } = useLanguage();
    const t = translations[lang].skills;

    return (
        <section id="skills" className="py-20 content-section">
            <div className="container mx-auto px-6">
                <Reveal>
                <p className="eyebrow justify-center mb-4 flex">{t.eyebrow}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
                    {t.title}
                </h2>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.categories.map((cat, idx) => (
                        <Reveal
                            key={cat.title}
                            delay={idx * 80}
                            className="cyber-panel tilt-card p-6 rounded-xl text-center"
                        >
                            <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center border border-accent/40 bg-accent/5">
                                <svg
                                    className="w-7 h-7 text-accent"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {icons[idx]}
                                </svg>
                            </div>
                            <h3 className="text-lg font-display font-semibold mb-2">{cat.title}</h3>
                            <p className="text-sm opacity-70">{cat.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
