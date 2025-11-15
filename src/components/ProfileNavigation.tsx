"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useNavigation } from './NavigationContext';

interface NavLink {
  href: string;
  label: string;
  angle: number; // Angle in degrees for positioning around the circle
  flameColor: string; // Color for the flame effect
}

type PageType = 'home' | 'experience' | 'education' | 'skills' | 'projects' | 'videos' | 'contact';

interface ProfileNavigationProps {
  onNavigate?: (page: PageType) => void;
  onHoverChange?: (isHovered: boolean) => void;
}

// Orbital Glow Ring effect component
const OrbitalGlowEffect: React.FC<{
  isVisible: boolean;
  color: string;
  x: number;
  y: number;
  isClient: boolean;
}> = ({ isVisible, color, x, y, isClient }) => {
  const glowColors = {
    red: '#EF4444',
    blue: '#6366F1',
    green: '#10B981',
    purple: '#8B5CF6',
    orange: '#F59E0B',
    cyan: '#06B6D4',
    pink: '#EC4899',
  };

  const glowColor = glowColors[color as keyof typeof glowColors] || glowColors.blue;

  return (
    <motion.div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-0"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      initial={isClient ? {
        opacity: 0,
        scale: 0
      } : { opacity: 0, scale: 0 }}
      animate={isClient && isVisible ? {
        opacity: 1,
        scale: 1
      } : isClient ? {
        opacity: 0,
        scale: 0
      } : { opacity: 0, scale: 0 }}
      transition={isClient ? {
        duration: 0.3,
        ease: "easeOut"
      } : {}}
    >
      {/* Outer rotating ring */}
      <motion.div
        className="relative w-20 h-20 md:w-24 md:h-24"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at center, transparent 60%, ${glowColor}40 70%, transparent 80%)`,
            filter: 'blur(2px)'
          }}
        />
      </motion.div>

      {/* Inner pulsing glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: glowColor,
            boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}80`
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const navLinks: NavLink[] = [
  { href: '/experience', label: 'Experience', angle: 0, flameColor: 'blue' },
  { href: '/education', label: 'Education', angle: 60, flameColor: 'green' },
  { href: '/skills', label: 'Skills', angle: 120, flameColor: 'purple' },
  { href: '/projects', label: 'Projects', angle: 180, flameColor: 'orange' },
  { href: '/videos', label: 'Videos', angle: 240, flameColor: 'cyan' },
  { href: '/contact', label: 'Contact', angle: 300, flameColor: 'pink' },
];

