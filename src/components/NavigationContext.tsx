"use client";

import React, { createContext, useContext, ReactNode } from 'react';

type PageType = 'home' | 'experience' | 'education' | 'skills' | 'projects' | 'videos' | 'contact';

interface NavigationContextType {
  navigateToPage: (page: PageType) => void;
  currentPage: PageType;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
  navigateToPage: (page: PageType) => void;
  currentPage: PageType;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
  navigateToPage,
  currentPage
}) => {
  return (
    <NavigationContext.Provider value={{ navigateToPage, currentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}; 
