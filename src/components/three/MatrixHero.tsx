"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";

// Character sets for the matrix effect
const MATRIX_CHARS = [
  // Binary
  "0",
  "1",
  // Code symbols
  "{",
  "}",
  "<",
  ">",
  "/",
  "\\",
  "(",
  ")",
  "[",
  "]",
  // Programming keywords (shortened)
  "fn",
  "if",
  "js",
  "ts",
  "go",
  "py",
  "rs",
  "cpp",
  // Modern code snippets
  "=>",
  "&&",
  "||",
  "!=",
  "==",
  "++",
  "--",
  "+=",
  // Letters and numbers
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  // Special characters
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "-",
  "=",
  "?",
  "!",
];

// Column class for managing falling characters
class MatrixColumn {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number[];
  lastUpdate: number;
  flickerTimer: number;

  constructor(x: number, canvasHeight: number) {
    this.x = x;
    this.y = Math.random() * -canvasHeight; // Start above canvas
    this.speed = Math.random() * 3 + 1; // Random speed between 1-4
    this.chars = [];
    this.opacity = [];
    this.lastUpdate = 0;
    this.flickerTimer = 0;

    // Initialize column with random characters
    const columnHeight = Math.floor(Math.random() * 20) + 10;
    for (let i = 0; i < columnHeight; i++) {
      this.chars.push(
        MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
      );
      this.opacity.push(Math.max(0, 1 - i * 0.1)); // Fade towards tail
    }
  }

  update(deltaTime: number, canvasHeight: number, fontSize: number) {
    this.y += this.speed * deltaTime * 60; // 60fps normalized

    // Reset column when it goes off screen (infinite loop)
    if (this.y > canvasHeight + this.chars.length * fontSize) {
      this.y = Math.random() * -canvasHeight;
      this.speed = Math.random() * 3 + 1;
    }

    // Flicker characters occasionally
    this.flickerTimer += deltaTime;
    if (this.flickerTimer > 0.1) {
      // Every 100ms
      if (Math.random() < 0.1) {
        // 10% chance
        const randomIndex = Math.floor(Math.random() * this.chars.length);
        this.chars[randomIndex] =
          MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
      }
      this.flickerTimer = 0;
    }
  }

  draw(
    ctx: CanvasRenderingContext2D,
    fontSize: number,
    mouseX: number,
    mouseY: number
  ) {
    ctx.font = `${fontSize}px 'Courier New', monospace`;

    for (let i = 0; i < this.chars.length; i++) {
      const charY = this.y + i * fontSize;

      // Skip if character is off screen
      if (charY < -fontSize || charY > ctx.canvas.height + fontSize) continue;

      // Calculate distance from mouse for interaction effect
      const distanceFromMouse = Math.sqrt(
        Math.pow(this.x - mouseX, 2) + Math.pow(charY - mouseY, 2)
      );
      const mouseInfluence = Math.max(0, 1 - distanceFromMouse / 150);

      // Base opacity with mouse interaction
      let opacity = this.opacity[i] + mouseInfluence * 0.3;
      opacity = Math.min(1, opacity);

      // Glow effect - stronger for head character and near mouse
      const isHead = i === 0;
      const glowIntensity = (isHead ? 0.8 : 0.3) + mouseInfluence * 0.5;

      // Draw glow effect
      if (glowIntensity > 0.1) {
        ctx.shadowColor = "#FFD600";
        ctx.shadowBlur = 10 + glowIntensity * 20;
        ctx.fillStyle = `rgba(255, 214, 0, ${opacity * glowIntensity})`;
      } else {
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255, 214, 0, ${opacity * 0.7})`;
      }

      ctx.fillText(this.chars[i], this.x, charY);

      // Reset shadow for next character
      ctx.shadowBlur = 0;
    }
  }
}

interface MatrixHeroProps {
  className?: string;
}

export default function MatrixHero({ className = "" }: MatrixHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const columnsRef = useRef<MatrixColumn[]>([]);
  const lastTimeRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isReduced, setIsReduced] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Check if component is visible in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const isInViewport = rect.bottom > 0 && rect.top < window.innerHeight;
      setIsVisible(isInViewport);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  // Initialize canvas and columns
  const initializeMatrix = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Initialize columns
    const fontSize = 16;
    const columnWidth = fontSize * 0.8;
    const numColumns = Math.floor(
      canvas.width / window.devicePixelRatio / columnWidth
    );

    columnsRef.current = [];
    for (let i = 0; i < numColumns; i++) {
      columnsRef.current.push(
        new MatrixColumn(
          i * columnWidth,
          canvas.height / window.devicePixelRatio
        )
      );
    }

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Animation loop
  const animate = useCallback(
    (currentTime: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Initialize lastTime on first frame
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      // Calculate delta time
      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      // Clear canvas with dark background
      ctx.fillStyle = "#0B0B0F"; // bg-background from tailwind config
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw columns if visible
      if (isVisible) {
        const fontSize = 16;
        columnsRef.current.forEach((column) => {
          column.update(
            deltaTime,
            canvas.height / window.devicePixelRatio,
            fontSize
          );
          column.draw(ctx, fontSize, mouseRef.current.x, mouseRef.current.y);
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [isVisible]
  );

  // Start animation
  useEffect(() => {
    if (isReduced) return; // Skip animation if reduced motion is preferred

    const cleanup = initializeMatrix();
    animationRef.current = requestAnimationFrame(animate);

    // Add mouse listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      cleanup?.();
    };
  }, [initializeMatrix, animate, handleMouseMove, isReduced]);

  // Fallback for reduced motion or mobile
  if (isReduced) {
    return (
      <motion.div
        className={`w-full h-full bg-background ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-accent-yellow text-6xl font-mono opacity-20">
            {"{ }"}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`w-full h-full relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "transparent" }}
      />

      {/* Mobile fallback - static pattern */}
      <div className="md:hidden absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-accent-yellow font-mono text-sm animate-pulse"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {MATRIX_CHARS[i % MATRIX_CHARS.length]}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
