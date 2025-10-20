import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, useTexture, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Section, Container, Typography } from '@/components/ui';
import * as THREE from 'three';

interface SprintCardProps {
  title: string;
  description: string;
  color: string;
  position: [number, number, number];
  isActive: boolean;
}

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/gradient_bg.webp');

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.1;
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[15, 5, 32, 32]} />
      <MeshDistortMaterial distort={0.5} speed={2} map={texture} transparent opacity={0.6} />
    </mesh>
  );
}

function SprintCard({ title, description, color, position, isActive }: SprintCardProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current && isActive) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float floatIntensity={0.2} speed={2} rotationIntensity={0.5}>
        <mesh>
          <boxGeometry args={[2, 1, 0.1]} />
          <meshPhongMaterial color={color} opacity={0.7} transparent shininess={100} />
        </mesh>
        {/* <Text3D> */}
        {/* </Text3D> */}

        <meshStandardMaterial color="white" metalness={0.5} roughness={0.1} />
        {title}
      </Float>
    </group>
  );
}

export default function SprintTimeline3DWave() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const sprintSteps = [
    {
      title: 'Sprint Planning',
      description: 'Setting goals and planning tasks for the next two weeks',
      color: '#F0B90B',
      icon: '📋',
      days: 'Day 1-3',
    },
    {
      title: 'Design Phase',
      description: 'Creating wireframes and visual designs',
      color: '#2563EB',
      icon: '🎨',
      days: 'Day 3-5',
    },
    {
      title: 'Development',
      description: 'Building and implementing features',
      color: '#8B5CF6',
      icon: '⚡',
      days: 'Day 5-8',
    },
    {
      title: 'Testing',
      description: 'Quality assurance and bug fixing',
      color: '#F0B90B',
      icon: '🔍',
      days: 'Day 8-10',
    },
    {
      title: 'Release',
      description: 'Deploying to production and gathering feedback',
      color: '#2563EB',
      icon: '🚀',
      days: 'Day 10-14',
    },
  ];

  React.useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % sprintSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, sprintSteps.length]);

  return (
    <Section variant="default" padding="xl" className="bg-[#02021e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
          <React.Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <WaveMesh />
            <OrbitControls enableZoom={false} enablePan={false} />
          </React.Suspense>
        </Canvas>
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <Typography variant="overline" className="text-[#F0B90B] mb-4 tracking-widest">
            SPRINT SYSTEM
          </Typography>
          <Typography variant="h2" className="mb-6 text-white">
            Two Week Sprint Cycle
          </Typography>
          <Typography variant="body1" className="text-gray-400 max-w-2xl mx-auto">
            Our agile development process with daily scrum meetings ensures efficient and
            transparent project delivery
          </Typography>
        </div>

        <div className="relative min-h-[600px]">
          <Canvas dpr={[1, 2]} className="absolute inset-0">
            <React.Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} />
              {sprintSteps.map((step, index) => (
                <SprintCard
                  key={index}
                  title={step.title}
                  description={step.description}
                  color={step.color}
                  position={[(index - sprintSteps.length / 2) * 2.5, 0, 0]}
                  isActive={index === activeIndex}
                />
              ))}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
              />
            </React.Suspense>
          </Canvas>

          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex justify-center gap-4">
              {sprintSteps.map((step, index) => (
                <motion.button
                  key={index}
                  className="w-3 h-3 rounded-full bg-white/20"
                  animate={{
                    scale: index === activeIndex ? 1.2 : 1,
                    backgroundColor: index === activeIndex ? step.color : 'rgba(255,255,255,0.2)',
                  }}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
