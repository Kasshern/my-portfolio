"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, fadeInLeftVariants } from '@/lib/animations';

const Experience = () => {

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
          rotateX: 1,
          rotateY: 1,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* ConsenSys Mesh - Research Scientist & Lead Developer */}
        <motion.div className="mb-12 last:mb-0 relative pl-8 border-l-2 border-[#6366F1]" whileHover={{ x: 10 }}>
          {/* Timeline dot */}
          <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#6366F1]" style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }} />

          <h3 className="text-3xl font-bold mb-3 gradient-text" style={{ letterSpacing: '-0.01em' }}>Research Scientist & Lead Developer</h3>
          <p className="text-xl text-[#E5E5E5] font-semibold mb-1">ConsenSys Mesh · Full-time</p>
          <p className="text-lg text-[#A3A3A3] mb-1">Feb 2022 - Present</p>
          <p className="text-lg text-[#A3A3A3] mb-4">Austin, Texas, United States</p>
          <ul className="list-disc list-inside mt-6 text-gray-300 space-y-3 hanging-indent text-lg">
            <li>Applied zero-knowledge (ZK) proofs and Multi-Party Compute (MPC) research to architect secure Rust/Python/C++ systems for telecommunications and geo-fencing clients, reducing third-party audit time by ~40% and improving data verification accuracy by ~25% across deployments.</li>
            <li>Optimized ZK SNARK circuits and constraint systems in Circom/Gnark, cutting verification costs by ~30% and enabling scalable deployment in production systems.</li>
            <li>Built ML pipelines in PyTorch/NetworkX/SQL to analyze &gt;10M-node graph datasets, improving anomaly detection accuracy by ~10%.</li>
            <li>Co-authored and released novel industry standards on MPC and ZK, leading to adoption by 5+ external companies and integration into cross-industry pilots, with collective usage impacting &gt;100K end users.</li>
            <li>Presented novel MPC, ZK, and P2P architectures at 3 international conventions, increasing visibility of company research and sparking collaborations with external labs.</li>
            <li>Architected integrated ZK proof frameworks with modular Solidity smart contracts and GraphQL/REST APIs, reducing on-chain coordination overhead by ~40% and enabling confidential computation at scale.</li>
            <li>Mentored a team of 5+ engineers, researchers, and product managers, increasing project delivery efficiency by ~30% and establishing engineering best practices reducing production defects by 20%.</li>
            <li>Partnered with C-suite executives to set portfolio-wide standards, improving interoperability and code quality while accelerating roadmap delivery by ~15%.</li>
          </ul>
        </motion.div>

        {/* Midnight Evergreen */}
        <motion.div className="mb-8" whileHover={{ x: 10 }}>
          <h3 className="text-2xl font-bold text-white">Senior Software Engineer</h3>
          <p className="text-xl text-gray-300 font-semibold">Midnight Evergreen · Contract</p>
          <p className="text-lg text-gray-400">Nov 2022 - Jun 2024</p>
          <p className="text-lg text-gray-400">Remote</p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
            <li>Researched and implemented ZK proof systems in Python/Rust/Go for scalable state verification, decreasing consensus validation time by ~30%.</li>
            <li>Designed algorithms for cross-chain communication using gRPC/Kafka/WebSockets, reducing synchronization lag across networks from minutes to under 20 seconds.</li>
            <li>Built distributed systems in C++/Kubernetes/Docker for real-time data handling, supporting throughput of &gt;50,000 transactions per second with &lt;1% error rate.</li>
            <li>Optimized cryptographic operations in C++/CUDA to cut computational overhead by 25%, lowering cloud compute costs by ~$10K annually.</li>
            <li>Applied game-theory models in Python to decentralized networks, and developed interactive simulations in TypeScript/React, increasing participant retention by ~15% through improved incentive structures.</li>
            <li>Coordinated with designers and product managers using Agile/Scrum methods to deliver features, shortening release cycles by ~20%.</li>
          </ul>
        </motion.div>

        {/* General Motors */}
        <motion.div className="mb-8" whileHover={{ x: 10 }}>
          <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
          <p className="text-xl text-gray-300 font-semibold">General Motors · Full-time</p>
          <p className="text-lg text-gray-400">Jan 2020 - Feb 2022</p>
          <p className="text-lg text-gray-400">Austin, Texas, United States</p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
            <li>Developed automated testing frameworks in Java/Spring Boot to validate complex system behaviors, reducing manual testing time by ~50% and saving an estimated ~$2M annually in QA costs.</li>
            <li>Built statistical analysis tools in Python/Pandas/SciPy for performance metrics, enabling engineers to identify and resolve ~30% more defects per release cycle.</li>
            <li>Designed scalable data pipelines with Python, SQL/PostgreSQL, AWS, Docker, and ArgoCD to process &gt;1TB/day of test results, cutting reporting delays from 2 days to 1.</li>
            <li>Created reproducible CI-CD testing environments with Docker/Jenkins/Linux, including a bash/shell scripting and mobile-desktop test engine, reducing integration errors by ~25% and accelerating release cycles.</li>
            <li>Mentored 5+ junior engineers, accelerating onboarding and reducing ramp-up time by ~30%.</li>
            <li>Presented new testing frameworks in Selenium/Pytest/Jest to senior management, securing approval for company-wide adoption.</li>
          </ul>
        </motion.div>

        {/* Bright Scholar Edu. San New Institution */}
        <motion.div className="mb-8" whileHover={{ x: 10 }}>
          <h3 className="text-2xl font-bold text-white">STEM Department Manager & Teacher</h3>
          <p className="text-xl text-gray-300 font-semibold">Bright Scholar Edu. San New Institution · Full-time</p>
          <p className="text-lg text-gray-400">Jan 2016 - Jan 2020</p>
          <p className="text-lg text-gray-400">Wuhan, China</p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
            <li>Taught AP-level math, CS, and physics to 300+ students, improving average exam scores by ~10% year-over-year.</li>
            <li>Developed curriculum integrating computational modeling and MATLAB/Mathematica simulations, raising student engagement (measured by project participation) by ~30%.</li>
            <li>Supervised 20+ student research projects, with 5 achieving recognition at national-level competitions.</li>
            <li>Led workshops on Python/MATLAB/R scientific computing, boosting student coding proficiency scores by ~20%.</li>
            <li>Managed a department of 10+ instructors and resources across 20+ courses, delivering curriculum to 300+ students annually while reducing instructional costs by ~20%.</li>
          </ul>
        </motion.div>

        {/* Kaplan Higher Edu. No. 6 International Dept. */}
        <motion.div className="mb-8" whileHover={{ x: 10 }}>
          <h3 className="text-2xl font-bold text-white">Math & Science Department Teacher</h3>
          <p className="text-xl text-gray-300 font-semibold">Kaplan Higher Edu. No. 6 International Dept. · Full-time</p>
          <p className="text-lg text-gray-400">Jan 2011 - Jan 2016</p>
          <p className="text-lg text-gray-400">Wuhan, China</p>
        </motion.div>

        {/* Polk State College */}
        <motion.div className="mb-8" whileHover={{ x: 10 }}>
          <h3 className="text-2xl font-bold text-white">Computer, Math and Science Tutor</h3>
          <p className="text-xl text-gray-300 font-semibold">Polk State College · Part-time</p>
          <p className="text-lg text-gray-400">Jan 2007 - Jan 2011</p>
          <p className="text-lg text-gray-400">Lakeland, Florida, United States</p>
        </motion.div>

        {/* Baseline Protocol Steering Committee */}
        <motion.div className="mb-8 border-t border-gray-700 pt-8 mt-8" whileHover={{ x: 10 }}>
          <h3 className="text-2xl font-bold text-white">Former Member</h3>
          <p className="text-xl text-gray-300 font-semibold">Baseline Protocol Steering Committee</p>
          <p className="text-lg text-gray-400">Jun 2022 - Jun 2024</p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2 hanging-indent text-xl">
            <li>Collaborated with Microsoft, EY, and ConsenSys to co-author MPC + ZK standards, reducing enterprise integration costs by ~20% and enabling adoption by 3+ companies and startups.</li>
          </ul>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Experience;
