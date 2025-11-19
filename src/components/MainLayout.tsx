"use client";

import React, { useState, useEffect } from 'react';
import { NavigationProvider } from './NavigationContext';
import AmbientLighting from './AmbientLighting';
import ParallaxBackground from './ParallaxBackground';
import Home from './pages/Home';

type PageType = 'home' | 'experience' | 'education' | 'skills' | 'projects' | 'videos' | 'contact';

interface MainLayoutProps {
  initialPage?: PageType;
}

const MainLayout: React.FC<MainLayoutProps> = ({ initialPage }) => {
  // Determine initial page from URL or props
  const getInitialPage = (): PageType => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const page = path === '/' ? 'home' : path.slice(1) as PageType;
      return page || 'home';
    }
    return initialPage || 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  // Handle URL changes without page navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = path === '/' ? 'home' : path.slice(1) as PageType;
      if (page && page !== currentPage) {
        setCurrentPage(page);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage]);

  // Update URL when page changes
  const navigateToPage = (page: PageType) => {
    if (page === currentPage) return;
    
    // Update URL without page navigation
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', path);
    
    // Small delay to allow for smooth transition
    setTimeout(() => {
      setCurrentPage(page);
    }, 100);
  };

  return (
    <NavigationProvider navigateToPage={navigateToPage} currentPage={currentPage}>
      <ParallaxBackground>
        <div 
          className="min-h-screen bg-black relative"
        >
          <AmbientLighting />
          <Home />
        </div>
      </ParallaxBackground>
    </NavigationProvider>
  );
};

export default MainLayout;
