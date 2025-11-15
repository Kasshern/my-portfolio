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
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* ConsenSys Mesh - Lead Software Engineer */}
        <motion.div className="mb-12 last:mb-0 relative pl-8 border-l-2 border-[#6366F1]" whileHover={{ x: 10 }}>
          {/* Timeline dot */}
          <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#6366F1]" style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }} />

          <h3 className="text-3xl font-bold mb-3 gradient-text" style={{ letterSpacing: '-0.01em' }}>Lead Software Engineer</h3>
          <p className="text-xl text-[#E5E5E5] font-semibold mb-1">ConsenSys Mesh · Full-time</p>
          <p className="text-lg text-[#A3A3A3] mb-1">February 2022 - September 2025</p>
          <p className="text-lg text-[#A3A3A3] mb-4">Remote</p>
          <ul className="list-disc list-inside mt-6 text-gray-300 space-y-3 hanging-indent text-lg">
            <li>Designed and deployed institutional-grade DeFi systems (lending, liquidation, vesting, governance) securing &gt;$10M TVL with zero security incidents.</li>
            <li>Implemented gas-optimized ERC standards (ERC-20/721/4337/2981), reducing deployment and runtime costs by ~25%.</li>
            <li>Architected zk-SNARK/PLONK circuits in Circom and Gnark for confidential transactions, achieving 30%+ additional gas savings.</li>
            <li>Built full-stack dApps (React, TypeScript, Ethers.js) with multisig, governance, and real-time chain data for 100K+ users.</li>
            <li>Developed Rust/Go MPC libraries for distributed key management and threshold signatures.</li>
            <li>Led audits and automated tests (Hardhat, Foundry, fuzzing) with &gt;90% coverage, preventing multiple high-severity issues.</li>
            <li>Presented zk and cryptography work at EthDenver, Devcon, Devconnect.</li>
            <li>Developed DevOps pipelines (Docker, K8s, Helm) ensuring reliable deployments and node ops.</li>
          </ul>
        </motion.div>

        {/* Midnight Evergreen */}
        <motion.div className="mb-12 last:mb-0 relative pl-8 border-l-2 border-[#8B5CF6]" whileHover={{ x: 10 }}>
          {/* Timeline dot */}
          <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#8B5CF6]" style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }} />

          <h3 className="text-3xl font-bold mb-3 gradient-text" style={{ letterSpacing: '-0.01em' }}>Senior Software Engineer</h3>
          <p className="text-xl text-[#E5E5E5] font-semibold mb-1">Midnight Evergreen · Contract</p>
          <p className="text-lg text-[#A3A3A3] mb-1">November 2022 - June 2024</p>
          <p className="text-lg text-[#A3A3A3] mb-4">Remote</p>
          <ul className="list-disc list-inside mt-6 text-gray-300 space-y-3 hanging-indent text-lg">
            <li>Built smart contracts for a blockchain MMO economy enabling interoperable assets, marketplaces, and cross-title item mobility across an EVM-compatible game universe.</li>
            <li>Designed tokenized progression systems (time-weighted staking, multipliers, portable asset ownership), improving retention by ~15%.</li>
            <li>Architected EVM-chain-agnostic asset transport with sub-20s transfer latency and high reliability.</li>
            <li>Integrated zero-knowledge verification for private player actions and asset state proofs to prevent cheating without sacrificing decentralization.</li>
            <li>Optimized Solidity storage, memory, and opcode paths for ~25% gas reduction across large player populations.</li>
            <li>Built robust Foundry/Hardhat test suites with fuzzing and invariants, preventing 10+ critical issues pre-deployment.</li>
            <li>Coordinated audits and maintained zero exploit incidents during live MMO operations.</li>
          </ul>
        </motion.div>

        {/* General Motors */}
        <motion.div className="mb-12 last:mb-0 relative pl-8 border-l-2 border-[#EC4899]" whileHover={{ x: 10 }}>
          {/* Timeline dot */}
          <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#EC4899]" style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)' }} />

          <h3 className="text-3xl font-bold mb-3 gradient-text" style={{ letterSpacing: '-0.01em' }}>Software Engineer</h3>
          <p className="text-xl text-[#E5E5E5] font-semibold mb-1">General Motors · Full-time</p>
          <p className="text-lg text-[#A3A3A3] mb-1">January 2020 - February 2022</p>
          <p className="text-lg text-[#A3A3A3] mb-4">Remote</p>
          <ul className="list-disc list-inside mt-6 text-gray-300 space-y-3 hanging-indent text-lg">
            <li>Built blockchain proof-of-concept for supply-chain verification using Ethereum and Hyperledger, reducing audit latency by 60%.</li>
            <li>Developed large-scale data pipelines (Python, Pandas, PostgreSQL) for sensor telemetry (&gt;1TB/day), automating defect detection and saving $2M/year.</li>
            <li>Created CI/CD pipelines (Jenkins, Docker, GitHub Actions) reducing integration time by 40%.</li>
          </ul>
        </motion.div>

        {/* Early Career - Education */}
        <motion.div className="mb-0 relative pl-8 border-l-2 border-[#10B981]" whileHover={{ x: 10 }}>
          {/* Timeline dot */}
          <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#10B981]" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }} />

          <h3 className="text-3xl font-bold mb-3 gradient-text" style={{ letterSpacing: '-0.01em' }}>Math and Science Department Manager & Lecturer</h3>
          <p className="text-xl text-[#E5E5E5] font-semibold mb-1">Bright Scholar Edu / Kaplan / Polk State College</p>
          <p className="text-lg text-[#A3A3A3] mb-1">January 2011 - January 2020</p>
          <p className="text-lg text-[#A3A3A3] mb-4">Various Locations</p>
          <ul className="list-disc list-inside mt-6 text-gray-300 space-y-3 hanging-indent text-lg">
            <li>Managed academic departments (10+ instructors), designed AP-level curricula in computer science and mathematics, and taught hundreds of students in programming and algorithms.</li>
          </ul>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Experience;
