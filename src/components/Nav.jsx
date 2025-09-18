// src/components/Nav.jsx
import React from "react";

const Nav = () => {
return (
<nav className="fixed w-full z-50 glass-effect py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold gradient-text">
        <a href="#home" className="hover:text-[#10b981] transition-colors">
        FG
        </a>
    </div>
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
        {/* <a href="#contact" className="hover:text-[#10b981] transition-colors">Contacto</a> */}
    </div>
    <div className="md:hidden">
        <button className="text-white">
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
    </div>
    </div>
</nav>
);
};

export default Nav;
