"use client";

import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Email', url: 'mailto:your.email@example.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { label: 'GitHub', url: 'https://github.com/yourusername' },
  { label: 'Discord', url: 'https://discordapp.com/users/yourdiscordid' },
  { label: 'Telegram', url: 'https://t.me/yourtelegram' },
];

const Contact = () => {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <ul className="space-y-6">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-2xl font-semibold text-blue-400 bg-gray-800 rounded-lg py-4 shadow-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Contact; 
