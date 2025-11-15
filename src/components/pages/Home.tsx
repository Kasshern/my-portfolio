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

  return (
    <div className="min-h-screen bg-[#0F0F0F]" style={{ background: 'radial-gradient(circle at top, rgba(99, 102, 241, 0.15) 0%, #0F0F0F 70%)' }}>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Fixed Header Section with ProfileNavigation */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 relative">
        {/* Hero Title - Only visible on hover - Absolutely positioned */}
        <AnimatePresence>
          {isProfileHovered && (
            <motion.div
              className="absolute text-center"
              style={{ bottom: 'calc(50% + 280px)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                style={{
                  background: 'linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em'
                }}
              >
                Keith Salzman
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-[#E5E5E5] font-medium tracking-wide">
                Blockchain and Machine Learning Engineer
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Profile Navigation */}
        <motion.div
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfileNavigation
            onNavigate={handleNavigation}
            onHoverChange={setIsProfileHovered}
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
