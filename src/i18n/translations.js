// src/i18n/translations.js
export const translations = {
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            skills: "Habilidades",
            experience: "Experiencia",
            education: "Formación",
            projects: "Proyectos",
        },
        home: {
            eyebrow: "Disponible para trabajar",
            role: "Software Developer Junior",
            tagline: "Desarrollador Full-Stack & Mobile · Automatización con IA",
            location: "Funes, Santa Fe, Argentina",
            copied: "Copiado!",
            cv: "CV",
            viewProjects: "Ver Proyectos",
            viewExperience: "Ver Experiencia",
        },
        about: {
            eyebrow: "Sobre mí",
            title: "Quién soy",
            p1: "Soy Felipe Gil, tengo 21 años y soy desarrollador full-stack y mobile de Funes, Santa Fe, Argentina. Egresado de la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional (UTN), con experiencia freelance desarrollando soluciones reales para clientes, desde sitios corporativos hasta chatbots de atención automática.",
            p2: "Trabajo con React, React Native, .NET, C# y Python, y en el último tiempo me metí de lleno en la automatización de procesos con IA: n8n, integración de LLMs y RAG. Me interesa combinar desarrollo de software con inteligencia artificial para construir soluciones que resuelvan problemas reales.",
            langNative: "🇦🇷 Español · Nativo",
            langBasic: "🇬🇧 Inglés · Básico",
            langInter: "🇧🇷 Portugués · Intermedio",
            statYears: "Años de Experiencia",
            statProjects: "Proyectos Completados",
        },
        skills: {
            eyebrow: "Stack",
            title: "Habilidades y Tecnologías",
            categories: [
                { title: "Frontend", desc: "React, React Native, JavaScript, HTML, CSS, Bootstrap" },
                { title: "Backend", desc: ".NET, C#, Entity Framework, Python, Node.js" },
                { title: "Bases de Datos", desc: "MySQL, Firebase" },
                { title: "Cloud & Servicios", desc: "Twilio, Redis Upstash, Fly.io, Meta Business API, Vercel" },
                { title: "Automatización e IA", desc: "n8n, LLMs, RAG, AI Workflows, Prompt Engineering" },
                { title: "Herramientas", desc: "Git, GitHub, Visual Studio Code, Visual Studio" },
            ],
        },
        experience: {
            eyebrow: "Freelance",
            title: "Experiencia",
            items: [
                {
                    title: "Chatbot de WhatsApp con Respuesta Automática",
                    company: "TecPool · Proyecto Freelance",
                    period: "2026",
                    bullets: [
                        "Chatbot de atención automática integrado con WhatsApp Business API para gestión de presupuestos, consultas, reclamos y reservas de clientes.",
                        "Lógica de conversación en JavaScript conectada a servicios cloud: Twilio (mensajería), Redis Upstash (estado/sesiones) y Fly.io (deployment).",
                        "Integración completa con Meta Business para la verificación y habilitación del canal de WhatsApp.",
                    ],
                    tech: ["JavaScript", "Twilio", "Redis Upstash", "Fly.io", "Meta Business API"],
                },
                {
                    title: "Sitio Web Institucional",
                    company: "TecPool · Proyecto Freelance",
                    period: "2025 – 2026",
                    bullets: [
                        "Sitio web multi-página para presentar el catálogo de servicios de TecPool: revestimientos TESSEL, construcción de piscinas, deck y pérgolas WPC, cobertores y climatización.",
                        "Navegación entre secciones con React Router y componentes reutilizables para mantener consistencia visual en todo el sitio.",
                        "Pensado como vidriera de la empresa: los clientes conocen los servicios antes de derivarse a la atención por WhatsApp.",
                    ],
                    tech: ["React.js", "React Router", "CSS", "UX/UI"],
                },
            ],
        },
        education: {
            eyebrow: "Aprendizaje continuo",
            title: "Formación",
            items: [
                {
                    title: "Tecnicatura Universitaria en Programación",
                    institution: "Universidad Tecnológica Nacional (UTN)",
                    period: "Jun 2023 – Jul 2025",
                    bullets: [
                        "Formación en desarrollo web y de software con React.js, .NET, C#, Entity Framework, JavaScript, Bootstrap, MySQL y Python.",
                        "Control de versiones con Git/GitHub y fundamentos de programación orientada a objetos y bases de datos relacionales.",
                    ],
                },
                {
                    title: "Curso de Desarrollo de Aplicaciones",
                    institution: "Coderhouse",
                    period: "Ene 2026 – May 2026",
                    bullets: [
                        "Desarrollo de aplicaciones móviles con React Native y Firebase.",
                        "Implementación de autenticación y bases de datos en tiempo real.",
                    ],
                },
                {
                    title: "Curso de AI Automation",
                    institution: "Coderhouse",
                    period: "Mar 2026 – Abr 2026",
                    bullets: [
                        "Automatización de flujos de trabajo utilizando n8n.",
                        "Integración de herramientas de inteligencia artificial, APIs y modelos LLM.",
                    ],
                },
                {
                    title: "Curso de AI Automation Avanzado",
                    institution: "Coderhouse",
                    period: "May 2026 – Jun 2026",
                    bullets: [
                        "Diseño de flujos de trabajo inteligentes con LLMs, RAG y procesamiento de documentos.",
                        "Implementación de soluciones con Human-in-the-Loop (HITL) y capacidades multimodales.",
                    ],
                },
            ],
        },
        projects: {
            eyebrow: "Portfolio",
            title: "Mis Proyectos",
            techLabel: "Tecnologías utilizadas:",
            items: [
                {
                    title: "Sistema Gestión de Clubes",
                    desc: "Sistema para administrar socios, actividades internas y aspectos financieros de un club.",
                    tech: "React, .NET, MySQL",
                },
                {
                    title: "E-commerce Distribuidora-Mayorista",
                    desc: "Plataforma de comercio electrónico con carrito, pagos y panel de administración de un supermercado Mayorista.",
                    tech: "React, .NET, MySQL",
                },
            ],
        },
    },

    en: {
        nav: {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            experience: "Experience",
            education: "Education",
            projects: "Projects",
        },
        home: {
            eyebrow: "Available for work",
            role: "Junior Software Developer",
            tagline: "Full-Stack & Mobile Developer · AI Automation",
            location: "Funes, Santa Fe, Argentina",
            copied: "Copied!",
            cv: "Resume",
            viewProjects: "View Projects",
            viewExperience: "View Experience",
        },
        about: {
            eyebrow: "About me",
            title: "Who I am",
            p1: "I'm Felipe Gil, 21 years old, a full-stack and mobile developer from Funes, Santa Fe, Argentina. Graduate of the University Technician degree in Programming at the National Technological University (UTN), with freelance experience building real solutions for clients, from corporate websites to automated customer-service chatbots.",
            p2: "I work with React, React Native, .NET, C# and Python, and lately I've gotten deep into AI process automation: n8n, LLM integration and RAG. I'm interested in combining software development with artificial intelligence to build solutions that solve real problems.",
            langNative: "🇦🇷 Spanish · Native",
            langBasic: "🇬🇧 English · Basic",
            langInter: "🇧🇷 Portuguese · Intermediate",
            statYears: "Years of Experience",
            statProjects: "Completed Projects",
        },
        skills: {
            eyebrow: "Stack",
            title: "Skills & Technologies",
            categories: [
                { title: "Frontend", desc: "React, React Native, JavaScript, HTML, CSS, Bootstrap" },
                { title: "Backend", desc: ".NET, C#, Entity Framework, Python, Node.js" },
                { title: "Databases", desc: "MySQL, Firebase" },
                { title: "Cloud & Services", desc: "Twilio, Redis Upstash, Fly.io, Meta Business API, Vercel" },
                { title: "Automation & AI", desc: "n8n, LLMs, RAG, AI Workflows, Prompt Engineering" },
                { title: "Tools", desc: "Git, GitHub, Visual Studio Code, Visual Studio" },
            ],
        },
        experience: {
            eyebrow: "Freelance",
            title: "Experience",
            items: [
                {
                    title: "WhatsApp Chatbot with Automated Replies",
                    company: "TecPool · Freelance Project",
                    period: "2026",
                    bullets: [
                        "Automated customer-service chatbot integrated with the WhatsApp Business API for quotes, inquiries, complaints, and customer bookings.",
                        "Conversation logic built in JavaScript, connected to cloud services: Twilio (messaging), Redis Upstash (state/sessions) and Fly.io (deployment).",
                        "Full integration with Meta Business for verification and setup of the WhatsApp channel.",
                    ],
                    tech: ["JavaScript", "Twilio", "Redis Upstash", "Fly.io", "Meta Business API"],
                },
                {
                    title: "Corporate Website",
                    company: "TecPool · Freelance Project",
                    period: "2025 – 2026",
                    bullets: [
                        "Multi-page website presenting TecPool's service catalog: TESSEL venetian coatings, pool construction, WPC decks and pergolas, covers and climate control.",
                        "Navigation between sections built with React Router and reusable components to keep visual consistency across the site.",
                        "Designed as the company's storefront: customers learn about the services before being routed to WhatsApp support.",
                    ],
                    tech: ["React.js", "React Router", "CSS", "UX/UI"],
                },
            ],
        },
        education: {
            eyebrow: "Continuous learning",
            title: "Education",
            items: [
                {
                    title: "University Technician Degree in Programming",
                    institution: "National Technological University (UTN)",
                    period: "Jun 2023 – Jul 2025",
                    bullets: [
                        "Trained in web and software development with React.js, .NET, C#, Entity Framework, JavaScript, Bootstrap, MySQL and Python.",
                        "Version control with Git/GitHub and fundamentals of object-oriented programming and relational databases.",
                    ],
                },
                {
                    title: "App Development Course",
                    institution: "Coderhouse",
                    period: "Jan 2026 – May 2026",
                    bullets: [
                        "Mobile app development with React Native and Firebase.",
                        "Implementation of authentication and real-time databases.",
                    ],
                },
                {
                    title: "AI Automation Course",
                    institution: "Coderhouse",
                    period: "Mar 2026 – Apr 2026",
                    bullets: [
                        "Workflow automation using n8n.",
                        "Integration of AI tools, APIs, and LLM models.",
                    ],
                },
                {
                    title: "Advanced AI Automation Course",
                    institution: "Coderhouse",
                    period: "May 2026 – Jun 2026",
                    bullets: [
                        "Design of intelligent workflows with LLMs, RAG, and document processing.",
                        "Implementation of robust solutions with Human-in-the-Loop (HITL) and multimodal capabilities.",
                    ],
                },
            ],
        },
        projects: {
            eyebrow: "Portfolio",
            title: "My Projects",
            techLabel: "Technologies used:",
            items: [
                {
                    title: "Club Management System",
                    desc: "System for managing members, internal activities, and the financial side of a sports club.",
                    tech: "React, .NET, MySQL",
                },
                {
                    title: "Wholesale Distributor E-commerce",
                    desc: "E-commerce platform with cart, payments, and an admin panel for a wholesale supermarket.",
                    tech: "React, .NET, MySQL",
                },
            ],
        },
    },
};
