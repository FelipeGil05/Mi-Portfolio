// src/components/ImageLightbox.jsx
import { createPortal } from "react-dom";

export default function ImageLightbox({ images, index, onClose, onNavigate }) {
    if (index === null) return null;

    const goPrev = (e) => {
        e.stopPropagation();
        onNavigate((index - 1 + images.length) % images.length);
    };

    const goNext = (e) => {
        e.stopPropagation();
        onNavigate((index + 1) % images.length);
    };

    return createPortal(
        <div
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999] px-4 sm:px-6"
            style={{ transform: "translateZ(0)" }}
            onClick={onClose}
        >
            <button
                className="absolute top-4 right-5 text-white hover:text-accent text-3xl font-bold z-10"
                onClick={onClose}
                aria-label="Cerrar"
            >
                &times;
            </button>

            {images.length > 1 && (
                <button
                    onClick={goPrev}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-accent p-2"
                    aria-label="Anterior"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            <div
                className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center gap-3"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={images[index]}
                    alt=""
                    className="max-h-[80vh] max-w-full rounded-xl border border-accent/25 object-contain"
                    style={{ backgroundColor: "#050607" }}
                />
                {images.length > 1 && (
                    <span className="font-mono text-xs text-accent">
                        {index + 1} / {images.length}
                    </span>
                )}
            </div>

            {images.length > 1 && (
                <button
                    onClick={goNext}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-accent p-2"
                    aria-label="Siguiente"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>,
        document.body
    );
}
