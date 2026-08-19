// src/components/CursorTrail.jsx
import { useEffect, useRef } from "react";

const CHAIN_LENGTH = 10;
const EASE = 0.35;
const IDLE_MS = 300;
const FADE_EASE = 0.12;

export default function CursorTrail() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!isFinePointer) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const mouse = { x: width / 2, y: height / 2 };
        const chain = Array.from({ length: CHAIN_LENGTH }, () => ({ x: mouse.x, y: mouse.y }));
        let active = false;
        let needsSnap = true;
        let lastMoveTime = 0;
        let fade = 0;
        let raf;

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const snapChainTo = (x, y) => {
            for (const p of chain) {
                p.x = x;
                p.y = y;
            }
        };

        const onMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            lastMoveTime = performance.now();

            if (needsSnap) {
                snapChainTo(mouse.x, mouse.y);
                needsSnap = false;
            }
            active = true;
        };

        const onLeave = () => {
            active = false;
            needsSnap = true;
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const idle = performance.now() - lastMoveTime > IDLE_MS;
            const targetFade = active && !idle ? 1 : 0;
            fade += (targetFade - fade) * FADE_EASE;

            if (fade > 0.01) {
                let targetX = mouse.x;
                let targetY = mouse.y;

                for (let i = 0; i < chain.length; i++) {
                    const p = chain[i];
                    p.x += (targetX - p.x) * EASE;
                    p.y += (targetY - p.y) * EASE;
                    targetX = p.x;
                    targetY = p.y;

                    const t = 1 - i / chain.length;
                    const radius = t * 6;
                    const opacity = t * 0.55 * fade;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(56, 224, 255, ${opacity})`;
                    ctx.shadowColor = "rgba(56, 224, 255, 0.8)";
                    ctx.shadowBlur = 8;
                    ctx.fill();
                }
            }

            raf = requestAnimationFrame(render);
        };

        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMove);
        document.documentElement.addEventListener("mouseleave", onLeave);
        raf = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMove);
            document.documentElement.removeEventListener("mouseleave", onLeave);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1] hidden md:block"
            aria-hidden="true"
        />
    );
}
