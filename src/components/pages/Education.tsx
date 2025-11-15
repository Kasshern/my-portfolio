"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, fadeInLeftVariants } from '@/lib/animations';

const Education = () => {
  return (
    <motion.div
      className="w-full"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="glass-card-strong rounded-2xl p-8 md:p-12 mb-12"
        variants={fadeInLeftVariants}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <motion.div variants={fadeInLeftVariants}>
          {/* Georgia Institute of Technology */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2 gradient-text" style={{ letterSpacing: '-0.01em' }}>Georgia Institute of Technology</h3>
            <p className="text-xl text-[#E5E5E5]">Master of Science - MS, Computer Science (Machine Learning)</p>
            <p className="text-lg text-[#A3A3A3]">Jan 2024 - Expected 2026</p>
            <p className="text-lg text-[#A3A3A3]">GPA: 4.0 (in progress)</p>
            <div className="mt-4">
              <p className="text-lg text-gray-300 font-semibold mb-2">Graduate Coursework Highlights:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 hanging-indent">
                <li>Applied supervised and unsupervised machine learning methods to large datasets, implementing decision trees, SVMs, and clustering algorithms in Python; improved model accuracy by ~15% compared to baseline while demonstrating tradeoffs in bias-variance.</li>
                <li>Designed and trained convolutional and recurrent neural networks in PyTorch for image and sequence classification tasks; reduced validation error by ~20% through optimization experiments with SGD, Adam, and regularization techniques.</li>
                <li>Modeled large-scale networks using graph theory and probabilistic methods; developed algorithms in NetworkX to measure centrality and community structure, enabling insights into connectivity patterns of &gt;1M-node networks.</li>
                <li>Built reinforcement learning agents for complex decision-making in simulated environments; optimized Q-learning and policy gradient methods to achieve &gt;80% task success rates in multi-agent scenarios.</li>
                <li>Researched fairness and bias in ML models using the German Credit dataset; implemented fairness-aware classifiers that reduced disparate impact scores by ~25% while maintaining predictive accuracy.</li>
              </ul>
            </div>
          </div>

          {/* University of Florida */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">University of Florida</h3>
            <p className="text-xl text-gray-300">Bachelor of Science - BS, Computer Science</p>
            <p className="text-lg text-gray-400">Jan 2017 - Dec 2019</p>
            <p className="text-lg text-gray-400">GPA: 3.83</p>
            <p className="text-lg text-gray-400">Honors: Cum Laude</p>
          </div>

          {/* Polk State College */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Polk State College</h3>
            <p className="text-xl text-gray-300">Associate of Science - AS, Biological Science</p>
            <p className="text-lg text-gray-400">Aug 2006 - May 2009</p>
            <p className="text-lg text-gray-400">GPA: 3.77</p>
            <p className="text-lg text-gray-400">Honors: Magna Cum Laude</p>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Education;