// Pre-calculate positions to avoid hydration mismatches
const calculatePositions = (isMobile: boolean) => {
  const radius = isMobile ? 140 : 200; // Balanced radius for mobile - not too close, not too far
  return navLinks.map((link) => {
    const angleInRadians = (link.angle * Math.PI) / 180;
    const x = Math.round(Math.cos(angleInRadians) * radius);
    const y = Math.round(Math.sin(angleInRadians) * radius);
    return { ...link, x, y };
  });
};

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({ onNavigate, onHoverChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const positionedLinks = calculatePositions(isMobile);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const { navigateToPage } = useNavigation();

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Notify parent component of hover state changes
  useEffect(() => {
    if (onHoverChange) {
      onHoverChange(isHovered);
    }
  }, [isHovered, onHoverChange]);



  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Hide links immediately when hovering ends
    setIsVisible(false);
  };

  const handleLinkClick = (href: string) => {
    // Extract page name from href (remove leading slash)
    const pageName = (href === '/' ? 'home' : href.slice(1)) as PageType;

    // Use the callback if provided, otherwise use the context
    if (onNavigate) {
      onNavigate(pageName);
    } else {
      navigateToPage(pageName);
    }
  };

  // Remove handleLinkHover and handleLinkLeave


  return (
    <nav
      ref={profileRef}
      className="relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Profile Picture Container */}
      <motion.div
        className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-visible flex items-center justify-center cursor-pointer"
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        animate={isVisible ? {
          scale: 1,
          opacity: 1
        } : {
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut'
        }}
      >
        {/* Profile Picture with Particle Effect */}
        <motion.div
          className="w-full h-full rounded-full relative"
          style={{
            overflow: 'visible'
          }}
        >
          {/* Profile Image - clipped to circle */}
          <div
            className="w-full h-full rounded-full overflow-hidden absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(15, 15, 15, 0.8), rgba(15, 15, 15, 0.95))'
            }}
          >
            <Image
              src="/ai_keith.jpg"
              alt="Keith Salzman"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Particle Dispersion Effect Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ pointerEvents: 'none', overflow: 'visible' }}
          >
            {/* Generate larger, more visible floating particles */}
            {isClient && Array.from({ length: 150 }).map((_, i) => {
              const angle = (i / 150) * Math.PI * 2;
              // Start from edge of portrait (radius ~96px for w-48, 120px for w-60, 160px for w-80)
              // Using base of 96px which works for the default size
              const baseRadius = 96; // Half of w-48 (192px)
              const radiusMultiplier = 1 + (i % 8) * 0.4;
              const startRadius = baseRadius;
              const endRadius = baseRadius + (120 * radiusMultiplier);

              const startX = Math.cos(angle) * startRadius;
              const startY = Math.sin(angle) * startRadius;
              const midX = Math.cos(angle) * (startRadius + (endRadius - startRadius) * 0.6);
              const midY = Math.sin(angle) * (startRadius + (endRadius - startRadius) * 0.6);
              const endX = Math.cos(angle) * endRadius;
              const endY = Math.sin(angle) * endRadius;

              const size = 4 + (i % 6) * 1.5;
              const delay = (i % 20) * 0.12;
              const color = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981'][i % 4];

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    background: color,
                    boxShadow: `0 0 ${size * 4}px ${color}, 0 0 ${size * 2}px ${color}`,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    x: [startX, midX, endX, midX, startX],
                    y: [startY, midY, endY, midY, startY],
                    opacity: [0, 0.6, 1, 0.6, 0],
                    scale: [0, 0.8, 1.2, 0.8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Glowing energy rings */}
            {isClient && [1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute inset-0 rounded-full"
                style={{
                  border: `2px solid rgba(99, 102, 241, ${0.3 / ring})`,
                  boxShadow: `0 0 ${20 * ring}px rgba(99, 102, 241, ${0.4 / ring})`,
                }}
                animate={{
                  scale: [1, 1 + ring * 0.15, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3 + ring,
                  repeat: Infinity,
                  delay: ring * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Rotating shimmer overlay */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, transparent 20%, rgba(99, 102, 241, 0.2) 50%, transparent 80%)',
              }}
              animate={{
                rotate: 360,
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>



      {/* Subtle eclipse ring between profile and flames */}
      {isVisible && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            width: isMobile ? '320px' : '420px', // slightly larger than profile, smaller than flames
            height: isMobile ? '320px' : '420px',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            zIndex: -1,
            background: 'radial-gradient(circle, transparent 70%, rgba(0,0,0,0.18) 80%, transparent 95%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.2,
            ease: 'easeOut' 
          }}
        />
      )}

      {/* Container for all orbital glows and navigation words */}
      <div className="absolute inset-0">
        {/* Orbital Glow Effects */}
        {positionedLinks.map((link) => {
          return (
            <OrbitalGlowEffect
              key={`glow-${link.href}`}
              isVisible={isVisible}
              color={link.flameColor}
              x={link.x}
              y={link.y}
              isClient={isClient}
            />
          );
        })}

        {/* Navigation Links */}
        {positionedLinks.map((link) => {
          // Navigation links now use pure orbital motion
          
          // Get the flame color for this link
          const flameColor = navLinks.find(navLink => navLink.href === link.href)?.flameColor || 'red';

          // Define color classes for different flame colors
          const colorClasses = {
            red: 'hover:text-red-400',
            blue: 'hover:text-blue-400',
            green: 'hover:text-green-400',
            purple: 'hover:text-purple-400',
            orange: 'hover:text-orange-400',
            cyan: 'hover:text-cyan-400',
            pink: 'hover:text-pink-400',
          };
          
          // Fire animation styles for different colors
          const fireAnimations = {
            red: {
              textShadow: '0 0 10px #dc2626, 0 0 20px #ef4444, 0 0 30px #f97316'
            },
            blue: {
              textShadow: '0 0 10px #2563eb, 0 0 20px #3b82f6, 0 0 30px #0ea5e9'
            },
            green: {
              textShadow: '0 0 10px #16a34a, 0 0 20px #22c55e, 0 0 30px #10b981'
            },
            purple: {
              textShadow: '0 0 10px #9333ea, 0 0 20px #a855f7, 0 0 30px #8b5cf6'
            },
            orange: {
              textShadow: '0 0 10px #ea580c, 0 0 20px #f97316, 0 0 30px #fb923c'
            },
            cyan: {
              textShadow: '0 0 10px #06b6d4, 0 0 20px #3b82f6, 0 0 30px #0ea5e9'
            },
            pink: {
              textShadow: '0 0 10px #ec4899, 0 0 20px #a855f7, 0 0 30px #8b5cf6'
            },
          };
          
          return (
            <motion.div
              key={link.href}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10`}
              style={{
                left: `calc(50% + ${link.x}px)`,
                top: `calc(50% + ${link.y}px)`,
              }}
              initial={isClient ? {
                opacity: 0,
                scale: 0,
                pointerEvents: 'none'
              } : { opacity: 0, scale: 0, pointerEvents: 'none' }}
              animate={isClient && isVisible ? {
                opacity: 1,
                scale: 1,
                pointerEvents: 'auto'
              } : isClient ? {
                opacity: 0,
                scale: 0,
                pointerEvents: 'none'
              } : { opacity: 0, scale: 0, pointerEvents: 'none' }}
              transition={isClient ? {
                duration: 0.2,
                ease: "easeOut"
              } : {}}
              onClick={() => handleLinkClick(link.href)}
              role="button"
              tabIndex={isVisible ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }
              }}
              aria-label={`Navigate to ${link.label} page`}
            >
              {/* Glow orb behind text */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, ${fireAnimations[flameColor as keyof typeof fireAnimations].textShadow.split(' ')[3]?.replace(/,.*/, '')}60, transparent 70%)`,
                  filter: 'blur(10px)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Flame text with enhanced effects */}
              <motion.div
                className="relative"
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className={`text-white text-base md:text-xl lg:text-2xl font-bold whitespace-nowrap cursor-pointer ${colorClasses[flameColor as keyof typeof colorClasses]}`}
                  style={{
                    ...fireAnimations[flameColor as keyof typeof fireAnimations],
                    filter: 'drop-shadow(0 0 8px currentColor)',
                  }}
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.85, 1, 0.85],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  aria-hidden="true"
                >
                  {link.label}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Hover Indicator */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300 ${
          isHovered ? 'border-cyan-400/50 scale-110' : ''
        }`}
        aria-hidden="true"
      />

      {/* Remove Wave Function Collapse Image preview block */}
    </nav>
  );
};

export default ProfileNavigation; 
