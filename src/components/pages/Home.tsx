"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileNavigation from '../ProfileNavigation';
import DynamicSpacing from '../DynamicSpacing';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Videos from './Videos';
import Contact from './Contact';
import { scaleInVariants, pageTransitionVariants } from '@/lib/animations';

type PageType = 'home' | 'experience' | 'education' | 'skills' | 'projects' | 'videos' | 'contact';

const Home = () => {
  const [currentContent, setCurrentContent] = useState<PageType | null>(null);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  // Map page types to components
  const pageComponents = {
    home: null, // Home doesn't need additional content
    experience: Experience,
    education: Education,
    skills: Skills,
    projects: Projects,
    videos: Videos,
    contact: Contact
  };

  const handleNavigation = (page: PageType) => {
    setCurrentContent(page === 'home' ? null : page);

    // Improved scroll behavior with better timing and positioning
    if (page !== 'home') {
      setTimeout(() => {
        const contentElement = document.querySelector('.content-area');
        if (contentElement) {
          contentElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 150); // Slightly longer delay to ensure content is fully rendered
    }
  };

  const CurrentContentComponent = currentContent ? pageComponents[currentContent] : null;
  const hoverActive = isProfileHovered;
  const hoverScaleActive = canHover && isProfileHovered;
  const stretchIndicator = hoverScaleActive;

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateCapability = (event: MediaQueryListEvent | MediaQueryList) => {
      setCanHover(event.matches);
    };
    updateCapability(query);
    query.addEventListener('change', updateCapability);
    return () => query.removeEventListener('change', updateCapability);
  }, []);

  const handleHoverChange = (state: boolean) => {
    setIsProfileHovered(state);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Fixed Header Section with ProfileNavigation */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 relative">
        <motion.div
          className="absolute flex flex-col items-center text-center pointer-events-none"
          style={{
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 1,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: hoverScaleActive ? 1.02 : 1,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            style={{
              background: 'linear-gradient(110deg, rgba(255,255,255,0.95), #A5B4FC, #FBD38D 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em'
            }}
          >
            Keith Salzman
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-[#E5E5E5]/90 font-medium tracking-[0.08em] uppercase">
            Blockchain & Machine Learning Engineer
          </p>
          <motion.div
            className="mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-[#FBD38D] via-[#8B5CF6] to-transparent"
            style={{
              opacity: hoverActive ? 1 : 0.6,
            }}
            animate={{
              width: stretchIndicator ? '16rem' : '10rem',
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: '20%',
            right: '15%',
            opacity: hoverActive ? 0.7 : 0.4,
          }}
          animate={{
            scale: hoverScaleActive ? [1, 1.15, 1] : [1, 1.05, 1],
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FDE68A] via-[#FBBF24] to-transparent blur-3xl" />
        </motion.div>

        {/* Profile Navigation */}
        <motion.div
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <ProfileNavigation
            onNavigate={handleNavigation}
            onHoverChange={handleHoverChange}
          />
        </motion.div>
      </div>

      {/* Content Area - Fixed position below the header */}
      <AnimatePresence mode="wait">
        {CurrentContentComponent && (
          <motion.div
            key={currentContent}
            className="w-full bg-[#0F0F0F] content-area"
            id="main-content"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}
          >
            <div ref={contentRef} className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24">
              <CurrentContentComponent />
              <DynamicSpacing contentRef={contentRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home; 
