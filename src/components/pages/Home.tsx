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
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Fixed Header Section with ProfileNavigation */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <motion.div
          className="mt-8"
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfileNavigation onNavigate={handleNavigation} />
        </motion.div>
      </div>

      {/* Content Area - Fixed position below the header */}
      <AnimatePresence mode="wait">
        {CurrentContentComponent && (
          <motion.div
            key={currentContent}
            className="w-full bg-[#0a0a0a] content-area"
            id="main-content"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}
          >
            <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
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
