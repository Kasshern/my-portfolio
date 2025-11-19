"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainerVariants, fadeInUpVariants } from '@/lib/animations';

const Projects = () => {

  const projects = [
    {
      title: "1st Place Hackathon Winner - EthAtlanta",
      description: "Placed 1st in the Eth Atl Hackathon. Economic Empowerment. Oct 2021 - Present · 3 yrs 7 mos.",
      link: "https://ethatl.com",
      available: true,
      technologies: ["Ethereum", "Solidity", "Hackathon", "Economic Empowerment"]
    },
    {
      title: "1st Place Geek Week Top Coder Challenge Winner - General Motors",
      description: "Placed 1st in the General Motors Geek Week Top Coder Challenge. Sep 2021 - Present · 3 yrs 8 mos.",
      link: null,
      available: false,
      badge: "Private/Proprietary",
      technologies: ["General Motors", "Top Coder", "Hackathon"]
    },
    {
      title: "Supervised Learning Algorithms for Classification",
      description: "Explored k-Nearest Neighbors (KNN), Neural Networks (NN), and Support Vector Machines (SVM) on the Avila Bible and Stellar Classification datasets. For Stellar Classification, NN and SVM outperformed KNN (96.5%, 96.0%, 88.5%). For Avila Bible, NN outperformed KNN and SVM (97.5%, 78%, 80%). Highlights the importance of algorithm selection and tuning for different data types.",
      link: null,
      available: false,
      badge: "Academic Project",
      technologies: ["Python", "Scikit-learn", "Neural Networks", "SVM", "KNN", "Data Science", "Machine Learning"]
    },
    {
      title: "Randomized Optimization for Machine Learning",
      description: "Behavioral exploration of Randomized Optimization (RO) search algorithms: Simulated Annealing (SA), Random Hill Climbing (RHC), and Genetic Algorithm (GA) applied to the Four Peaks and Knapsack problems, and Neural Network (NN) weight optimization. Analyzed performance metrics such as fitness, loss, accuracy, wall clock time, iterations, and fitness evaluations across tuned hyperparameters, problem sizes, and convergence criteria.",
      link: null,
      available: false,
      badge: "Academic Project",
      technologies: ["Python", "Simulated Annealing", "Random Hill Climbing", "Genetic Algorithm", "Neural Networks", "Optimization", "Machine Learning"]
    },
    {
      title: "Unsupervised Learning & Dimensionality Reduction",
      description: "Analysis of high dimensionality datasets using clustering algorithms (K-Means, Expectation Maximization) and linear dimensionality reduction methods (PCA, ICA, Random Projection). Explored natural groupings and computational complexity on the Avila Bible manuscript and Stellar datasets. Evaluated the impact of reduction and clustering techniques on data characteristics and Neural Network (NN) training outcomes.",
      link: null,
      available: false,
      badge: "Academic Project",
      technologies: ["Python", "K-Means", "Expectation Maximization", "PCA", "ICA", "Random Projection", "Clustering", "Dimensionality Reduction", "Neural Networks", "Machine Learning"]
    },
    {
      title: "Markov Decision Process & Reinforcement Learning",
      description: "Systematic exploration of model-based (Value Iteration, Policy Iteration) and model-free (Q-learning, SARSA) RL algorithms on Markov Decision Processes (MDPs): Blackjack (discrete, stochastic) and CartPole (continuous, adaptive discretization). Analyzed trade-offs in state space, reward structure, convergence, policy stability, and learning efficiency. Provided practical insights for algorithm selection, parameter tuning, and the impact of discretization granularity and reward structure on RL performance.",
      link: null,
      available: false,
      badge: "Academic Project",
      technologies: ["Python", "Reinforcement Learning", "Markov Decision Process", "Value Iteration", "Policy Iteration", "Q-learning", "SARSA", "Blackjack", "CartPole", "Machine Learning"]
    }
  ];

  return (
    <motion.div
      className="w-full"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1221] via-[#111827] to-[#050608] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            variants={fadeInUpVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_60%)]" />
            </div>
            {/* Project image */}
            {project.title.includes('EthAtlanta') ? (
              <Image
                src="/eth_atlanta.png"
                alt="EthAtlanta Hackathon Winner"
                width={400}
                height={192}
                className="h-48 w-full object-cover bg-transparent"
              />
            ) : project.title.includes('Geek Week Top Coder') ? (
              <Image
                src="/top_coder.png"
                alt="Top Coder Challenge Winner"
                width={400}
                height={192}
                className="h-48 w-full object-cover bg-transparent"
              />
            ) : project.title.includes('Supervised Learning') ? (
              <Image
                src="/supervised_learning.png"
                alt="Supervised Learning Algorithms"
                width={400}
                height={192}
                className="h-48 w-full object-cover bg-transparent"
              />
            ) : project.title.includes('Randomized Optimization') ? (
              <Image
                src="/randomized_optimization.png"
                alt="Randomized Optimization for Machine Learning"
                width={400}
                height={192}
                className="h-48 w-full object-cover bg-transparent"
              />
            ) : project.title.includes('Unsupervised Learning') ? (
              <Image
                src="/unsupervised_learning.png"
                alt="Unsupervised Learning & Dimensionality Reduction"
                width={400}
                height={192}
                className="h-48 w-full object-cover bg-transparent"
              />
            ) : project.title.includes('Markov Decision Process') ? (
              <Image
                src="/markov_decision.png"
                alt="Markov Decision Process & Reinforcement Learning"
                width={400}
                height={192}
                className="h-48 w-full object-cover bg-transparent"
              />
            ) : (
              <div className="h-48 bg-transparent"></div>
            )}
            <div className="relative p-6 md:p-8 space-y-4">
              <div className="flex items-start justify-between mb-2">
                <motion.h2
                  className="text-2xl font-bold text-white flex-1"
                  style={{ letterSpacing: '-0.01em' }}
                  whileHover={{
                    background: 'linear-gradient(to right, #6366F1, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {project.title}
                </motion.h2>
                {project.badge && (
                  <span className="ml-2 px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium whitespace-nowrap">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium text-white rounded-full border border-white/10 bg-white/5"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      borderColor: "rgba(255, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              {project.available && project.link ? (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-4 py-2 rounded hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title}`}
                >
                  View Project
                </motion.a>
              ) : (
                <span
                  className="inline-block bg-black/40 text-[#A3A3A3] px-4 py-2 rounded border border-white/10 cursor-not-allowed opacity-70"
                  aria-label={`${project.title} - Not publicly available`}
                >
                  Not Available
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects; 
