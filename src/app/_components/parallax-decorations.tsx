"use client";

import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

interface ParallaxDecorationsProps {
  variant?: "default" | "skills" | "work" | "projects" | "contact";
}

export function ParallaxDecorations({
  variant = "default",
}: ParallaxDecorationsProps) {
  const getDecorations = () => {
    switch (variant) {
      case "skills":
        return (
          <>
            <Parallax
              translateY={[-30, 30]}
              className="absolute -top-20 left-1/4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="w-32 h-32 bg-primary/10 rounded-lg blur-2xl"
              />
            </Parallax>
            {Array.from({ length: 8 }).map((_, i) => (
              <Parallax
                key={i}
                translateX={[`${-30 + i * 10}`, `${30 - i * 10}`]}
                className={`absolute ${i % 2 === 0 ? "top-1/4" : "bottom-1/4"}`}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className="w-3 h-3 bg-primary/20 rotate-45"
                />
              </Parallax>
            ))}
          </>
        );

      case "work":
        return (
          <>
            <Parallax
              translateY={[-20, 20]}
              className="absolute top-1/3 right-1/4"
            >
              <motion.div
                animate={{
                  pathLength: [0, 1],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="w-40 h-40 border-2 border-secondary/20 rounded-full"
              />
            </Parallax>
            {Array.from({ length: 4 }).map((_, i) => (
              <Parallax
                key={i}
                translateY={[`${-40 + i * 20}`, `${40 - i * 20}`]}
                className="absolute"
                style={{ left: `${25 + i * 20}%`, top: `${20 + i * 15}%` }}
              >
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  className="w-1 h-20 bg-gradient-to-b from-secondary/30 to-transparent"
                />
              </Parallax>
            ))}
          </>
        );

      case "projects":
        return (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <Parallax
                key={i}
                translateX={[-50 + i * 30, 50 - i * 30]}
                className="absolute"
                style={{ top: `${30 + i * 20}%` }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 20 - i * 5, repeat: Infinity }}
                  className={`w-60 h-60 border-2 ${
                    i % 2 === 0 ? "border-primary/10" : "border-secondary/10"
                  } rounded-lg rotate-45 blur-xl`}
                />
              </Parallax>
            ))}
          </>
        );

      case "contact":
        return (
          <>
            <Parallax translateY={[-15, 15]} className="absolute inset-0">
              <div className="grid grid-cols-8 grid-rows-8 gap-8 opacity-20">
                {Array.from({ length: 64 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      delay: (i % 8) * 0.2,
                      repeat: Infinity,
                    }}
                    className="w-2 h-2 bg-primary rounded-full"
                  />
                ))}
              </div>
            </Parallax>
          </>
        );

      default:
        return (
          <>
            {/* Original default decorations */}
            <Parallax
              translateY={[-20, 20]}
              className="absolute -top-20 -left-20"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="w-40 h-40 bg-primary/10 rounded-full blur-3xl"
              />
            </Parallax>

            <Parallax
              translateY={[20, -20]}
              className="absolute -bottom-20 -right-20"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  easings: ["easeInOut"],
                }}
                className="w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
              />
            </Parallax>

            {/* Formas geométricas */}
            <Parallax
              rotateZ={[-45, 45]}
              className="absolute top-1/4 right-1/4"
            >
              <div className="w-20 h-20 border-2 border-primary/20 rotate-45" />
            </Parallax>

            <Parallax
              rotateZ={[45, -45]}
              className="absolute bottom-1/4 left-1/4"
            >
              <div className="w-20 h-20 border-2 border-secondary/20 rotate-12" />
            </Parallax>

            {/* Líneas flotantes */}
            <Parallax
              translateX={[-50, 50]}
              className="absolute top-1/3 left-0 right-0"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </Parallax>

            <Parallax
              translateX={[50, -50]}
              className="absolute bottom-1/3 left-0 right-0"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
            </Parallax>

            {/* Puntos flotantes */}
            {Array.from({ length: 5 }).map((_, i) => (
              <Parallax
                key={i}
                translateY={[`${-50 + i * 20}`, `${50 - i * 20}`]}
                className={`absolute ${
                  i % 2 === 0 ? "left-1/4" : "right-1/4"
                } top-${(i + 1) * 20}`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 rounded-full bg-primary/30"
                />
              </Parallax>
            ))}
          </>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {getDecorations()}
    </div>
  );
}
