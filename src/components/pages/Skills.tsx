"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, fadeInUpVariants } from '@/lib/animations';

const Skills = () => {

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Solidity",
        "Rust",
        "TypeScript",
        "Python",
        "Golang"
      ]
    },
    {
      title: "Blockchain Development",
      skills: [
        "EVM",
        "Hardhat",
        "Foundry",
        "Upgradeable & Modular Contracts",
        "ERC & Custom Token Standards",
        "Cross-chain architecture",
        "zk-SNARKs/STARKs",
        "MPC",
        "PLONK",
        "Circom",
        "Gnark",
        "Ethers.js",
        "Web3.js",
        "Gas and Opcode Optimization",
        "Yul and ABI/Bytecode"
      ]
    },
    {
      title: "Full-stack Development",
      skills: [
        "React",
        "Redux",
        "Svelte",
        "Next.js",
        "Tailwind",
        "Node.js",
        "Express",
        "NestJS",
        "GraphQL",
        "REST",
        "WebSockets",
        "gRPC",
        "Kafka",
        "Microservices",
        "PostgreSQL",
        "MongoDB",
        "NATS",
        "Jest",
        "JSON RPC"
      ]
    },
    {
      title: "Infrastructure & DevOps",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Helm",
        "GitHub Actions",
        "Jenkins",
        "ArgoCD",
        "RPC Node Ops (Infura, Alchemy, QuickNode)",
        "Terraform",
        "NGINX",
        "HashiCorp Vault"
      ]
    },
    {
      title: "Security & Cryptography",
      skills: [
        "Smart Contract Auditing",
        "Fuzzing",
        "Multisig",
        "Merkle Trees",
        "Merkle Proofs",
        "ECC",
        "ECDSA",
        "EdDSA",
        "Schnorr Signatures",
        "Homomorphic Encryption",
        "zk-Rollups",
        "Threshold Schemes",
        "PKI",
        "Slither",
        "Mythril"
      ]
    },
    {
      title: "Data & Machine Learning",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "NumPy",
        "SciPy",
        "Pandas",
        "NetworkX",
        "Neural Networks",
        "Transformers",
        "Diffusion",
        "Jupyter",
        "Computer Vision",
        "NLP/LLMs",
        "OpenAI & Anthropic APIs"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certified Blockchain Architect",
      issuer: "Blockchain Council",
      date: "Oct 2021",
      embedUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/39873993",
      credentialUrl: "https://www.credential.net/39873993"
    },
    {
      title: "Certified Solidity Developer",
      issuer: "Blockchain Council",
      date: "Oct 2021",
      embedUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/40160356",
      credentialUrl: "https://www.credential.net/40160356"
    },
    {
      title: "Certified NFT Developer",
      issuer: "Blockchain Council",
      date: "Oct 2021",
      embedUrl: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/40671131",
      credentialUrl: "https://www.credential.net/40671131"
    },
    {
      title: "1Z0-808 Java SE 8 Programmer I",
      issuer: "Oracle Certified Associate",
      date: "Aug 2020"
    }
  ];

  return (
    <motion.div
      className="w-full"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1221] via-[#0F0F0F] to-[#050608] p-6 md:p-10 shadow-[0_40px_120px_rgba(0,0,0,0.45)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(251,191,36,0.2),transparent_60%)]" />
        </div>
        <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left column: Skills */}
        <div className="flex-1 space-y-8 md:space-y-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-8"
              variants={fadeInUpVariants}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.h2
                className="text-3xl font-bold mb-6 gradient-text"
                style={{ letterSpacing: '-0.01em' }}
                variants={fadeInUpVariants}
              >
                {category.title}
              </motion.h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 bg-white/5"
                    variants={fadeInUpVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 10px 40px rgba(99, 102, 241, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right column: Awards & Certifications */}
        <div className="flex-1 lg:max-w-md space-y-8">
          {/* Awards Section */}
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 gradient-text"
              style={{ letterSpacing: '-0.01em' }}
              variants={fadeInUpVariants}
            >
              Awards & Achievements
            </motion.h2>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {/* EthAtlanta Hackathon */}
              <motion.div
                className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6"
                variants={fadeInUpVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 20px 60px rgba(99, 102, 241, 0.5)",
                  borderColor: "rgba(99, 102, 241, 0.6)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="text-3xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    🏆
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold gradient-text"
                    style={{ letterSpacing: '-0.01em' }}
                    variants={fadeInUpVariants}
                  >
                    EthAtlanta Hackathon - 1st Place Winner
                  </motion.h3>
                </div>
              </motion.div>

              {/* GM Geek Week */}
              <motion.div
                className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6"
                variants={fadeInUpVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 20px 60px rgba(139, 92, 246, 0.5)",
                  borderColor: "rgba(139, 92, 246, 0.6)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="text-3xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    🏆
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold gradient-text"
                    style={{ letterSpacing: '-0.01em' }}
                    variants={fadeInUpVariants}
                  >
                    GM Geek Week Top-Coder Challenge - 1st Place Winner
                  </motion.h3>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 gradient-text"
              style={{ letterSpacing: '-0.01em' }}
              variants={fadeInUpVariants}
            >
              Certifications
            </motion.h2>
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {certifications.map((cert, index) => {
              const CardWrapper = cert.credentialUrl ? motion.a : motion.div;
              const cardProps = cert.credentialUrl
                ? {
                    href: cert.credentialUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "block rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 cursor-pointer"
                  }
                : {
                    className: "rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 cursor-default"
                  };

              return (
                <CardWrapper
                  key={index}
                  {...cardProps}
                  variants={fadeInUpVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    boxShadow: cert.credentialUrl
                      ? "0 20px 60px rgba(99, 102, 241, 0.4)"
                      : "0 20px 60px rgba(59, 130, 246, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {cert.embedUrl && (
                    <motion.div
                      className="mb-4 rounded-lg overflow-hidden"
                      variants={fadeInUpVariants}
                    >
                      <img
                        src={cert.embedUrl}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </motion.div>
                  )}
                  <motion.h3 className="text-xl font-semibold mb-2 text-[#E5E5E5]" variants={fadeInUpVariants}>
                    {cert.title}
                  </motion.h3>
                  <motion.p className="text-[#A3A3A3] mb-2 font-medium" variants={fadeInUpVariants}>
                    {cert.issuer}
                  </motion.p>
                  <motion.p className="text-[#888888]" variants={fadeInUpVariants}>{cert.date}</motion.p>
                  {cert.credentialUrl && (
                    <motion.p
                      className="text-[#6366F1] mt-3 text-sm font-medium flex items-center gap-1"
                      variants={fadeInUpVariants}
                    >
                      View Credential →
                    </motion.p>
                  )}
                </CardWrapper>
              );
            })}
          </div>
          </div>
        </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
