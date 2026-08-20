// src/components/Reveal.jsx
import { useEffect, useRef, useState } from "react";
import { isPrerender } from "../utils/prerender";

export default function Reveal({ children, className = "", delay = 0, ...rest }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // El build-time prerender siempre debe capturar el estado "aún no
        // revelado" (coincide con el primer render del cliente real).
        if (isPrerender()) return;

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? "reveal-visible" : ""} delay-${delay} ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
}
