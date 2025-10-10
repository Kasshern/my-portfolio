"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Email', url: 'mailto:katilyste@gmail.com', copyText: 'katilyste@gmail.com' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/keith-salzman-5491221b5/' },
  { label: 'GitHub', url: 'https://github.com/Kasshern' },
  { label: 'Discord', url: 'https://discord.com/users/.kasshern', displayText: '.kasshern', copyText: '.kasshern' },
  { label: 'Telegram', url: 'https://t.me/ksalzman', copyText: '@ksalzman' },
];

const Contact = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [ripples, setRipples] = useState<{ [key: number]: { x: number; y: number; id: number }[] }>({});

  const handleCopy = async (text: string, index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleRipple = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rippleId = Date.now();

    setRipples(prev => ({
      ...prev,
      [index]: [...(prev[index] || []), { x, y, id: rippleId }]
    }));

    setTimeout(() => {
      setRipples(prev => ({
        ...prev,
        [index]: (prev[index] || []).filter(r => r.id !== rippleId)
      }));
    }, 600);
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Resume Download Link */}
      <div className="mb-8 text-center">
        <motion.a
          href="/resume"
          className="inline-block bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
          aria-label="View full resume page"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📄 View Full Resume
        </motion.a>
      </div>

      <ul className="space-y-6" role="list">
        {links.map((link, idx) => (
          <li key={idx} className="relative">
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#A5B4FC] glass-card-medium rounded-lg py-3 sm:py-4 shadow-lg hover:bg-[#6366F1] hover:text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0F0F0F] overflow-hidden"
              aria-label={`Contact via ${link.label}: ${link.displayText || link.label}`}
              onClick={(e) => handleRipple(e, idx)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.displayText || link.label}

              {/* Ripple effects */}
              {ripples[idx]?.map((ripple) => (
                <motion.span
                  key={ripple.id}
                  className="absolute rounded-full bg-white/30 pointer-events-none"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: 10,
                    height: 10,
                    marginLeft: -5,
                    marginTop: -5,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 20, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              ))}
            </motion.a>

            {/* Copy to clipboard button */}
            {link.copyText && (
              <motion.button
                onClick={(e) => handleCopy(link.copyText!, idx, e)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md glass-card-light hover:bg-[#8B5CF6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                aria-label={`Copy ${link.label} to clipboard`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {copiedIndex === idx ? (
                    <motion.svg
                      key="check"
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="copy"
                      className="w-5 h-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {/* Copy success tooltip */}
            <AnimatePresence>
              {copiedIndex === idx && (
                <motion.div
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#10B981] text-white px-3 py-1 rounded-md text-sm font-medium shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Contact; 
