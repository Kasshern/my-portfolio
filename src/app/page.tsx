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
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          className="mt-2 text-xl md:text-2xl text-center text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          AI and ML Researcher and Developer.
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
          <h2 className="text-2xl font-semibold mb-4 text-white">Software Research and Development Engineer/Architect</h2>
          <p className="text-gray-300 mb-4">
            I am engaged in mastering blockchain development and blockchain-adjacent technologies through Solidity, Go, Javascript/Typescript, Node JS, Web3, etc. Educational Enrollments, open source community activities, and team development of smart contracts, baselining, and other blockchain related innovations. I placed 1st at the EthAtlanta Ethereum Enterprise Event Hackathon in October 2021 and GM Top Coder Challenge in September 2021.
          </p>
          <p className="text-gray-300 mb-4">
            I have traditionally served as a full-stack developer working primarily with React, Redux, Java, Spring, NodeJS, Typescript, Express. I am currently serving as an SDET architecting and developing mobile, browser, and API frameworks and cases in Java.
          </p>
          <p className="text-gray-300">
            I graduated from the University of Florida in 2019 with a bachelors of Science in Computer Science. I have engaged in intense studies of higher mathematics and its technological applications over the last decade and within various countries. My passion lies in innovating and implementing technologies based in world-altering ideas such as decentralization, zero-knowledge proofs, cryptography, and blockchain.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
