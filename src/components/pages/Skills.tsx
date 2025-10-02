"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants, fadeInUpVariants } from '@/lib/animations';

const Skills = () => {

  const skillCategories = [
    {
      title: "Scientific Computing & Programming",
      skills: [
        "Python",
        "C/C++",
        "Rust",
        "MATLAB",
        "Mathematica",
        "R",
        "SQL",
        "Go",
        "Java",
        "TypeScript/JavaScript",
        "Solidity",
        "Bash/Shell",
        "CUDA (GPU/TPU acceleration)",
        "Linux",
        "Cursor",
        "Codex",
        "ClaudeCode"
      ]
    },
    {
      title: "Machine Learning & Data Analysis",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Hugging Face Transformers",
        "NumPy",
        "SciPy",
        "Pandas",
        "NetworkX",
        "Matplotlib",
        "Seaborn",
        "MLflow",
        "Weights & Biases",
        "Neural Networks (CNN, RNN, LSTM, GANs)",
        "Deep Learning",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Reinforcement Learning"
      ]
    },
    {
      title: "Mathematical & Computational Methods",
      skills: [
        "Numerical optimization",
        "Linear algebra",
        "Signal processing",
        "Control theory",
        "Graph algorithms & network analysis",
        "Zero-knowledge cryptography (zk-SNARKs, PLONK, Circom, Gnark)",
        "Multi-Party Computation"
      ]
    },
    {
      title: "Software Engineering & Systems",
      description: "Backend",
      skills: [
        "Node.js",
        "Express",
        "NestJS",
        "Spring Boot",
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "REST",
        "GraphQL",
        "gRPC",
        "WebSockets",
        "Kafka"
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        "React/Redux",
        "Next.js",
        "Vue.js",
        "Svelte",
        "Tailwind CSS",
        "Responsive design",
        "Accessibility (WCAG)"
      ]
    },
    {
      title: "Architecture & Patterns",
      skills: [
        "Microservices",
        "Authentication (OAuth, JWT)",
        "RESTful API Design",
        "GraphQL Schema Design"
      ]
    },
    {
      title: "Cloud Infrastructure & Research Computing",
      skills: [
        "AWS (EC2, Lambda, S3, RDS, CloudFormation)",
        "Docker",
        "Kubernetes",
        "Helm",
        "ArgoCD",
        "CI/CD (GitHub Actions, GitLab CI, Jenkins)",
        "Monitoring (Prometheus)",
        "Serverless",
        "Load balancing",
        "Reproducible research (Jupyter, LaTeX, Git/GitHub, Agile/Scrum)"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certified Blockchain Architect",
      issuer: "Blockchain Council",
      date: "Oct 2021"
    },
    {
      title: "Certified Solidity Developer",
      issuer: "Blockchain Council",
      date: "Oct 2021"
    },
    {
      title: "Certified Smart Contract Developer",
      issuer: "Blockchain Council",
      date: "Oct 2021"
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
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left column: Skills */}
        <div className="flex-1 space-y-8 md:space-y-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[rgba(26,26,26,0.6)] backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-[rgba(255,255,255,0.1)]"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.01 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(to right, #FFFFFF, #E5E5E5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.01em'
                }}
                variants={fadeInUpVariants}
              >
                {category.title}
              </motion.h2>
              {category.description && (
                <p className="text-lg text-gray-400 mb-4">{category.description}</p>
              )}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow cursor-default"
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

        {/* Right column: Certifications */}
        <div className="flex-1 lg:max-w-md">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8"
            style={{
              background: 'linear-gradient(to right, #6366F1, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.01em'
            }}
            variants={fadeInUpVariants}
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 cursor-default"
                variants={fadeInUpVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 className="text-xl font-semibold mb-2 text-gray-900" variants={fadeInUpVariants}>
                  {cert.title}
                </motion.h3>
                <motion.p className="text-gray-600 mb-2 font-medium" variants={fadeInUpVariants}>
                  {cert.issuer}
                </motion.p>
                <motion.p className="text-gray-500" variants={fadeInUpVariants}>{cert.date}</motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
