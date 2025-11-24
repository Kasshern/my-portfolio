"use client";

import React from 'react';

/**
 * Static ambient lighting component
 * Creates immersive atmosphere without expensive animations
 */
const AmbientLighting: React.FC = () => {
  const colors = {
    primary: 'rgba(99, 102, 241, 0.12)',    // Indigo
    secondary: 'rgba(139, 92, 246, 0.10)',  // Purple
    tertiary: 'rgba(236, 72, 153, 0.08)'    // Pink
  };

  return (
    <>
      {/* Static gradient mesh - no animation to prevent flickering */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(circle at 20% 30%, ${colors.primary} 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${colors.secondary} 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, ${colors.tertiary} 0%, transparent 50%)
          `,
          opacity: 1,
        }}
      />

      {/* Static gradient orbs - no animation to prevent expensive repaints */}
      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 0,
          width: '600px',
          height: '600px',
          left: '10%',
          top: '20%',
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          opacity: 0.8,
        }}
      />

      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 0,
          width: '500px',
          height: '500px',
          right: '15%',
          bottom: '15%',
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
          filter: 'blur(70px)',
          opacity: 0.8,
        }}
      />

      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 0,
          width: '400px',
          height: '400px',
          left: '60%',
          top: '10%',
          background: `radial-gradient(circle, ${colors.tertiary} 0%, transparent 70%)`,
          filter: 'blur(60px)',
          opacity: 0.8,
        }}
      />
    </>
  );
};

export default AmbientLighting;
