"use client";

import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          className="mt-4 text-xl md:text-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          AI and ML Researcher and Developer.
        </motion.p>
        {/* Profile image */}
        <motion.div 
          className="mt-8 w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-white bg-gray-200 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.6 
          }}
        >
          <img 
            src="/profile.jpg" 
            alt="Keith Salzman profile" 
            className="object-cover w-full h-full" 
          />
        </motion.div>
        {/* About Me Paragraphs */}
        <motion.div className="max-w-2xl mt-8 bg-white rounded-lg shadow-lg p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <h2 className="text-2xl font-semibold mb-4">Software Research and Development Engineer/Architect</h2>
          <p className="text-gray-600 mb-4">
            I am engaged in mastering blockchain development and blockchain-adjacent technologies through Solidity, Go, Javascript/Typescript, Node JS, Web3, etc. Educational Enrollments, open source community activities, and team development of smart contracts, baselining, and other blockchain related innovations. I placed 1st at the EthAtlanta Ethereum Enterprise Event Hackathon in October 2021 and GM Top Coder Challenge in September 2021.
          </p>
          <p className="text-gray-600 mb-4">
            I have traditionally served as a full-stack developer working primarily with React, Redux, Java, Spring, NodeJS, Typescript, Express. I am currently serving as an SDET architecting and developing mobile, browser, and API frameworks and cases in Java.
          </p>
          <p className="text-gray-600">
            I graduated from the University of Florida in 2019 with a bachelors of Science in Computer Science. I have engaged in intense studies of higher mathematics and its technological applications over the last decade and within various countries. My passion lies in innovating and implementing technologies based in world-altering ideas such as decentralization, zero-knowledge proofs, cryptography, and blockchain.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
