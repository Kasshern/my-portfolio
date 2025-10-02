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
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column: Skills */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-lg shadow-xl p-8 border border-gray-800/50"
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.01 }}
            >
              <motion.h2 className="text-2xl font-semibold mb-6 text-white" variants={fadeInUpVariants}>
                {category.title}
              </motion.h2>
              {category.description && (
                <p className="text-lg text-gray-400 mb-4">{category.description}</p>
              )}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow cursor-default"
                    variants={fadeInUpVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)",
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
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-white" variants={fadeInUpVariants}>
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
