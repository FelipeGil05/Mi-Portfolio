// src/components/Projects.jsx
import { useState } from "react";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({
        img: "",
        title: "",
        tech: "",
        desc: "",
        github: "#"
    });

    const projects = [
        {
            img: "src/assets/img/gestionclub-web.jpg",
            title: "Sistema Gestión de Clubes",
            desc: "Sistema para administrar socios, actividades internas y aspectos financieros de un club.",
            tech: "React, .NET, MySQL",
            github: "https://github.com/Juarba/Front-end-GestionClub"
        },
        {
            img: "src/assets/img/distribuidora-web.jpg",
            title: "E-commerce Distribuidora-Mayorista",
            desc: "Plataforma de comercio electrónico con carrito, pagos y panel de administración de un supermercado Mayorista.",
            tech: "React, .NET, MySQL",
            github: "https://github.com/Emanuel-Camacho/TPI-distribuidores-mayoristas"
        }
    ];

    const openModal = (project) => {
        setModalData(project);
        setIsOpen(true);
        document.body.style.overflow = "hidden"; // bloquea scroll
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto"; // desbloquea scroll
    };

    return (
        <>
            <section id="projects" className="py-20 content-section relative">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
                        Mis Proyectos
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="project-card glass-effect rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => openModal(project)}
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="project-image w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-sm project-desc">{project.desc}</p>
                                    <br />
                                    <p className="text-sm opacity-90 mb-4">{project.tech}</p>
                                </div>
                                <div className="p-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-white hover:text-[#10b981] transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isOpen && (
                <div
                    id="projectModal"
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white/10 glass-effect rounded-xl overflow-hidden max-w-4xl w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            id="modalClose"
                            className="absolute top-3 right-3 text-black hover:text-gray-900 text-2xl font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img src={modalData.img} className="w-full h-auto object-cover" />
                        <div className="p-6 glass-effect">
                            <h3 className="text-xl font-semibold mb-2 text-white">{modalData.title}</h3>
                            <p>Tecnologías utilizadas:</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {modalData.tech.split(',').map((t, idx) => (
                                    <span key={idx} className="inline-block bg-gray-800 text-white text-sm px-2 py-1 rounded">
                                        {t.trim()}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-white mb-4">{modalData.desc}</p>
                            <a
                                href={modalData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}