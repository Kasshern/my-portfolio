"use client";

import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Home = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-start min-h-screen p-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Keith Salzman
        </motion.h1>
        <motion.p 
          className="mt-2 text-xl md:text-2xl text-center text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Engineer and Researcher Focused on AI/ML and Quantum Science
        </motion.p>
        
        {/* Videos and Profile Section */}
        <motion.div 
          className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Left Video */}
          <motion.div 
            className="w-full lg:w-1/3 max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-transparent rounded-lg shadow-xl p-4">
              <div className="aspect-video mb-3">
                <iframe
                  src="https://www.youtube.com/embed/cDMtthZtDM8"
                  title="Baseline Protocol - The (BASE)ics - Baseline Architecture Simplified"
                  className="w-full h-full rounded"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-sm font-semibold text-gray-300 text-center">
                Baseline Protocol - The (BASE)ics - Baseline Architecture Simplified
              </h3>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div 
            className="w-56 h-56 rounded-full overflow-hidden shadow-2xl bg-gray-800 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.7 
            }}
          >
            <Image 
              src="/profile.jpg" 
              alt="Keith Salzman profile" 
              width={224}
              height={224}
              className="object-cover w-full h-full" 
            />
          </motion.div>

          {/* Right Video */}
          <motion.div 
            className="w-full lg:w-1/3 max-w-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-transparent rounded-lg shadow-xl p-4">
              <div className="aspect-video mb-3">
                <iframe
                  src="https://www.youtube.com/embed/iux260GVERs"
                  title="Apian: A Flexible Peer to Peer Framework for Blockchain Games"
                  className="w-full h-full rounded"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-sm font-semibold text-gray-300 text-center">
                Apian: A Flexible Peer to Peer Framework for Blockchain Games
              </h3>
            </div>
          </motion.div>
        </motion.div>

        {/* About Me Paragraphs */}
        <motion.div className="max-w-6xl mt-6 bg-transparent rounded-lg shadow-xl p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
          <p className="text-gray-300 text-lg whitespace-pre-line">
            Engineer and researcher with expertise spanning AI/ML, cryptography, web2 and web3 full stack development, decentralized systems, and leadership. Currently directing cross-functional engineering teams at ConsenSys Mesh while pursuing an M.S. in AI/ML at Georgia Institute of Technology. Combines multiple sources of cutting-edge research, such as zero-knowledge cryptography, machine learning algorithms, in driving privacy-preserving technologies among others. Proven track record of architecting complex systems from concept to production, establishing technical standards, and mentoring technical teams. Experienced in leading R&D initiatives that bridge theoretical computer science with practical applications across a large breadth of web2, decentralized, AI, and enterprise systems. Passionate about pursuing and progressing the edge understanding and technological development at the intersections of artificial intelligence, quantum research, robotics, distributed systems, and secure computation that solve real-world challenges.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
