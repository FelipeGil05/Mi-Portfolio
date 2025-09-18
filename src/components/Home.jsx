import { useState } from "react";

export default function Home() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("felipeegil05@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden content-section"
        >
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 typewriter">
            Felipe Gil
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 opacity-90">
            Técnico Universitario en Programación
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Desarrollador Full-Stack
            </p>

            {/* Links */}
            <div className="flex justify-center space-x-6 mt-4">
            {/* GitHub */}
            <a
                href="https://github.com/FelipeGil05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#10b981] transition-colors"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <p>GitHub</p>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/felipe-gil-604332337/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#10b981] transition-colors"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <p>LinkedIn</p>
            </a>

            {/* Email */}
            <div className="relative inline-block">
                <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-white hover:text-[#10b981] transition-colors cursor-pointer"
                >
                <svg
                    className="w-6 h-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                    <path d="M3 7l8.5 5.5a3 3 0 0 0 3 0L21 7"></path>
                </svg>
                <p>felipeegil05@gmail.com</p>
                </button>

                {/* Tooltip */}
                <span
                className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-gray-800 rounded-lg transition-opacity duration-300 ${
                    copied ? "opacity-100" : "opacity-0"
                }`}
                >
                Copiado!
                </span>
            </div>
            </div>

            {/* Botones de acción */}
            <br />
            <div className="flex justify-center space-x-6">
            <a
                href="#projects"
                className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
                Ver Proyectos
            </a>
            </div>
        </div>

        {/* Flecha abajo */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
            </svg>
        </div>
        </section>
    );
}
