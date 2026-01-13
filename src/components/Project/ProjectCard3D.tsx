import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import externalLink from "../../assets/external-link.svg";

const scanline = keyframes`
  0% { bottom: 100%; opacity: 0; }
  50% { opacity: 0.3; }
  100% { bottom: 0%; opacity: 0; }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  transition: all 0.5s ease;
  
  .hologram-panel {
    width: 380px;
    height: 400px;
    background: rgba(0, 255, 123, 0.03);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(0, 255, 123, 0.2);
    border-radius: 20px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    color: white;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(0, 255, 123, 0.05);
    user-select: none;
    pointer-events: auto;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(rgba(0,255,123,0.05) 50%, transparent 50%);
      background-size: 100% 4px;
      pointer-events: none;
      opacity: 0.2;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: rgba(0, 255, 123, 0.5);
      box-shadow: 0 0 10px var(--green);
      animation: ${scanline} 4s linear infinite;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      
      svg { stroke: var(--green); }
      
      img {
        width: 3rem;
        filter: drop-shadow(0 0 5px var(--green));
        transition: transform 0.3s;
        &:hover { transform: scale(1.2) rotate(10deg); }
      }
    }

    .body {
      flex: 1;
      h3 {
        color: var(--green);
        font-size: 2.2rem;
        margin-bottom: 1.2rem;
        text-shadow: 0 0 10px rgba(0, 255, 123, 0.3);
      }
      p {
        font-size: 1.4rem;
        line-height: 1.6;
        opacity: 0.8;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    footer {
      margin-top: 1.5rem;
      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        list-style: none;
        li {
          font-size: 1.1rem;
          color: var(--green);
          background: rgba(0, 255, 123, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          border: 1px solid rgba(0, 255, 123, 0.2);
        }
      }
    }
  }

  canvas {
    border-radius: 20px;
  }
`;

function FloatingGear({ position, size }: { position: [number, number, number], size: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.5;
        meshRef.current.rotation.y = time * 0.2;
        meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.2;
    });

    return (
        <mesh ref={meshRef} position={position}>
            <octahedronGeometry args={[size, 0]} />
            <meshStandardMaterial color="#00ff7b" wireframe emissive="#00ff7b" emissiveIntensity={0.5} />
        </mesh>
    );
}

interface ProjectData {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

export function ProjectCard3D({ data }: { data: ProjectData }) {
    const [hovered, setHovered] = useState(false);

    return (
        <CardContainer
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.4} />
                    <pointLight position={[5, 5, 5]} intensity={1} color="#00ff7b" />

                    <Float
                        speed={hovered ? 4 : 2}
                        rotationIntensity={hovered ? 1.5 : 0.5}
                        floatIntensity={hovered ? 2 : 1}
                    >
                        <group>
                            <Html transform center scale={0.5}>
                                <div className="hologram-panel" style={{
                                    transform: hovered ? 'scale(1.05)' : 'scale(1)',
                                    boxShadow: hovered ? '0 0 50px rgba(0, 255, 123, 0.2)' : '0 0 30px rgba(0,0,0,0.5)'
                                }}>
                                    <header>
                                        <svg width="40" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                        <div className="project-links">
                                            <a href={data.link} target="_blank" rel="noreferrer">
                                                <img src={externalLink} alt="Visit site" />
                                            </a>
                                        </div>
                                    </header>
                                    <div className="body">
                                        <h3>{data.title}</h3>
                                        <p>{data.description}</p>
                                    </div>
                                    <footer>
                                        <ul className="tech-list">
                                            {data.tech.map((t, i) => <li key={i}>{t}</li>)}
                                        </ul>
                                    </footer>
                                </div>
                            </Html>

                            {/* Decorative 3D Elements */}
                            <FloatingGear position={[-4, 3, -1]} size={0.4} />
                            <FloatingGear position={[4, -3, -1]} size={0.3} />
                        </group>
                    </Float>

                </Suspense>
            </Canvas>
        </CardContainer>
    );
}
