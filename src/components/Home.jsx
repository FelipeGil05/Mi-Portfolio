import { useState, Suspense, lazy } from "react";
import CVFelipeGilES from "../assets/CVFelipeGil.pdf";
import CVFelipeGilEN from "../assets/CVFelipeGil_English.pdf";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Hero3D = lazy(() => import("./Hero3D"));

export default function Home() {
    const [copied, setCopied] = useState(false);
    const { lang } = useLanguage();
    const t = translations[lang].home;
    const cvFile = lang === "en" ? CVFelipeGilEN : CVFelipeGilES;
    const cvFileName = lang === "en" ? "CVFelipeGil_English.pdf" : "CVFelipeGil.pdf";

    const handleCopy = () => {
        navigator.clipboard.writeText("felipeegil05@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden content-section"
        >
            {/* Objeto 3D decorativo, solo en el hero */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[440px] lg:w-[560px] h-[440px] lg:h-[560px] translate-x-1/4">
                <Suspense fallback={null}>
                    <Hero3D />
                </Suspense>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl">
                    <p className="eyebrow mb-5">{t.eyebrow}</p>

                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 glow-text typewriter">
                        Felipe Gil
                    </h1>
                    <h2 className="text-xl md:text-2xl mb-2 font-display font-semibold">
                        {t.role}
                    </h2>
                    <p className="text-base md:text-lg mb-1 opacity-80">
                        {t.tagline}
                    </p>
                    <p className="font-mono text-xs md:text-sm mb-8 opacity-50 tracking-wide">
                        {t.location}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
                        {/* GitHub */}
                        <a
                            href="https://github.com/FelipeGil05"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/felipe-gil-604332337/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/5493416521573"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.766.462 3.492 1.34 5.012L2 22l5.146-1.35a9.96 9.96 0 004.894 1.25h.005c5.522 0 10-4.477 10-10s-4.478-10-10.005-10zm5.883 14.303c-.246.694-1.423 1.34-1.96 1.397-.501.052-1.13.073-1.822-.115-.42-.114-.958-.31-1.65-.607-2.902-1.253-4.797-4.166-4.943-4.36-.145-.194-1.184-1.577-1.184-3.008 0-1.431.75-2.135 1.016-2.428.266-.293.58-.366.774-.366.194 0 .388.002.557.01.179.008.418-.068.654.499.246.594.836 2.05.909 2.199.073.15.121.325.024.52-.097.194-.145.315-.29.485-.145.17-.305.379-.435.51-.146.145-.298.303-.128.596.17.293.756 1.248 1.624 2.023 1.116.994 2.057 1.302 2.35 1.448.293.145.464.121.634-.073.17-.194.727-.848.921-1.14.194-.293.388-.244.653-.146.266.097 1.688.796 1.978.94.29.146.484.219.556.34.073.121.073.696-.173 1.39z" />
                            </svg>
                            <span>WhatsApp</span>
                        </a>

                        {/* Email */}
                        <div className="relative">
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors cursor-pointer"
                            >
                                <svg
                                    className="w-5 h-5 shrink-0"
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
                                <span>felipeegil05@gmail.com</span>
                            </button>

                            <span
                                className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 font-mono text-xs bg-void border border-accent/40 text-accent rounded transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                {t.copied}
                            </span>
                        </div>

                        {/* CV */}
                        <a
                            href={cvFile}
                            download={cvFileName}
                            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-9 2h18v2H3v-2z" />
                            </svg>
                            <span>{t.cv}</span>
                        </a>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="glow-btn px-7 py-3 rounded-full font-semibold"
                        >
                            {t.viewProjects}
                        </a>
                        <a
                            href="#experience"
                            className="outline-btn px-7 py-3 rounded-full font-semibold"
                        >
                            {t.viewExperience}
                        </a>
                    </div>
                </div>
            </div>

            {/* Flecha abajo */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-accent"
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
