import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Form } from '../Form/Form';
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  0% { bottom: 100%; opacity: 0; }
  50% { opacity: 0.5; }
  100% { bottom: 0%; opacity: 0; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const SceneContainer = styled.div`
  height: 1100px;
  width: 100%;
  position: relative;
  background: transparent;
  margin-top: 4rem;
  margin-bottom: 5rem;
  overflow: visible;

  canvas {
     cursor: grab;
     &:active {
       cursor: grabbing;
     }
  }

  .hologram-card {
    pointer-events: auto;
    background: rgba(0, 255, 123, 0.05);
    backdrop-filter: blur(15px);
    padding: 3rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 255, 123, 0.3);
    box-shadow: 0 0 50px rgba(0, 255, 123, 0.1), inset 0 0 20px rgba(0, 255, 123, 0.05);
    position: relative;
    overflow: visible;
    animation: ${float} 4s ease-in-out infinite;
    
    @media (max-width: 740px) {
      width: 90vw;
      padding: 2rem 1rem;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--green);
      box-shadow: 0 0 15px var(--green);
      animation: ${scanline} 2s linear infinite;
    }
  }

  .contact-link-3d {
    pointer-events: auto;
    background: rgba(15, 15, 15, 0.8);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    border-radius: 50px;
    border: 2px solid var(--green);
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: max-content;
    white-space: nowrap;
    box-shadow: 0 0 20px rgba(0, 255, 123, 0.2);

    &:hover {
      transform: scale(1.1);
      background: var(--green);
      color: var(--black);
      box-shadow: 0 0 40px var(--green);
      img { filter: invert(1); }
    }

    img {
      width: 2rem;
      transition: all 0.4s;
    }

    @media (max-width: 740px) {
      padding: 0.8rem 1.2rem;
      font-size: 1.2rem;
      img { width: 1.6rem; }
    }
  }
`;

function HolographicNode() {
    const outerRingRef = useRef<THREE.Mesh>(null!);
    const innerRingRef = useRef<THREE.Mesh>(null!);
    const coreRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (outerRingRef.current) {
            outerRingRef.current.rotation.z = time * 0.5;
            outerRingRef.current.rotation.x = time * 0.2;
        }
        if (innerRingRef.current) {
            innerRingRef.current.rotation.z = -time * 0.8;
            innerRingRef.current.rotation.y = time * 0.3;
        }
        if (coreRef.current) {
            const scale = 1 + Math.sin(time * 3) * 0.1;
            coreRef.current.scale.set(scale, scale, scale);
            coreRef.current.rotation.y = time * 1.5;
        }
    });

    return (
        <group position={[0, 0, 0]}>
            <mesh ref={outerRingRef}>
                <torusGeometry args={[4.5, 0.02, 16, 100]} />
                <meshBasicMaterial color="#00ff7b" transparent opacity={0.4} />
            </mesh>

            <mesh ref={innerRingRef}>
                <torusGeometry args={[3.8, 0.05, 16, 100]} />
                <meshBasicMaterial color="#00ff7b" transparent opacity={0.2} wireframe />
            </mesh>

            <mesh ref={coreRef}>
                <octahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial
                    color="#00ff7b"
                    wireframe
                    emissive="#00ff7b"
                    emissiveIntensity={1}
                />
            </mesh>

            <pointLight intensity={2} color="#00ff7b" distance={10} />
        </group>
    );
}

function OrbitingContact({ isMobile }: { isMobile: boolean }) {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.3; // Rotate the entire group
        }
    });

    const radius = isMobile ? 10 : 18;

    return (
        <group ref={groupRef}>
            {/* Email HUD */}
            <group position={[-radius, 0, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <Html transform center>
                        <div className="contact-link-3d">
                            <a href="mailto:sahn0075@gmail.com"><img src={emailIcon} alt="Email" /></a>
                            <a href="mailto:niranjansah250@gmail.com">niranjansah250@gmail.com</a>
                        </div>
                    </Html>
                </Float>
            </group>

            {/* Phone HUD */}
            <group position={[radius, 0, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <Html transform center>
                        <div className="contact-link-3d">
                            <a href="tel:+9779826753490"><img src={phoneIcon} alt="Phone No" /></a>
                            <a href="tel:+9779826753490">(+977) 9826753490</a>
                        </div>
                    </Html>
                </Float>
            </group>
        </group>
    );
}

export function Contact3D() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;

    return (
        <SceneContainer id="contact">
            <Canvas camera={{ position: [0, 0, (isMobile ? 35 : 25)], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ff7b" />

                    <HolographicNode />

                    <Stars
                        radius={100}
                        depth={50}
                        count={7000}
                        factor={6}
                        saturation={1}
                        fade
                    />

                    {/* Orbiting HUDs */}
                    <OrbitingContact isMobile={isMobile} />

                    {/* Central Holographic Form */}
                    <Html position={[0, 0, 0]} center className="hologram-card">
                        <div style={{ pointerEvents: 'auto', width: (isMobile ? '90vw' : '550px') }}>
                            <Form />
                        </div>
                    </Html>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 1.5}
                    />
                </Suspense>
            </Canvas>
        </SceneContainer>
    );
}
