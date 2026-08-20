import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import flagAr from "../assets/flags/ar.svg";
import flagGb from "../assets/flags/gb.svg";
import flagBr from "../assets/flags/br.svg";

export default function About() {
    const { lang } = useLanguage();
    const t = translations[lang].about;

    return (
        <section
            id="about"
            className="min-h-screen relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-12 py-20"
        >
            <div className="text-center w-full max-w-6xl">
                <Reveal>
                <p className="eyebrow justify-center mb-4">{t.eyebrow}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
                    {t.title}
                </h2>
                </Reveal>

                <Reveal delay={120} className="cyber-panel p-8 md:p-10 rounded-2xl w-full md:w-3/4 lg:w-2/3 mx-auto text-center">
                    <p className="text-lg mb-6 opacity-85 leading-relaxed">
                        {t.p1}
                    </p>
                    <p className="text-lg mb-8 opacity-85 leading-relaxed">
                        {t.p2}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <span className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs border border-accent/30 rounded-full opacity-85">
                            <img src={flagAr} alt="" className="w-4 h-3 rounded-[2px] object-cover" />
                            {t.langNative}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs border border-accent/30 rounded-full opacity-85">
                            <img src={flagGb} alt="" className="w-4 h-3 rounded-[2px] object-cover" />
                            {t.langBasic}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs border border-accent/30 rounded-full opacity-85">
                            <img src={flagBr} alt="" className="w-4 h-3 rounded-[2px] object-cover" />
                            {t.langInter}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="text-center p-5 cyber-panel rounded-xl">
                            <CountUp target={2} suffix="+" className="text-3xl font-display font-bold text-accent glow-text" />
                            <div className="text-sm opacity-70 mt-1">{t.statYears}</div>
                        </div>
                        <div className="text-center p-5 cyber-panel rounded-xl">
                            <CountUp target={4} suffix="+" className="text-3xl font-display font-bold text-accent glow-text" />
                            <div className="text-sm opacity-70 mt-1">{t.statProjects}</div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
