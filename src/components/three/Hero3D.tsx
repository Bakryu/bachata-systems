'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { Mesh } from 'three';
import { motion } from 'framer-motion';

// Animated 3D Objects
function FloatingGeometry() {
  const sphereRef = useRef<Mesh>(null);
  const boxRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time) * 0.5;
      sphereRef.current.rotation.x = time * 0.3;
      sphereRef.current.rotation.y = time * 0.2;
    }
    
    if (boxRef.current) {
      boxRef.current.position.y = Math.cos(time * 1.2) * 0.3;
      boxRef.current.rotation.x = time * 0.4;
      boxRef.current.rotation.z = time * 0.1;
    }
    
    if (torusRef.current) {
      torusRef.current.position.y = Math.sin(time * 0.8) * 0.4;
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <>
      {/* Main Sphere */}
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Floating Box */}
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[3, 1, -2]}>
        <meshStandardMaterial
          color="#eab308"
          metalness={0.5}
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </Box>

      {/* Floating Torus */}
      <Torus ref={torusRef} args={[0.6, 0.2, 16, 32]} position={[-2.5, -1, 1]}>
        <meshStandardMaterial
          color="#1d4ed8"
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </Torus>

      {/* Additional small spheres */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.1, 16, 16]}
          position={[
            Math.cos(i * 0.8) * 4,
            Math.sin(i * 0.6) * 2,
            Math.sin(i * 0.4) * 3,
          ]}
        >
          <meshStandardMaterial
            color={i % 2 === 0 ? "#60a5fa" : "#fbbf24"}
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}
    </>
  );
}

// 3D Scene Component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      
      {/* 3D Objects */}
      <FloatingGeometry />
      
      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// Loading fallback
function CanvasLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Main Hero3D Component
interface Hero3DProps {
  className?: string;
}

export default function Hero3D({ className = '' }: Hero3DProps) {
  return (
    <motion.div
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* Mobile fallback - static SVG */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="opacity-20 animate-pulse"
        >
          <circle
            cx="150"
            cy="150"
            r="80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            className="animate-spin"
            style={{ transformOrigin: '150px 150px', animationDuration: '10s' }}
          />
          <circle
            cx="150"
            cy="150"
            r="50"
            fill="#3b82f6"
            opacity="0.3"
          />
          <rect
            x="200"
            y="100"
            width="30"
            height="30"
            fill="#eab308"
            opacity="0.5"
            className="animate-bounce"
          />
          <circle
            cx="100"
            cy="200"
            r="15"
            fill="#1d4ed8"
            opacity="0.4"
            className="animate-pulse"
          />
        </svg>
      </div>
    </motion.div>
  );
}
