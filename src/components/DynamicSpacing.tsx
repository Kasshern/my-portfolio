"use client";

import React, { useEffect, useState, useRef } from 'react';

interface DynamicSpacingProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const DynamicSpacing: React.FC<DynamicSpacingProps> = ({ contentRef }) => {
  const [spacing, setSpacing] = useState(64); // Default pb-16 (64px)
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const calculateRequiredSpacing = (contentHeight: number, viewportHeight: number) => {
    const minimumSpacing = viewportHeight; // At least one viewport height
    const contentSpacing = viewportHeight - (contentHeight % viewportHeight);
    return Math.max(minimumSpacing, contentSpacing);
  };

  useEffect(() => {
    const updateSpacing = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        const requiredSpacing = calculateRequiredSpacing(contentHeight, viewportHeight);
        setSpacing(requiredSpacing);
      }
    };

    // Initial calculation
    updateSpacing();

    // Set up ResizeObserver to watch for content changes
    if (contentRef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        updateSpacing();
      });
      resizeObserverRef.current.observe(contentRef.current);
    }

    // Handle window resize
    const handleResize = () => {
      updateSpacing();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [contentRef]);

  return <div style={{ paddingBottom: `${spacing}px` }} />;
};

export default DynamicSpacing; 
