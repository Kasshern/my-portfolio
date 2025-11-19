"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CELL_SIZE = 50; // Size of each grid cell

const BackgroundGrid: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridSizeX, setGridSizeX] = useState(0);
  const [gridSizeY, setGridSizeY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const calculateGridSize = () => {
      setGridSizeX(Math.ceil(window.innerWidth / CELL_SIZE));
      setGridSizeY(Math.ceil(window.innerHeight / CELL_SIZE));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', calculateGridSize);

    calculateGridSize(); // Initial calculation

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', calculateGridSize);
    };
  }, []);

  const grid = [];
  for (let i = 0; i < gridSizeY; i++) {
    for (let j = 0; j < gridSizeX; j++) {
      const x = j * CELL_SIZE;
      const y = i * CELL_SIZE;
      grid.push(
        <GridCell key={`${i}-${j}`} x={x} y={y} mouseX={mousePosition.x} mouseY={mousePosition.y} />
      );
    }
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {grid}
    </div>
  );
};

interface GridCellProps {
  x: number;
  y: number;
  mouseX: number;
  mouseY: number;
}

const GridCell: React.FC<GridCellProps> = ({ x, y, mouseX, mouseY }) => {
  const distance = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));

  const opacity = Math.max(0, 1 - distance / 300);
  const scale = Math.max(0, 1 - distance / 400);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width: CELL_SIZE,
        height: CELL_SIZE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
        animate={{
          opacity,
          scale,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
};

export default BackgroundGrid;