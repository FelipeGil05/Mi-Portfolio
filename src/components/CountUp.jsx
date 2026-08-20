// src/components/CountUp.jsx
import { useEffect, useRef, useState } from "react";
import { isPrerender } from "../utils/prerender";

export default function CountUp({ target, suffix = "", duration = 900, className = "" }) {
    const ref = useRef(null);
    const startedRef = useRef(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Igual que Reveal: durante el prerender de build se mantiene en 0
        // para que coincida con el primer render real del cliente.
        if (isPrerender()) return;

        const el = ref.current;
        if (!el) return;

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || startedRef.current) return;
                startedRef.current = true;
                observer.unobserve(el);

                const startTime = performance.now();
                const step = (now) => {
                    const progress = Math.min((now - startTime) / duration, 1);
                    setCount(Math.round(easeOutCubic(progress) * target));
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={ref} className={className}>
            {`${count}${suffix}`}
        </span>
    );
}
