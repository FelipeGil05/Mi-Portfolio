// src/components/Education.jsx
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import certDesarrolloAplicaciones from "../assets/certificados/cert-desarrollo-aplicaciones.png";
import certAiAutomation from "../assets/certificados/cert-ai-automation.pdf";
import certAiAutomationAvanzado from "../assets/certificados/cert-ai-automation-avanzado.pdf";

const certByIndex = [null, certDesarrolloAplicaciones, certAiAutomation, certAiAutomationAvanzado];

export default function Education() {
    const { lang } = useLanguage();
    const t = translations[lang].education;

    return (
        <section id="education" className="py-20 content-section relative">
            <div className="container mx-auto px-6">
                <Reveal>
                <p className="eyebrow justify-center mb-4 flex">{t.eyebrow}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
                    {t.title}
                </h2>
                </Reveal>

                <div className="max-w-3xl mx-auto relative">
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-accent/20 hidden sm:block" />

                    <div className="flex flex-col gap-6">
                        {t.items.map((ed, idx) => (
                            <div key={idx} className="relative sm:pl-8">
                                <span className="hidden sm:block absolute left-0 top-2 w-4 h-4 rounded-full bg-accent shadow-[0_0_12px_rgba(56,224,255,0.7)] border-2 border-void" />

                                <Reveal delay={idx * 80} className="cyber-panel p-6 rounded-xl">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                                        <h3 className="text-lg font-display font-semibold">{ed.title}</h3>
                                        <span className="font-mono text-xs text-accent">
                                            {ed.period}
                                        </span>
                                    </div>
                                    <p className="text-sm opacity-60 mb-3">{ed.institution}</p>
                                    <ul className="list-disc list-inside space-y-1 text-sm opacity-80">
                                        {ed.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                    {certByIndex[idx] && (
                                        <a
                                            href={certByIndex[idx]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 mt-4 font-mono text-xs text-accent hover:opacity-80 transition-opacity"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {t.certLabel}
                                        </a>
                                    )}
                                </Reveal>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
