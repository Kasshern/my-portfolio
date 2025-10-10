"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const { scrollY } = useScroll();

  // Different parallax speeds for different layers
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity1 = useTransform(scrollY, [0, 300], [0.3, 0.1]);
  const opacity2 = useTransform(scrollY, [0, 300], [0.2, 0.05]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Parallax Layer 1 - Slowest */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: y1, opacity: opacity1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Parallax Layer 2 - Medium speed */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: y2, opacity: opacity2 }}
      >
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
      </motion.div>

      {/* Parallax Layer 3 - Fastest */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: y3, opacity: opacity2 }}
      >
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
