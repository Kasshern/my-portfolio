"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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
  const [jitterIntensity, setJitterIntensity] = useState(0);
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

  // Progressive jitter intensity
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateJitter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Start jittering after 6 seconds, increase over 9 seconds to max intensity
      if (elapsed > 6000) {
        const progress = Math.min((elapsed - 6000) / 9000, 1);
        setJitterIntensity(progress * 3); // Max jitter of 3px
      } else {
        setJitterIntensity(0);
      }

      if (isProfileHovered) {
        animationFrame = requestAnimationFrame(updateJitter);
      }
    };

    if (isProfileHovered) {
      animationFrame = requestAnimationFrame(updateJitter);
    } else {
      setJitterIntensity(0);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isProfileHovered]);

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
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Keith
                </h1>
                <div
                  className="relative rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '140px',
                    height: '140px',
                  }}
                >
                  <motion.div
                    className="w-full h-full relative"
                    animate={isProfileHovered ? {
                      filter: [
                        'blur(0px) brightness(100%)',
                        'blur(0px) brightness(100%)',
                        'blur(0px) brightness(100%)',
                        'blur(2px) brightness(90%)',
                        'blur(4px) brightness(80%)',
                        'blur(6px) brightness(70%)',
                        'blur(8px) brightness(60%)',
                        'blur(10px) brightness(50%)',
                      ],
                    } : {
                      filter: 'blur(0px) brightness(100%)',
                    }}
                    transition={{
                      duration: 15,
                      ease: "linear",
                    }}
                    style={{
                      imageRendering: 'pixelated',
                    }}
                  >
                    <motion.div
                      className="w-full h-full"
                      animate={jitterIntensity > 0 ? {
                        x: [0, jitterIntensity, -jitterIntensity, jitterIntensity * 0.8, -jitterIntensity * 0.7, jitterIntensity * 0.9, -jitterIntensity],
                        y: [0, -jitterIntensity * 0.8, jitterIntensity, -jitterIntensity, jitterIntensity * 0.7, -jitterIntensity * 0.9, jitterIntensity * 0.8],
                      } : {
                        x: 0,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.1,
                        repeat: jitterIntensity > 0 ? Infinity : 0,
                        ease: "linear",
                      }}
                    >
                      <Image
                        src="/ai_keith.jpg"
                        alt="Keith Salzman"
                        width={140}
                        height={140}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Salzman
                </h1>
              </div>
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
