// src/components/Skills.jsx
export default function Skills() {
return (
<section id="skills" className="py-20 content-section">
    <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
        Habilidades y Tecnologías
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Frontend */}
        <div className="skill-card glass-effect p-6 rounded-xl text-center">
        <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Frontend</h3>
        <p className="text-sm opacity-90">React, JavaScript, HTML, CSS, Bootstrap</p>
        </div>

        {/* Backend */}
        <div className="skill-card glass-effect p-6 rounded-xl text-center">
        <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
            />
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Backend</h3>
        <p className="text-sm opacity-90">.NET, Python, Node.js, APIs REST</p>
        </div>

        {/* Database */}
        <div className="skill-card glass-effect p-6 rounded-xl text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
            />
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Base de Datos</h3>
        <p className="text-sm opacity-90">MySQL</p>
        </div>

        {/* Metodologías (comentado en el HTML original) */}
        {/*
        <div className="skill-card glass-effect p-6 rounded-xl text-center">
        <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Metodologías</h3>
        <p className="text-sm opacity-90">Scrum, Kanban</p>
        </div>
        */}

        {/* Herramientas */}
        <div className="skill-card glass-effect p-6 rounded-xl text-center">
        <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Herramientas</h3>
        <p className="text-sm opacity-90">GitHub, Visual Studio Code, Visual Studio</p>
        </div>
    </div>
    </div>
</section>
);
}
