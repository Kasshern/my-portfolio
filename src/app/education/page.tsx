"use client";

import React from 'react';
import PageTransition from '../../components/PageTransition';
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
    <PageTransition>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 pt-8">
        <motion.div
          className="max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            variants={sectionVariants}
          >
            Education
          </motion.h1>
          <motion.section 
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            variants={sectionVariants}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div variants={sectionVariants}>
              {/* Georgia Institute of Technology */}
              <div className="mb-8">
                <h3 className="text-xl font-medium">Georgia Institute of Technology</h3>
                <p className="text-gray-600">Master of Science - MS, Artificial Intelligence</p>
                <p className="text-gray-500">Jan 2024 - Dec 2026</p>
                <p className="text-gray-500">Honors: Summa Cum Laude</p>
              </div>
              {/* University of Florida */}
              <div className="mb-8">
                <h3 className="text-xl font-medium">University of Florida</h3>
                <p className="text-gray-600">Bachelor of Science - BS, Computer Science</p>
                <p className="text-gray-500">2017 - 2019</p>
                <p className="text-gray-500">Grade: 3.9 GPA</p>
                <p className="text-gray-500">Honors: Summa Cum Laude</p>
              </div>
              {/* Polk State College */}
              <div className="mb-8">
                <h3 className="text-xl font-medium">Polk State College</h3>
                <p className="text-gray-600">Associate of Science - AS, Biology/Biological Sciences, General</p>
                <p className="text-gray-500">2007 - 2010</p>
                <p className="text-gray-500">Grade: 3.8 GPA</p>
                <p className="text-gray-500">Honors: Magna Cum Laude</p>
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Education; 
