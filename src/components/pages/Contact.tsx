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
      className="w-full max-w-2xl mx-auto relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1221] via-[#0F0F0F] to-[#050608] p-6 md:p-10 shadow-[0_40px_120px_rgba(0,0,0,0.45)] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.2),transparent_60%)]" />
      </div>
      <ul className="relative space-y-6" role="list">
        {links.map((link, idx) => (
          <li key={idx} className="relative">
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full text-center text-lg sm:text-xl md:text-2xl font-semibold text-white rounded-2xl border border-white/10 bg-black/40 py-3 sm:py-4 shadow-lg hover:bg-white/10 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0F0F0F] overflow-hidden"
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
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white/5 border border-white/10 hover:bg-[#8B5CF6]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
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
