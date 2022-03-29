import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const Mesh = () => {
    const loader = new THREE.TextureLoader();

    const getRandomParticelPos = (particleCount:number) => {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          arr[i] = (Math.random() - 0.5) * 10;
        }
        return arr;
      };

    const geometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(getRandomParticelPos(1500), 3)
        );
        return geometry;  
    }, []);

    const { set } = useThree((state) => state)

    useEffect(() => {
      set({ size: { width: window.innerWidth, height: window.innerHeight}})
    }, [])

    const meshRef = useRef<any | undefined>();

    useFrame(() => {
        if (meshRef) {
            meshRef.current.rotation.y += 0.0005;
            meshRef.current.rotation.z += 0.0000; // 0.0005
        }
    });

    return (
        <points 
            ref={meshRef}
            geometry={geometry}
            material={new THREE.PointsMaterial({
                size: 0.05,
                map: loader.load(
                    "./svg/logo.svg"
                ),
                transparent: true
                })}>
        </points>
    )
}

const Stars = () => {
    return (
        <Canvas
            className="-z-[1] top-0 left-0 bg-black"
            style={{ 
                position: "fixed",
                width: "100vw",
                height: "100vh",
                background: "#000",
            }}
            gl={{ 
               // alpha: true,
                antialias: true,
                autoClear: true,
            }}
            onCreated={(ctx) => { 
                ctx.gl.physicallyCorrectLights = true;
                ctx.gl.toneMapping = THREE.ACESFilmicToneMapping
            }}
            dpr={Math.min(window.devicePixelRatio || 2)}
            camera={{ position: [0, 0, 0], fov: 75, zoom: 1 }}
        >
            <Suspense fallback={<></>}>
                <Mesh />
            </Suspense>
        </Canvas>
    )
}

export default Stars; 