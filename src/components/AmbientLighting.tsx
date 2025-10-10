"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from './NavigationContext';

/**
 * Dynamic ambient lighting component that responds to current page
 * Creates immersive atmosphere with animated gradient mesh
 */
const AmbientLighting: React.FC = () => {
  const { currentPage } = useNavigation();

  // Page-specific color schemes
  const pageColors = {
    home: {
      primary: 'rgba(99, 102, 241, 0.12)',    // Indigo
      secondary: 'rgba(139, 92, 246, 0.10)',  // Purple
      tertiary: 'rgba(236, 72, 153, 0.08)'    // Pink
    },
    experience: {
      primary: 'rgba(59, 130, 246, 0.12)',    // Blue
      secondary: 'rgba(99, 102, 241, 0.10)',  // Indigo
      tertiary: 'rgba(14, 165, 233, 0.08)'    // Sky
    },
    education: {
      primary: 'rgba(34, 197, 94, 0.12)',     // Green
      secondary: 'rgba(16, 185, 129, 0.10)',  // Emerald
      tertiary: 'rgba(52, 211, 153, 0.08)'    // Teal
    },
    skills: {
      primary: 'rgba(168, 85, 247, 0.12)',    // Purple
      secondary: 'rgba(139, 92, 246, 0.10)',  // Violet
      tertiary: 'rgba(192, 132, 252, 0.08)'   // Light Purple
    },
    projects: {
      primary: 'rgba(249, 115, 22, 0.12)',    // Orange
      secondary: 'rgba(245, 158, 11, 0.10)',  // Amber
      tertiary: 'rgba(251, 146, 60, 0.08)'    // Light Orange
    },
    videos: {
      primary: 'rgba(6, 182, 212, 0.12)',     // Cyan
      secondary: 'rgba(14, 165, 233, 0.10)',  // Sky
      tertiary: 'rgba(34, 211, 238, 0.08)'    // Light Cyan
    },
    contact: {
      primary: 'rgba(236, 72, 153, 0.12)',    // Pink
      secondary: 'rgba(219, 39, 119, 0.10)',  // Rose
      tertiary: 'rgba(244, 114, 182, 0.08)'   // Light Pink
    }
  };

  const colors = pageColors[currentPage] || pageColors.home;

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
