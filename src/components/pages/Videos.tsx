"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Videos = () => {
  return (
    <div className="w-full">
      {/* Videos Section */}
      <motion.div 
        className="flex flex-col items-center justify-center gap-12 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {/* First Video */}
        <motion.div
          className="w-full max-w-4xl glass-card-medium rounded-2xl p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <div className="rounded-lg">
            <div className="aspect-video mb-4">
              <iframe
                src="https://www.youtube.com/embed/cDMtthZtDM8"
                title="Baseline Protocol - The (BASE)ics - Baseline Architecture Simplified"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 text-center">
              Baseline Protocol - The (BASE)ics - Baseline Architecture Simplified
            </h3>
          </div>
        </motion.div>

        {/* Second Video */}
        <motion.div
          className="w-full max-w-4xl glass-card-medium rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <div className="rounded-lg">
            <div className="aspect-video mb-4">
              <iframe
                src="https://www.youtube.com/embed/iux260GVERs"
                title="Apian: A Flexible Peer to Peer Framework for Blockchain Games"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 text-center">
              Apian: A Flexible Peer to Peer Framework for Blockchain Games
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Videos; 
