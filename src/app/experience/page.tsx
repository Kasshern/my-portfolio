"use client";

import React from 'react';
import PageTransition from '../../components/PageTransition';
import { motion } from 'framer-motion';

const Experience = () => {
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
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <motion.div
          className="max-w-6xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            variants={sectionVariants}
          >
            Work Experience
          </motion.h1>
          <motion.section 
            className="bg-transparent rounded-lg shadow-xl p-8 mb-8"
            variants={sectionVariants}
            whileHover={{ scale: 1.01 }}
          >
            {/* ConsenSys Mesh - Technical Director */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Technical Director</h3>
              <p className="text-xl text-gray-300 font-semibold">ConsenSys Mesh · Full-time</p>
              <p className="text-lg text-gray-400">Mar 2024 - Present</p>
              <p className="text-lg text-gray-400">Austin, Texas, United States</p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
                <li>Lead strategic technical direction across Web3, Zero-Knowledge, and AI initiatives, aligning innovation with product roadmaps, startup needs, and investment opportunities.</li>
                <li>Manage cross-functional R&D teams, setting technical standards and best practices for scalable, privacy-preserving, and decentralized systems.</li>
                <li>Drive innovation through research partnerships and contributions to open-source ecosystems in ZK, ML, and blockchain infrastructure.</li>
                <li>Evaluate and integrate emerging cryptographic, AI/ML, and decentralized protocols across Mesh portfolio companies.</li>
                <li>Mentor senior engineers and technical leads on advanced blockchain architectures, ZK implementation patterns, and decentralized coordination frameworks.</li>
                <li>Represent ConsenSys Mesh at industry conferences and technical working groups, shaping the future of trustless technologies.</li>
                <li>Oversee all technical operations for the TachyonX accelerator program, supporting early-stage startups from ideation through launch.</li>
              </ul>
            </motion.div>
            {/* ConsenSys Mesh - R&D Lead Engineer */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Research & Development Lead Engineer</h3>
              <p className="text-xl text-gray-300 font-semibold">ConsenSys Mesh · Full-time</p>
              <p className="text-lg text-gray-400">Feb 2022 - Mar 2024</p>
              <p className="text-lg text-gray-400">Austin, Texas, United States</p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
                <li>Advanced applied research and contributed to codebases—both open-source and private—at the intersection of ZK, decentralized systems, and machine learning.</li>
                <li>Developed interoperable standards and prototype implementations spanning MPC, ZK cryptography, ML pipelines, and decentralized smart contracts.</li>
                <li>Led cross-functional R&D efforts, mentoring engineers and driving technical strategy across ZK, blockchain, and ML initiatives.</li>
                <li>Architected end-to-end systems combining Zero-Knowledge proof architectures with modular smart contracts for confidential computation and on-chain coordination.</li>
                <li>Presented at international conventions on ZK, MPC, and Decentralized technologies.</li>
              </ul>
            </motion.div>
            {/* General Motors */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
              <p className="text-xl text-gray-300 font-semibold">General Motors · Full-time</p>
              <p className="text-lg text-gray-400">Oct 2020 - Feb 2022</p>
              <p className="text-lg text-gray-400">Austin, Texas, United States</p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
                <li>Architected cloud-based mobile test automation framework in Selenium and Appium.</li>
                <li>Designed multi-engine framework for simultaneous UI, native, and mobile testing.</li>
                <li>Developed automated tests across websites, APIs, and iOS/Android applications.</li>
                <li>Integrated test automation into CI/CD pipelines for continuous testing cross-platform.</li>
                <li>Collaborated across multiple agile teams and projects simultaneously.</li>
                <li>Established standards of test robustness, maintainability, and performance efficiency.</li>
              </ul>
            </motion.div>
            {/* Revature */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Full Stack Software Developer</h3>
              <p className="text-xl text-gray-300 font-semibold">Revature · Full-time</p>
              <p className="text-lg text-gray-400">Jan 2020 - Oct 2020</p>
              <p className="text-lg text-gray-400">Tampa, Florida, United States</p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
                <li>Developed full-stack web applications using JS, TS, Express, Node.js, Java, Spring Framework and microservice architectures.</li>
                <li>Built mobile-first SPAs with React-Redux following flux-design-pattern.</li>
                <li>Deployed full-stack applications, pipelines, and database integrations on AWS.</li>
                <li>Designed responsive UI/UX with HTML, CSS, Bootstrap, and Material UI, etc.</li>
                <li>Established automated testing frameworks in Jest, Enzyme, and JUnit.</li>
              </ul>
            </motion.div>
            {/* Bright Scholar Edu. San New Institution - Department Manager */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Computer and Science Department Manager</h3>
              <p className="text-xl text-gray-300 font-semibold">Bright Scholar Edu. San New Institution · Full-time</p>
              <p className="text-lg text-gray-400">Jan 2018 - Jan 2020</p>
              <p className="text-lg text-gray-400">Wuhan, China</p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
                <li>Managed professional team of 15+ individuals.</li>
                <li>Developed and maintained school network, website and online tools.</li>
                <li>Oversaw all departmental affair planning and execution.</li>
              </ul>
            </motion.div>
            {/* Bright Scholar Edu. San New Institution - Lecturer */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Computer and Math Lecturer</h3>
              <p className="text-xl text-gray-300 font-semibold">Bright Scholar Edu. San New Institution · Full-time</p>
              <p className="text-lg text-gray-400">Jan 2016 - Jan 2020</p>
              <p className="text-lg text-gray-400">Wuhan, China</p>
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
                <li>Taught AP Computer Science, AP Calculus, AP Statistics, etc.</li>
                <li>Facilitated ongoing development workshops for employees.</li>
              </ul>
            </motion.div>
            {/* Kaplan Higher Edu. No. 6 International Dept. - Department Manager */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Math & Science Department Manager</h3>
              <p className="text-xl text-gray-300 font-semibold">Kaplan Higher Edu. No. 6 International Dept. · Full-time</p>
              <p className="text-lg text-gray-400">Jan 2014 - Aug 2016</p>
              <p className="text-lg text-gray-400">Wuhan, China</p>
            </motion.div>
            {/* Kaplan Higher Edu. No. 6 International Dept. - Lecturer */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Math and Science Lecturer</h3>
              <p className="text-xl text-gray-300 font-semibold">Kaplan Higher Edu. No. 6 International Dept. · Full-time</p>
              <p className="text-lg text-gray-400">Aug 2011 - Jan 2014</p>
              <p className="text-lg text-gray-400">Wuhan, China</p>
            </motion.div>
            {/* Polk State College */}
            <motion.div className="mb-8" whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-bold text-white">Computer, Math and Science Tutor</h3>
              <p className="text-xl text-gray-300 font-semibold">Polk State College · Full-time</p>
              <p className="text-lg text-gray-400">Jan 2007 - Jan 2011</p>
              <p className="text-lg text-gray-400">Lakeland, Florida, United States</p>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Experience; 
