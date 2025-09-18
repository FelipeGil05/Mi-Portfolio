export default function About() {
return (
<section
    id="about"
className="min-h-screen relative z-10 flex items-center justify-center">
    <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
        Sobre Mí
    </h2>

    <div className="skill-card glass-effect p-6 rounded-lg shadow-xl w-full md:w-1/2 mx-auto text-center">
        <div className="fade-in">
        <p className="text-lg mb-6 opacity-90">
            Soy Felipe Gil, tengo 20 años y soy un apasionado desarrollador
            full-stack de Argentina. Egresado de la Tecnicatura Universitaria
            en Programación en la Universidad Tecnológica Nacional (UTN),
            disfruto trabajar en proyectos desafiantes donde la creatividad y
            la innovación son fundamentales.
        </p>
        <p className="text-lg mb-8 opacity-90">
            Cuento con experiencia en tecnologías como React, .NET, Python,
            SQL, CSS, HTML y JavaScript. Mi objetivo es seguir creciendo
            profesionalmente, aprendiendo nuevas herramientas y metodologías,
            y aportar valor en cada desafío que se me presente.
        </p>
        <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 glass-effect rounded-lg">
            <div className="text-2xl font-bold text-[#10b981]">1+</div>
            <div className="text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center p-4 glass-effect rounded-lg">
            <div className="text-2xl font-bold text-[#10b981]">2+</div>
            <div className="text-sm">Proyectos Completados</div>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
);
}
