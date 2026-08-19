// src/components/Experience.jsx
import { useState } from "react";
import Reveal from "./Reveal";
import ImageLightbox from "./ImageLightbox";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import chatbot1 from "../assets/img/chatbot-1-menu.png";
import chatbot2 from "../assets/img/chatbot-2-tessel.png";
import chatbot3 from "../assets/img/chatbot-3-datos.png";
import chatbot4 from "../assets/img/chatbot-4-confirmacion.png";
import chatbot5 from "../assets/img/chatbot-5-precio.png";

const imagesByIndex = [
    [chatbot1, chatbot2, chatbot3, chatbot4, chatbot5],
    [],
];

export default function Experience() {
    const { lang } = useLanguage();
    const t = translations[lang].experience;
    const experiences = t.items.map((item, i) => ({ ...item, images: imagesByIndex[i] }));

    const [lightbox, setLightbox] = useState({ images: [], index: null });
    const [previewIndex, setPreviewIndex] = useState({});

    const openLightbox = (images, index) => setLightbox({ images, index });
    const closeLightbox = () => setLightbox({ images: [], index: null });
    const navigateLightbox = (index) => setLightbox((prev) => ({ ...prev, index }));

    const getPreviewIndex = (expIdx) => previewIndex[expIdx] || 0;
    const stepPreview = (e, expIdx, total, dir) => {
        e.stopPropagation();
        setPreviewIndex((prev) => {
            const current = prev[expIdx] || 0;
            return { ...prev, [expIdx]: (current + dir + total) % total };
        });
    };

    return (
        <section id="experience" className="py-20 content-section relative">
            <div className="container mx-auto px-6">
                <Reveal>
                <p className="eyebrow justify-center mb-4 flex">{t.eyebrow}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
                    {t.title}
                </h2>
                </Reveal>

                <div className="max-w-4xl mx-auto flex flex-col gap-8">
                    {experiences.map((exp, idx) => (
                        <Reveal
                            key={idx}
                            delay={idx * 100}
                            className="project-card cyber-panel rounded-xl overflow-hidden flex flex-col md:flex-row"
                        >
                            {exp.images.length > 0 ? (
                                <div className="relative w-full md:w-56 shrink-0 h-56 md:h-auto bg-accent/5 group">
                                    <button
                                        onClick={() => openLightbox(exp.images, getPreviewIndex(idx))}
                                        className="w-full h-full"
                                    >
                                        <img
                                            src={exp.images[getPreviewIndex(idx)]}
                                            alt={`${exp.title} - captura ${getPreviewIndex(idx) + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </button>

                                    {exp.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => stepPreview(e, idx, exp.images.length, -1)}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-void/70 hover:bg-void text-accent rounded-full p-1.5 border border-accent/30"
                                                aria-label="Anterior"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={(e) => stepPreview(e, idx, exp.images.length, 1)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-void/70 hover:bg-void text-accent rounded-full p-1.5 border border-accent/30"
                                                aria-label="Siguiente"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] text-accent bg-void/70 border border-accent/30 rounded-full px-2 py-0.5">
                                                {getPreviewIndex(idx) + 1} / {exp.images.length}
                                            </span>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div className="w-full md:w-56 shrink-0 h-56 md:h-auto bg-accent/5 flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-accent opacity-50"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                            )}

                            <div className="p-6 flex-1">
                                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                                    <h3 className="text-xl font-display font-semibold">{exp.title}</h3>
                                    <span className="font-mono text-xs text-accent">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-sm opacity-60 mb-4">{exp.company}</p>

                                <ul className="list-disc list-inside space-y-1 text-sm opacity-80 mb-4">
                                    {exp.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="inline-block font-mono border border-accent/30 text-accent text-xs px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <ImageLightbox
                images={lightbox.images}
                index={lightbox.index}
                onClose={closeLightbox}
                onNavigate={navigateLightbox}
            />
        </section>
    );
}
