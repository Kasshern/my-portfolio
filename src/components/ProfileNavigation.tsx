"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
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
}

// Flame effect component
const FlameEffect: React.FC<{ 
  isVisible: boolean; 
  color: string; 
  x: number;
  y: number;
  isClient: boolean;
}> = ({ isVisible, color, x, y, isClient }) => {
  const flameColors = {
    red: {
      outer: 'from-red-600 via-red-500 to-orange-400',
      middle: 'from-orange-500 via-yellow-400 to-orange-300',
      inner: 'from-yellow-300 via-yellow-200 to-white',
      spark: 'bg-yellow-200'
    },
    blue: {
      outer: 'from-blue-600 via-blue-500 to-cyan-400',
      middle: 'from-cyan-500 via-blue-400 to-cyan-300',
      inner: 'from-cyan-300 via-cyan-200 to-white',
      spark: 'bg-cyan-200'
    },
    green: {
      outer: 'from-green-600 via-green-500 to-emerald-400',
      middle: 'from-emerald-500 via-green-400 to-emerald-300',
      inner: 'from-emerald-300 via-emerald-200 to-white',
      spark: 'bg-emerald-200'
    },
    purple: {
      outer: 'from-purple-600 via-purple-500 to-pink-400',
      middle: 'from-pink-500 via-purple-400 to-pink-300',
      inner: 'from-pink-300 via-pink-200 to-white',
      spark: 'bg-pink-200'
    },
    orange: {
      outer: 'from-orange-600 via-orange-500 to-red-400',
      middle: 'from-red-500 via-orange-400 to-red-300',
      inner: 'from-red-300 via-red-200 to-white',
      spark: 'bg-red-200'
    },
    cyan: {
      outer: 'from-cyan-600 via-cyan-500 to-blue-400',
      middle: 'from-blue-500 via-cyan-400 to-blue-300',
      inner: 'from-blue-300 via-blue-200 to-white',
      spark: 'bg-cyan-200'
    },
    pink: {
      outer: 'from-pink-600 via-pink-500 to-purple-400',
      middle: 'from-purple-500 via-pink-400 to-purple-300',
      inner: 'from-purple-300 via-purple-200 to-white',
      spark: 'bg-purple-200'
    },
  };

  const colorScheme = flameColors[color as keyof typeof flameColors] || flameColors.red;
  
  // Calculate flame position - now using pure orbital motion

  return (
    <motion.div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-0`}
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
        duration: 0.2,
        ease: "easeOut"
      } : {}}
    >
      {/* Main flame body with jetting animation */}
      <div className="relative">
        {/* Outer flame layer */}
        <div 
          className={`w-16 h-20 md:w-20 md:h-24 bg-gradient-to-t ${colorScheme.outer} rounded-full blur-sm animate-pulse`}
          style={{ 
            animationDuration: '1.2s',
            transform: isVisible ? 'scale(1.2)' : 'scale(0.8)',
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Middle flame layer */}
        <div 
          className={`absolute inset-0 w-12 h-16 md:w-16 md:h-20 bg-gradient-to-t ${colorScheme.middle} rounded-full blur-md animate-ping`}
          style={{ 
            animationDelay: '0.3s',
            animationDuration: '1.2s',
            transform: isVisible ? 'scale(1.1)' : 'scale(0.9)',
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Inner flame core */}
        <div 
          className={`absolute inset-0 w-8 h-12 md:w-12 md:h-16 bg-gradient-to-t ${colorScheme.inner} rounded-full blur-sm animate-pulse`}
          style={{ 
            animationDuration: '1.2s',
            transform: isVisible ? 'scale(1.3)' : 'scale(0.7)',
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Brightest center */}
        <div 
          className="absolute inset-0 w-6 h-8 md:w-8 md:h-10 bg-gradient-to-t from-white to-yellow-100 rounded-full blur-sm animate-pulse"
          style={{
            animationDuration: '1.2s',
            transform: isVisible ? 'scale(1.4)' : 'scale(0.6)',
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>
    </motion.div>
  );
};

// Floating flame component for the journey animation (simplified - no return)
const FloatingFlameEffect: React.FC<{
  flame: FloatingFlame;
  color: string;
  onAnchorComplete: () => void;
}> = ({ flame, color, onAnchorComplete }) => {
  const flameColors = {
    red: {
      outer: 'from-red-600 via-red-500 to-orange-400',
      middle: 'from-orange-500 via-yellow-400 to-orange-300',
      inner: 'from-yellow-300 via-yellow-200 to-white',
      spark: 'bg-yellow-200'
    },
    blue: {
      outer: 'from-blue-600 via-blue-500 to-cyan-400',
      middle: 'from-cyan-500 via-blue-400 to-cyan-300',
      inner: 'from-cyan-300 via-cyan-200 to-white',
      spark: 'bg-cyan-200'
    },
    green: {
      outer: 'from-green-600 via-green-500 to-emerald-400',
      middle: 'from-emerald-500 via-green-400 to-emerald-300',
      inner: 'from-emerald-300 via-emerald-200 to-white',
      spark: 'bg-emerald-200'
    },
    purple: {
      outer: 'from-purple-600 via-purple-500 to-pink-400',
      middle: 'from-pink-500 via-purple-400 to-pink-300',
      inner: 'from-pink-300 via-pink-200 to-white',
      spark: 'bg-purple-200'
    },
    orange: {
      outer: 'from-orange-600 via-orange-500 to-red-400',
      middle: 'from-red-500 via-orange-400 to-red-300',
      inner: 'from-red-300 via-red-200 to-white',
      spark: 'bg-red-200'
    },
    cyan: {
      outer: 'from-cyan-600 via-cyan-500 to-blue-400',
      middle: 'from-blue-500 via-cyan-400 to-blue-300',
      inner: 'from-blue-300 via-blue-200 to-white',
      spark: 'bg-cyan-200'
    },
    pink: {
      outer: 'from-pink-600 via-pink-500 to-purple-400',
      middle: 'from-purple-500 via-pink-400 to-purple-300',
      inner: 'from-purple-300 via-purple-200 to-white',
      spark: 'bg-purple-200'
    },
  };

  const colorScheme = flameColors[color as keyof typeof flameColors] || flameColors.red;

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        left: `calc(50% + ${flame.currentPosition.x}px)`,
        top: `calc(50% + ${flame.currentPosition.y}px)`,
      }}
      animate={{
        left: '20px',
        top: '20px',
        opacity: flame.journeyState === 'anchored' ? 1 : 1,
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut"
      }}
      onAnimationComplete={() => {
        if (flame.journeyState === 'departing') {
          // Flame has reached top-left, just keep it there
          onAnchorComplete();
        }
      }}
    >
      {/* Main flame body */}
      <div className="relative">
        {/* Outer flame layer */}
        <div 
          className={`w-16 h-20 md:w-20 md:h-24 bg-gradient-to-t ${colorScheme.outer} rounded-full blur-sm animate-pulse`}
          style={{ 
            animationDuration: '1.2s',
            transform: 'scale(1.2)',
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Middle flame layer */}
        <div 
          className={`absolute inset-0 w-12 h-16 md:w-16 md:h-20 bg-gradient-to-t ${colorScheme.middle} rounded-full blur-md animate-ping`}
          style={{ 
            animationDelay: '0.3s',
            animationDuration: '1.2s',
            transform: 'scale(1.1)',
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Inner flame core */}
        <div 
          className={`absolute inset-0 w-8 h-12 md:w-12 md:h-16 bg-gradient-to-t ${colorScheme.inner} rounded-full blur-sm animate-pulse`}
          style={{ 
            animationDuration: '1.2s',
            transform: 'scale(1.3)',
            transition: 'transform 0.5s ease-out'
          }}
        />
        
        {/* Brightest center */}
        <div 
          className="absolute inset-0 w-6 h-8 md:w-8 md:h-10 bg-gradient-to-t from-white to-yellow-100 rounded-full blur-sm animate-pulse"
          style={{
            animationDuration: '1.2s',
            transform: 'scale(1.4)',
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>
      
      {/* Floating word positioned inside the flame */}
      <div className="absolute inset-0 flex items-center justify-center">
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

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({ onNavigate }) => {
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
      // Start floating flame animation
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
      {/* Floating Flame Effect */}
      {floatingFlame && (
        <FloatingFlameEffect
          flame={floatingFlame}
          color={navLinks.find(link => link.href === `/${floatingFlame.targetPage}`)?.flameColor || 'blue'}
          onAnchorComplete={() => {
            // Once anchored, just keep it there - no return animation
            setFloatingFlame(prev => prev ? {
              ...prev,
              journeyState: 'anchored'
            } : null);
          }}
        />
      )}
      {/* Profile Picture Container with sun/horizon effect */}
      <motion.div
        className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl bg-gray-800 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{
          background: isVisible ? 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0.05) 80%, transparent 100%)' : 'transparent',
          padding: '2px',
        }}
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
        {/* Sun/Horizon Effect (shown when profile is hidden) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={isVisible ? { 
            opacity: 0
          } : { 
            opacity: 1
          }}
          transition={{ 
            duration: 0.2,
            ease: 'easeOut' 
          }}
        >
          {/* Pure flame animation as hover target */}
          <div className="relative">
            {/* Core flame shapes using SVG */}
            <svg 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-20"
              viewBox="0 0 64 80"
              style={{ zIndex: 5 }}
            >
              {/* Core flame (brightest) */}
              <path
                d="M32 2 Q36 22 34 42 Q32 62 30 42 Q28 22 32 2"
                fill="rgba(255,255,255,1)"
                style={{
                  animation: 'flameCore 1.1s ease-in-out infinite alternate',
                  filter: 'blur(0.2px)',
                }}
              />
              
              {/* Main flame */}
              <path
                d="M32 0 Q40 20 36 40 Q32 60 28 40 Q24 20 32 0"
                fill="rgba(255,255,255,0.8)"
                style={{
                  animation: 'flameRealistic 1.4s ease-in-out infinite alternate',
                  filter: 'blur(0.5px)',
                }}
              />
              
              {/* Inner flame */}
              <path
                d="M32 5 Q38 25 35 45 Q32 65 29 45 Q26 25 32 5"
                fill="rgba(255,255,255,0.9)"
                style={{
                  animation: 'flameRealistic 1.2s ease-in-out infinite alternate-reverse',
                  filter: 'blur(0.3px)',
                }}
              />
              
              {/* Outer glow */}
              <path
                d="M32 0 Q44 25 40 50 Q32 75 24 50 Q20 25 32 0"
                fill="rgba(255,255,255,0.4)"
                style={{
                  animation: 'flameRealistic 1.6s ease-in-out infinite alternate',
                  filter: 'blur(1px)',
                }}
              />
              
              {/* Extended outer glow */}
              <path
                d="M32 0 Q48 30 44 55 Q32 85 20 55 Q16 30 32 0"
                fill="rgba(255,255,255,0.2)"
                style={{
                  animation: 'flameRealistic 1.8s ease-in-out infinite alternate-reverse',
                  filter: 'blur(1.5px)',
                }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Profile Picture (shown when visible) */}
        <motion.div 
          className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative"
          animate={isVisible ? { 
            opacity: 1
          } : { 
            opacity: 0
          }}
          transition={{ 
            duration: 0.2,
            ease: 'easeOut' 
          }}
        >
          <Image
            src="/ai_keith.jpg"
            alt="Keith A. Salzman - Computer Scientist and Machine Learning Researcher"
            width={320}
            height={320}
            className="object-cover w-full h-full"
            priority
          />
          {/* Eclipse gradient overlay on the image */}
          {isVisible && (
            <motion.div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.03) 70%, transparent 100%)',
                pointerEvents: 'none',
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

      {/* Container for all flames and navigation words */}
      <div className="absolute inset-0">
        {/* Flame Effects */}
        {positionedLinks.map((link) => {
          // Check if this flame position should be vacant (same logic as navigation links)
          const isCurrentlyFloating = floatingFlame && 
            floatingFlame.targetPage === (link.href === '/' ? 'home' : link.href.slice(1));
          
          return (
            <FlameEffect
              key={`flame-${link.href}`}
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
              <div
                className={`text-white text-base md:text-xl lg:text-2xl font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${colorClasses[flameColor as keyof typeof colorClasses]}`}
                style={{
                  ...fireAnimations[flameColor as keyof typeof fireAnimations],
                  transition: 'all 0.3s ease-in-out'
                }}
                aria-hidden="true"
              >
                {link.label}
              </div>
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
