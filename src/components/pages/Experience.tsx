"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, fadeInUpVariants } from '@/lib/animations';

const Experience = () => {

  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "ConsenSys Mesh",
      type: "Full-time",
      period: "February 2022 - September 2025",
      location: "Remote",
      color: "#6366F1",
      responsibilities: [
        "Built production level DeFi and digital asset protocols, including lending, vesting, governance, staking, and yield aggregation systems, and architected cross contract workflows, state machines, and upgradeable system topologies that consistently handled multimillion dollar on-chain value with high reliability and predictable performance.",
        "Designed and implemented Solidity contracts across standard ERC patterns and complex custom architectures, including upgradeable systems, reusable modules, and role based frameworks for DeFi and asset management, applying gas, storage, and security optimizations that produced steady efficiency improvements in the range of 5–15%.",
        "Developed and optimized zk-SNARK and STARK circuits using Circom, Gnark, and PLONK proving systems for confidential transactions and state transitions, and integrated proof generation, smart contract verifiers, and supporting Web3 layers into upgradeable asset systems, providing sustained improvements to privacy and operational efficiency.",
        "Built full-stack Web3 applications using React, TypeScript, and Ethers.js, integrating multisig workflows, governance modules, staking and vesting logic, and real time chain analytics with off chain indexers, yielding secure transaction flows and responsive UI that supported large active user bases with 10–20% higher throughput across product cycles.",
        "Architected Rust and Go backend systems and cryptographic libraries for distributed key management, threshold signatures, and custody grade wallet infrastructure, and delivered reliable multi-party coordination and secure execution paths that improved system resiliency and reduced operational overhead typically in the range of 10–20%.",
        "Led TDD driven audits and automated Hardhat and Foundry pipelines with fuzzing and invariants, and established audit ready testing standards that consistently surfaced critical issues early and increased overall code reliability.",
        "Constructed Docker, Kubernetes, Helm, and ArgoCD pipelines for smart contract and backend deployments. Implemented stable node operations, monitoring, and system failsafes that improved deployment consistency and reduced operational incidents."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Midnight Evergreen",
      type: "Contract",
      period: "November 2022 - June 2024",
      location: "Remote",
      color: "#8B5CF6",
      responsibilities: [
        "Built Solidity smart contract systems for a blockchain MMO economy, enabling interoperable assets, on-chain marketplaces, crafting and progression mechanics, and cross title item mobility across an EVM compatible game universe. Consistently delivered stable live operations (99% uptime) under high player activity.",
        "Designed tokenized progression frameworks, including time weighted staking, multiplier curves, and portable asset entitlements, improving long term player engagement by a 10–25% margin across seasons and game titles.",
        "Architected chain-agnostic asset transport workflows systems using secure escrow, mint and burn processes, and state synchronization, and delivered low latency reliable asset movement across multiple EVM environments.",
        "Integrated zero-knowledge verification for private player actions and asset state proofs. Implemented lightweight ZK validation that reduced cheating vectors while maintaining decentralization and fair gameplay.",
        "Optimized Solidity storage layouts, memory access patterns, and opcode paths, and batching to reduce gas and transactional overhead, improving cost efficiency for high volume player interactions, typically reducing operational gas usage by 10–15%.",
        "Developed comprehensive Hardhat and Foundry testing suites with fuzzing, invariants, and simulation driven validation that surfaced systemic risks and correctness issues early in development, reducing defects by 5–10% during live operations.",
        "Integrated smart contract systems, zero knowledge components, asset transport workflows, progression mechanics, and testing and security pipelines across the full MMO economy stack, ensuring consistent state behavior, reliable performance, and a cohesive gameplay experience."
      ]
    },
    {
      title: "Software Engineer",
      company: "General Motors",
      type: "Full-time",
      period: "January 2020 - February 2022",
      location: "Remote",
      color: "#EC4899",
      responsibilities: [
        "Built blockchain proof of concept systems for supply chain verification using Ethereum and Hyperledger, and implemented provenance checks and automated audit workflows that improved traceability across supplier networks and reduced manual reconciliation effort by roughly 50%.",
        "Contributed to full stack development across TypeScript front ends and Java and Spring Boot back ends, and built dashboards, REST APIs, and operational tools that supported engineering and manufacturing workflows and reduced internal reporting time by approximately 20%.",
        "Developed automated testing frameworks for full stack web and mobile applications, and implemented UI automation, API validation, device simulation, and continuous reporting that improved product quality and reduced manual regression testing load by 30–40%.",
        "Created CI and CD pipelines with Jenkins, Docker, and GitHub Actions, and automated build, test, and deployment workflows that accelerated release cycles by 10–15% and reduced integration issues across backend and internal systems.",
        "Developed large scale sensor telemetry pipelines in Python, Pandas, and PostgreSQL to process more than 1 terabyte of vehicle data per day, and automated defect detection and improved manufacturing response times, reducing fault identification lag from hours to minutes and preventing an estimated $1–2 million per year in inefficiencies."
      ]
    },
    {
      title: "Math and Science Department Manager & Lecturer",
      company: "Bright Scholar Edu / Kaplan / Polk State College",
      type: "Full-time",
      period: "January 2011 - January 2020",
      location: "Various Locations",
      color: "#10B981",
      responsibilities: [
        "Managed academic departments (10+ instructors), designed AP-level curricula in computer science and mathematics, and taught hundreds of students in programming and algorithms."
      ]
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
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1221] via-[#111827] to-[#050608] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            variants={fadeInUpVariants}
            whileHover={{
              scale: 1.01,
              boxShadow: `0 40px 120px ${exp.color}40`,
              borderColor: `${exp.color}60`,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 10% 20%, ${exp.color}30, transparent 60%)`
                }}
              />
            </div>

            {/* Vertical accent line on the left */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{
                background: `linear-gradient(to bottom, ${exp.color}00, ${exp.color}, ${exp.color}00)`
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            />

            {/* Glowing dot at the top of the vertical line - static to prevent flickering */}
            <div
              className="absolute left-[-4px] top-12 w-2 h-2 rounded-full"
              style={{
                backgroundColor: exp.color,
                boxShadow: `0 0 15px ${exp.color}, 0 0 30px ${exp.color}80`,
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
                    {exp.title}
                  </motion.h3>
                  <div
                    className="ml-4 w-3 h-3 rounded-full flex-shrink-0 mt-2"
                    style={{
                      backgroundColor: exp.color,
                      boxShadow: `0 0 20px ${exp.color}`,
                      opacity: 0.9,
                    }}
                  />
                </div>
                <p className="text-xl md:text-2xl text-[#E5E5E5] font-semibold mb-2">
                  {exp.company} · {exp.type}
                </p>
                <div className="flex flex-wrap gap-3 text-[#A3A3A3]">
                  <p className="text-base md:text-lg">{exp.period}</p>
                  <span className="text-[#666666]">•</span>
                  <p className="text-base md:text-lg">{exp.location}</p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{
                  background: `linear-gradient(to right, ${exp.color}00, ${exp.color}60, ${exp.color}00)`
                }}
              />

              {/* Responsibilities */}
              <ul className="space-y-4">
                {exp.responsibilities.map((responsibility, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-300 text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: exp.color }}
                    />
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
