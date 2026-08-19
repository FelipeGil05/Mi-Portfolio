// src/components/Projects.jsx
import { useState } from "react";
import { createPortal } from "react-dom";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import gestionclub from "../assets/img/gestionclub.png";
import distribuidora from "../assets/img/distribuidora.png";

const extrasByIndex = [
    { img: gestionclub, github: "https://github.com/Juarba/Front-end-GestionClub" },
    { img: distribuidora, github: "https://github.com/Emanuel-Camacho/TPI-distribuidores-mayoristas" },
];

export default function Projects() {
    const { lang } = useLanguage();
    const t = translations[lang].projects;
    const projects = t.items.map((item, i) => ({ ...item, ...extrasByIndex[i] }));

    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({
        img: "",
        title: "",
        tech: "",
        desc: "",
        github: "#"
    });

    const openModal = (project) => {
        setModalData(project);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <section id="projects" className="py-20 content-section relative">
                <div className="container mx-auto px-6">
                    <Reveal>
                    <p className="eyebrow justify-center mb-4 flex">{t.eyebrow}</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
                        {t.title}
                    </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <Reveal
                                key={idx}
                                delay={idx * 100}
                                className="project-card cyber-panel rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => openModal(project)}
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="project-image w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-6 pb-0">
                                    <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                                    <p className="text-sm opacity-70">{project.desc}</p>
                                    <br />
                                    <p className="font-mono text-xs text-accent opacity-90 mb-4">{project.tech}</p>
                                </div>
                                <div className="p-6 pt-0">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="opacity-70 hover:opacity-100 hover:text-accent transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal: portal directo a <body> para que quede fuera del árbol de la página */}
            {isOpen && createPortal(
                <div
                    id="projectModal"
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] px-4 sm:px-6"
                    style={{ transform: "translateZ(0)" }}
                    onClick={closeModal}
                >
                    <div
                        className="border border-accent/25 rounded-xl overflow-hidden w-full max-w-4xl max-h-[85vh] overflow-y-auto relative"
                        style={{ backgroundColor: "#050607", transform: "translateZ(0)" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            id="modalClose"
                            className="absolute top-3 right-3 text-white hover:text-accent text-2xl font-bold z-10"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img src={modalData.img} className="w-full max-h-[45vh] object-cover" />
                        <div className="p-6" style={{ backgroundColor: "#050607" }}>
                            <h3 className="text-xl font-display font-semibold mb-2">{modalData.title}</h3>
                            <p className="text-sm opacity-70 mb-2">{t.techLabel}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {modalData.tech.split(',').map((tech, idx) => (
                                    <span key={idx} className="inline-block font-mono border border-accent/30 text-accent text-xs px-2 py-1 rounded-full">
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm opacity-80 mb-6">{modalData.desc}</p>
                            <a
                                href={modalData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outline-btn inline-flex items-center px-4 py-2 rounded-full"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
