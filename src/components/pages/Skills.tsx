"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skillCategories = [
    {
      title: "Blockchain & Web3",
      skills: [
        { name: "Solidity", level: 90 },
        { name: "Web3.js", level: 85 },
        { name: "Ethereum", level: 85 },
        { name: "Zero-Knowledge Proofs", level: 80 },
        { name: "Smart Contracts", level: 90 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "Go", level: 80 },
        { name: "Rust", level: 75 },
        { name: "C++", level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Redux", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Material UI", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 90 },
        { name: "Spring Framework", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Git", level: 90 },
        { name: "Jest/Testing", level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Certified Blockchain Developer",
      issuer: "Blockchain Council",
      date: "Oct 2021",
      id: "39873993"
    },
    {
      title: "Certified NFT Developer",
      issuer: "Blockchain Council",
      date: "Oct 2021",
      id: "40671131"
    },
    {
      title: "Certified Solidity Developer",
      issuer: "Blockchain Council",
      date: "Oct 2021",
      id: "40160356"
    },
    {
      title: "Ethereum Blockchain Developer Bootcamp With Solidity",
      issuer: "Udemy",
      date: "Oct 2021",
      id: "UC-3c2ccac5-bbcf-4744-b6fe-1f3ab9e64b85"
    },
    {
      title: "1Z0-808 Java SE 8 Programmer I",
      issuer: "Oracle",
      date: "Aug 2020",
      id: "OC2083600"
    }
  ];

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column: Skills */}
        <div className="flex-1 space-y-8">
          {/* AI & ML Bar Chart Section */}
          <motion.div className="bg-transparent rounded-lg shadow-xl p-8" variants={itemVariants}>
            <motion.h2 className="text-2xl font-semibold mb-6" variants={itemVariants}>
              Artificial Intelligence & Machine Learning
            </motion.h2>
            <div className="space-y-4">
              {[{ name: "Deep Learning", level: 90 },
                { name: "Neural Networks (CNN, RNN, LSTM, GANs)", level: 90 },
                { name: "Natural Language Processing (NLP)", level: 90 },
                { name: "Computer Vision", level: 80 },
                { name: "Reinforcement Learning", level: 80 },
                { name: "Scikit-learn", level: 90 },
                { name: "TensorFlow", level: 90 },
                { name: "PyTorch", level: 90 },
                { name: "Keras", level: 90 },
                { name: "Pandas", level: 90 },
                { name: "NumPy", level: 90 },
                { name: "Matplotlib & Seaborn", level: 90 },
                { name: "Data Science & Analytics", level: 90 },
                { name: "Machine Learning Algorithms", level: 90 },
              ].map((skill, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <motion.span className="font-medium" variants={itemVariants}>{skill.name}</motion.span>
                    <motion.span className="text-gray-600" variants={itemVariants}>{skill.level}%</motion.span>
                  </div>
                  <motion.div className="h-2 bg-gray-200 rounded-full overflow-hidden" variants={itemVariants}>
                    <motion.div
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-transparent rounded-lg shadow-xl p-8"
              variants={itemVariants}
            >
              <motion.h2 className="text-2xl font-semibold mb-6" variants={itemVariants}>{category.title}</motion.h2>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <motion.span className="font-medium" variants={itemVariants}>{skill.name}</motion.span>
                      <motion.span className="text-gray-600" variants={itemVariants}>{skill.level}%</motion.span>
                    </div>
                    <motion.div className="h-2 bg-gray-200 rounded-full overflow-hidden" variants={itemVariants}>
                      <motion.div
                        className="h-full bg-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Right column: Certifications */}
        <div className="flex-1">
          <motion.h2 className="text-3xl font-bold text-center mb-8" variants={itemVariants}>Certifications</motion.h2>
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 className="text-xl font-semibold mb-2" variants={itemVariants}>{cert.title}</motion.h3>
                <motion.p className="text-gray-600 mb-2" variants={itemVariants}>{cert.issuer}</motion.p>
                <motion.p className="text-gray-500" variants={itemVariants}>{cert.date} • ID: {cert.id}</motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills; 
