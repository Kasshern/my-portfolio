"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section 
        className="bg-transparent rounded-lg shadow-xl p-8 mb-8"
        variants={sectionVariants}
        whileHover={{ scale: 1.01 }}
      >
        <motion.div variants={sectionVariants}>
          {/* Georgia Institute of Technology */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Georgia Institute of Technology</h3>
            <p className="text-xl text-gray-300">Master of Science - MS, Artificial Intelligence</p>
            <p className="text-lg text-gray-400">Jan 2024 - Dec 2026</p>
            <p className="text-lg text-gray-400">Honors: Summa Cum Laude</p>
          </div>
          {/* University of Florida */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">University of Florida</h3>
            <p className="text-xl text-gray-300">Bachelor of Science - BS, Computer Science</p>
            <p className="text-lg text-gray-400">2017 - 2019</p>
            <p className="text-lg text-gray-400">Grade: 3.9 GPA</p>
            <p className="text-lg text-gray-400">Honors: Summa Cum Laude</p>
          </div>
          {/* Polk State College */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Polk State College</h3>
            <p className="text-xl text-gray-300">Associate of Science - AS, Biology/Biological Sciences, General</p>
            <p className="text-lg text-gray-400">2007 - 2010</p>
            <p className="text-lg text-gray-400">Grade: 3.8 GPA</p>
            <p className="text-lg text-gray-400">Honors: Magna Cum Laude</p>
          </div>
          {/* University of Texas - Planned PhD */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">University of Texas (Planned)</h3>
            <p className="text-xl text-gray-300">PhD in Physics, Specializing in Quantum Physics and Computing</p>
            <p className="text-lg text-gray-400">Expected Start: 2026</p>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Education; 
