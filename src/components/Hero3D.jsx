// src/components/Hero3D.jsx
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function WireframeRig() {
    const group = useRef(null);
    const outer = useRef(null);
    const inner = useRef(null);
    const core = useRef(null);
    const pointer = useRef({ x: 0, y: 0 });

    useFrame((state, delta) => {
        pointer.current.x = state.pointer.x;
        pointer.current.y = state.pointer.y;

        if (outer.current) {
            outer.current.rotation.y += delta * 0.18;
            outer.current.rotation.x += delta * 0.06;
        }
        if (inner.current) {
            inner.current.rotation.y -= delta * 0.28;
            inner.current.rotation.z += delta * 0.12;
        }
        if (core.current) {
            core.current.rotation.x += delta * 0.35;
            core.current.rotation.y += delta * 0.2;
        }
        if (group.current) {
            group.current.rotation.y += (pointer.current.x * 0.4 - group.current.rotation.y) * 0.03;
            group.current.rotation.x += (-pointer.current.y * 0.3 - group.current.rotation.x) * 0.03;
        }
    });

    return (
        <group ref={group}>
            <mesh ref={outer}>
                <icosahedronGeometry args={[1.7, 1]} />
                <meshBasicMaterial color="#38e0ff" wireframe transparent opacity={0.55} />
            </mesh>
            <mesh ref={inner} rotation={[0.4, 0.2, 0]}>
                <torusGeometry args={[1.05, 0.02, 8, 64]} />
                <meshBasicMaterial color="#38e0ff" transparent opacity={0.8} />
            </mesh>
            <mesh ref={core}>
                <octahedronGeometry args={[0.55, 0]} />
                <meshBasicMaterial color="#7c5cff" wireframe transparent opacity={0.7} />
            </mesh>
        </group>
    );
}

export default function Hero3D() {
    return (
        <div className="pointer-events-none w-full h-full" aria-hidden="true">
            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
                        <WireframeRig />
                    </Float>
                </Suspense>
            </Canvas>
        </div>
    );
}
