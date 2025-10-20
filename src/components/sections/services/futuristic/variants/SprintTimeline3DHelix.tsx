'use client';

import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Environment, OrbitControls } from '@react-three/drei';
import { Section, Container, Typography } from '@/components/ui';
import * as THREE from 'three';

interface SprintCardProps {
  title: string;
  description: string;
  color: string;
  position: [number, number, number];
  isActive: boolean;
  rotationOffset: number;
}

function SprintCard({
  title,
  description,
  color,
  position,
  isActive,
  rotationOffset,
}: SprintCardProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.position.x = position[0] + Math.sin(time + rotationOffset) * 2;
      groupRef.current.position.z = position[2] + Math.cos(time + rotationOffset) * 2;
      groupRef.current.rotation.y = time + rotationOffset;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float floatIntensity={isActive ? 1 : 0.2} speed={2}>
        <mesh>
          <boxGeometry args={[2, 1, 0.1]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.2}
            metalness={0.8}
            opacity={0.9}
            transparent
          />
        </mesh>
        <Text3D
          font="/fonts/inter_regular.json"
          size={0.15}
          height={0.02}
          position={[-0.8, 0.2, 0.1]}
        >
          {title}
          <meshPhysicalMaterial color="white" roughness={0.2} metalness={0.8} />
        </Text3D>
      </Float>
    </group>
  );
}

function HelixParticles({ count = 100 }) {
  const positions = React.useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const x = Math.sin(t * Math.PI * 8) * 3;
      const y = (t - 0.5) * 10;
      const z = Math.cos(t * Math.PI * 8) * 3;
      pos.push([x, y, z]);
    }
    return pos;
  }, [count]);

  return (
    <group>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export default function SprintTimeline3DHelix() {
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
          <Canvas
            className="absolute inset-0"
            camera={{ position: [0, 0, 10], fov: 75 }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <HelixParticles />
              {sprintSteps.map((step, index) => (
                <SprintCard
                  key={index}
                  title={step.title}
                  description={step.description}
                  color={step.color}
                  position={[0, (index - sprintSteps.length / 2) * 2, 0]}
                  isActive={index === activeIndex}
                  rotationOffset={(index / sprintSteps.length) * Math.PI * 2}
                />
              ))}
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
              <Environment preset="sunset" />
            </Suspense>
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
