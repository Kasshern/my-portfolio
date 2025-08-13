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
    <div className="min-h-screen bg-black">
      {/* Fixed Header Section with ProfileNavigation */}
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <motion.div
          className="mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
        >
          <ProfileNavigation onNavigate={handleNavigation} />
        </motion.div>
      </div>

      {/* Content Area - Fixed position below the header */}
      <AnimatePresence mode="wait">
        {CurrentContentComponent && (
          <motion.div
            key={currentContent}
            className="w-full bg-black content-area"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.4
            }}
          >
            <div ref={contentRef} className="max-w-6xl mx-auto px-8">
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
