"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from './NavigationContext';

interface NavLink {
  href: string;
  label: string;
  angle: number; // Angle in degrees for positioning around the circle
  flameColor: string; // Color for the flame effect
}

type PageType = 'home' | 'experience' | 'education' | 'skills' | 'projects' | 'videos' | 'contact';

type FlameJourneyState = 'departing' | 'anchored' | 'returning';

interface FloatingFlame {
  isFloating: boolean;
  targetPage: string;
  originalPosition: { x: number; y: number };
  currentPosition: { x: number; y: number };
  journeyState: FlameJourneyState;
  linkLabel: string;
  linkColor: string;
  profilePosition?: { top: number; left: number; width: number; height: number };
}

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

// Floating glow orb for navigation transition
const FloatingGlowEffect: React.FC<{
  flame: FloatingFlame;
  color: string;
  onAnchorComplete: () => void;
  onReturnHome?: () => void;
}> = ({ flame, color, onAnchorComplete }) => {
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

  // Calculate target position based on journey state
  const getTargetPosition = () => {
    if (flame.journeyState === 'returning') {
      // Return to original position around portrait
      return {
        left: `calc(50% + ${flame.originalPosition.x}px)`,
        top: `calc(50% + ${flame.originalPosition.y}px)`,
      };
    } else if (flame.journeyState === 'anchored') {
      // Stay in top-left corner
      return {
        left: '60px',
        top: '60px',
      };
    } else {
      // Departing - move to top-left corner
      return {
        left: '60px',
        top: '60px',
      };
    }
  };

  const targetPosition = getTargetPosition();

  return (
    <motion.div
      className="fixed z-50 flex items-center justify-center pointer-events-none"
      style={{
        left: `calc(50% + ${flame.currentPosition.x}px)`,
        top: `calc(50% + ${flame.currentPosition.y}px)`,
      }}
      animate={{
        ...targetPosition,
        opacity: flame.journeyState === 'returning' ? 0 : 1,
      }}
      transition={{
        duration: flame.journeyState === 'returning' ? 0.8 : 1.0,
        ease: "easeInOut"
      }}
      onAnimationComplete={() => {
        if (flame.journeyState === 'departing') {
          onAnchorComplete();
        }
      }}
    >
      {/* Glowing orb with enhanced trail */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Glow trail effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            width: '60px',
            height: '60px',
            left: '-26px',
            top: '-26px',
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle at center, ${glowColor}60, ${glowColor}20, transparent)`,
              filter: 'blur(12px)'
            }}
          />
        </motion.div>

        {/* Main orb */}
        <div
          className="w-8 h-8 rounded-full relative z-10"
          style={{
            background: `radial-gradient(circle at center, ${glowColor}, ${glowColor}00)`,
            boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}80, 0 0 90px ${glowColor}40`
          }}
        />

        {/* Particle sparkles */}
        <motion.div
          className="absolute -inset-2"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[0, 120, 240].map((angle) => (
            <motion.div
              key={angle}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * 20}px)`,
                top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * 20}px)`,
                background: glowColor,
                boxShadow: `0 0 4px ${glowColor}`
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: angle / 360
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Floating label */}
      <div className="absolute top-12 whitespace-nowrap">
        <FloatingWord
          label={flame.linkLabel}
          color={flame.linkColor}
        />
      </div>
    </motion.div>
  );
};

// Floating word component that accompanies the floating flame
const FloatingWord: React.FC<{ 
  label: string;
  color: string;
}> = ({ label, color }) => {
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
    <div 
      className={`text-white text-sm md:text-lg lg:text-2xl font-medium whitespace-nowrap transition-all duration-200 ${colorClasses[color as keyof typeof colorClasses]}`}
      style={{
        ...fireAnimations[color as keyof typeof fireAnimations],
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {label}
    </div>
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
  const [floatingFlame, setFloatingFlame] = useState<FloatingFlame | null>(null);
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

    // Find the clicked link to get its position and color
    const clickedLink = positionedLinks.find(link => link.href === href);
    const navLink = navLinks.find(link => link.href === href);

    if (clickedLink && navLink && pageName !== 'home') {
      // Just replace any existing floating flame with the new one immediately
      setFloatingFlame({
        isFloating: true,
        targetPage: pageName,
        originalPosition: { x: clickedLink.x, y: clickedLink.y },
        currentPosition: { x: clickedLink.x, y: clickedLink.y },
        journeyState: 'departing',
        linkLabel: navLink.label,
        linkColor: navLink.flameColor
      });
    }

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
      {/* Floating Glow Effect */}
      {floatingFlame && (
        <FloatingGlowEffect
          flame={floatingFlame}
          color={navLinks.find(link => link.href === `/${floatingFlame.targetPage}`)?.flameColor || 'blue'}
          onAnchorComplete={() => {
            // Once anchored, just keep it there - no return animation
            setFloatingFlame(prev => prev ? {
              ...prev,
              journeyState: 'anchored'
            } : null);
          }}
          onReturnHome={() => {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Navigate to home
            navigateToPage('home');
            // Just clear the floating flame immediately - no return animation
            setFloatingFlame(null);
          }}
        />
      )}
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
          className="w-full h-full rounded-full overflow-visible relative"
          style={{
            background: 'radial-gradient(circle at center, rgba(15, 15, 15, 0.8), rgba(15, 15, 15, 0.95))'
          }}
        >

          {/* Particle Dispersion Effect Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ pointerEvents: 'none', overflow: 'visible' }}
          >
            {/* Generate larger, more visible floating particles */}
            {isClient && Array.from({ length: 80 }).map((_, i) => {
              const angle = (i / 80) * Math.PI * 2;
              const radiusMultiplier = 1 + (i % 5) * 0.3;
              const radius = 60 * radiusMultiplier;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const size = 4 + (i % 6) * 1.5;
              const delay = (i % 15) * 0.15;
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
                    x: [0, x * 0.6, x, x * 0.6, 0],
                    y: [0, y * 0.6, y, y * 0.6, 0],
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
          // Check if this glow position should be vacant (same logic as navigation links)
          const isCurrentlyFloating = floatingFlame &&
            floatingFlame.targetPage === (link.href === '/' ? 'home' : link.href.slice(1));

          return (
            <OrbitalGlowEffect
              key={`glow-${link.href}`}
              isVisible={isVisible && !isCurrentlyFloating}
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
          
          // Check if this link is currently floating
          const isCurrentlyFloating = floatingFlame && floatingFlame.targetPage === (link.href === '/' ? 'home' : link.href.slice(1));
          
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
              animate={isClient && isVisible && !isCurrentlyFloating ? { 
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
              tabIndex={isVisible && !isCurrentlyFloating ? 0 : -1}
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
