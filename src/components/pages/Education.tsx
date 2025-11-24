"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, fadeInUpVariants } from '@/lib/animations';

const Education = () => {

  const educations = [
    {
      school: "Georgia Institute of Technology",
      degree: "Master of Science - MS, Computer Science (Machine Learning)",
      period: "Jan 2024 - Expected 2026",
      gpa: "4.0 (in progress)",
      honors: null,
      color: "#F59E0B",
      coursework: [
        "Applied supervised and unsupervised machine learning methods to large datasets, implementing decision trees, SVMs, and clustering algorithms in Python; improved model accuracy by ~15% compared to baseline while demonstrating tradeoffs in bias-variance.",
        "Designed and trained convolutional and recurrent neural networks in PyTorch for image and sequence classification tasks; reduced validation error by ~20% through optimization experiments with SGD, Adam, and regularization techniques.",
        "Modeled large-scale networks using graph theory and probabilistic methods; developed algorithms in NetworkX to measure centrality and community structure, enabling insights into connectivity patterns of >1M-node networks.",
        "Built reinforcement learning agents for complex decision-making in simulated environments; optimized Q-learning and policy gradient methods to achieve >80% task success rates in multi-agent scenarios.",
        "Researched fairness and bias in ML models using the German Credit dataset; implemented fairness-aware classifiers that reduced disparate impact scores by ~25% while maintaining predictive accuracy."
      ]
    },
    {
      school: "University of Florida",
      degree: "Bachelor of Science - BS, Computer Science",
      period: "Jan 2017 - Dec 2019",
      gpa: "3.83",
      honors: "Cum Laude",
      color: "#3B82F6",
      coursework: null
    },
    {
      school: "Polk State College",
      degree: "Associate of Science - AS, Biological Science",
      period: "Aug 2006 - May 2009",
      gpa: "3.77",
      honors: "Magna Cum Laude",
      color: "#10B981",
      coursework: null
    }
  ];

  return (
    <motion.div
      className="w-full"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1221] via-[#111827] to-[#050608] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            variants={fadeInUpVariants}
            whileHover={{
              scale: 1.01,
              boxShadow: `0 40px 120px ${edu.color}40`,
              borderColor: `${edu.color}60`,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 10% 20%, ${edu.color}30, transparent 60%)`
                }}
              />
            </div>

            {/* Vertical accent line on the left */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{
                background: `linear-gradient(to bottom, ${edu.color}00, ${edu.color}, ${edu.color}00)`
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            />

            {/* Glowing dot at the top of the vertical line - static to prevent flickering */}
            <div
              className="absolute left-[-4px] top-12 w-2 h-2 rounded-full"
              style={{
                backgroundColor: edu.color,
                boxShadow: `0 0 15px ${edu.color}, 0 0 30px ${edu.color}80`,
                opacity: 0.85,
              }}
            />

            {/* Content */}
            <div className="relative p-8 md:p-10 lg:p-12 pl-10 md:pl-12 lg:pl-14">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold gradient-text"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {edu.school}
                  </motion.h3>
                  <div
                    className="ml-4 w-3 h-3 rounded-full flex-shrink-0 mt-2"
                    style={{
                      backgroundColor: edu.color,
                      boxShadow: `0 0 20px ${edu.color}`,
                      opacity: 0.9,
                    }}
                  />
                </div>
                <p className="text-xl md:text-2xl text-[#E5E5E5] font-semibold mb-3">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap gap-3 text-[#A3A3A3] mb-2">
                  <p className="text-base md:text-lg">{edu.period}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-[#A3A3A3]">
                  <p className="text-base md:text-lg">GPA: {edu.gpa}</p>
                  {edu.honors && (
                    <>
                      <span className="text-[#666666]">•</span>
                      <p className="text-base md:text-lg">Honors: {edu.honors}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Divider */}
              {edu.coursework && (
                <div
                  className="h-px mb-6"
                  style={{
                    background: `linear-gradient(to right, ${edu.color}00, ${edu.color}60, ${edu.color}00)`
                  }}
                />
              )}

              {/* Coursework */}
              {edu.coursework && (
                <div>
                  <p className="text-lg md:text-xl font-semibold mb-4 text-[#E5E5E5]">
                    Graduate Coursework Highlights:
                  </p>
                  <ul className="space-y-4">
                    {edu.coursework.map((course, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: edu.color }}
                        />
                        <span>{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
