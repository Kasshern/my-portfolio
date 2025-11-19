"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Dynamic ambient lighting component that responds to current page
 * Creates immersive atmosphere with animated gradient mesh
 */
const AmbientLighting: React.FC = () => {
  const colors = {
    primary: 'rgba(99, 102, 241, 0.12)',    // Indigo
    secondary: 'rgba(139, 92, 246, 0.10)',  // Purple
    tertiary: 'rgba(236, 72, 153, 0.08)'    // Pink
  };

  return (
    <>
      {/* Main gradient mesh */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(circle at 20% 30%, ${colors.primary} 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${colors.secondary} 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, ${colors.tertiary} 0%, transparent 50%)
          `
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          zIndex: 0,
          width: '600px',
          height: '600px',
          left: '10%',
          top: '20%',
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="fixed pointer-events-none"
        style={{
          zIndex: 0,
          width: '500px',
          height: '500px',
          right: '15%',
          bottom: '15%',
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="fixed pointer-events-none"
        style={{
          zIndex: 0,
          width: '400px',
          height: '400px',
          left: '60%',
          top: '10%',
          background: `radial-gradient(circle, ${colors.tertiary} 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );
};

export default AmbientLighting;
