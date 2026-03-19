import React, { useState, useEffect, useRef } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // referencia al dropdown

    // Cerrar dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed w-full z-50 glass-effect py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo clickeable */}
                <div
                    className="text-2xl font-bold gradient-text cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    FG
                </div>

                {/* Menú de escritorio */}
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="hover:text-[#10b981] transition-colors">
                        Inicio
                    </a>
                    <a href="#about" className="hover:text-[#10b981] transition-colors">
                        Sobre Mí
                    </a>
                    <a href="#skills" className="hover:text-[#10b981] transition-colors">
                        Habilidades
                    </a>
                    <a href="#projects" className="hover:text-[#10b981] transition-colors">
                        Proyectos
                    </a>
                </div>

                {/* Menú móvil */}
                <div className="md:hidden" ref={menuRef}>
                    <button
                        className="text-white"
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

                    {/* Dropdown */}
                    {isOpen && (
                        <div className="absolute right-6 mt-2 w-48 bg-black/35 backdrop-blur-md rounded-lg shadow-lg py-2 flex flex-col gap-2">
                            <a
                                href="#home"
                                className="px-4 py-2 hover:bg-[#10b981] hover:text-white rounded transition-colors"
                            >
                                Inicio
                            </a>
                            <a
                                href="#about"
                                className="px-4 py-2 hover:bg-[#10b981] hover:text-white rounded transition-colors"
                            >
                                Sobre Mí
                            </a>
                            <a
                                href="#skills"
                                className="px-4 py-2 hover:bg-[#10b981] hover:text-white rounded transition-colors"
                            >
                                Habilidades
                            </a>
                            <a
                                href="#projects"
                                className="px-4 py-2 hover:bg-[#10b981] hover:text-white rounded transition-colors"
                            >
                                Proyectos
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
