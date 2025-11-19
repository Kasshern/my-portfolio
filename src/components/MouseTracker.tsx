"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const MouseTracker = () => {
  const [isClient, setIsClient] = useState(false);
  const [path, setPath] = useState('');
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const springX = useSpring(0, { stiffness: 300, damping: 30 });
  const springY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [springX, springY]);

  useEffect(() => {
    const points: [number, number][] = [];
    const unsubscribeX = springX.on('change', (x) => {
      points.push([x, springY.get()]);
      if (points.length > 20) {
        points.shift();
      }
      setPath(createSvgPath(points));
    });

    return () => {
      unsubscribeX();
    };
  }, [springX, springY]);


  if (!isClient) {
    return null;
  }

  return (
    <svg
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      filter="url(#goo)"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <motion.path
        d={path}
        fill="url(#gradient)"
        stroke="url(#gradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function createSvgPath(points: [number, number][]): string {
  if (points.length < 2) {
    return "";
  }
  let path = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const midPointX = (points[i-1][0] + points[i][0]) / 2;
    const midPointY = (points[i-1][1] + points[i][1]) / 2;
    path += ` Q ${points[i-1][0]} ${points[i-1][1]}, ${midPointX} ${midPointY}`;
  }
  return path;
}


export default MouseTracker;