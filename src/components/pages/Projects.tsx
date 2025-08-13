"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
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

  const projects = [
    {
      title: "1st Place Hackathon Winner - EthAtlanta",
      description: "Placed 1st in the Eth Atl Hackathon. Economic Empowerment. Oct 2021 - Present · 3 yrs 7 mos.",
      link: "https://ethatl.com",
      technologies: ["Ethereum", "Solidity", "Hackathon", "Economic Empowerment"]
    },
    {
      title: "1st Place Geek Week Top Coder Challenge Winner - General Motors",
      description: "Placed 1st in the General Motors Geek Week Top Coder Challenge. Sep 2021 - Present · 3 yrs 8 mos.",
      link: "#",
      technologies: ["General Motors", "Top Coder", "Hackathon"]
    },
    {
      title: "Supervised Learning Algorithms for Classification",
      description: "Explored k-Nearest Neighbors (KNN), Neural Networks (NN), and Support Vector Machines (SVM) on the Avila Bible and Stellar Classification datasets. For Stellar Classification, NN and SVM outperformed KNN (96.5%, 96.0%, 88.5%). For Avila Bible, NN outperformed KNN and SVM (97.5%, 78%, 80%). Highlights the importance of algorithm selection and tuning for different data types.",
      link: "#",
      technologies: ["Python", "Scikit-learn", "Neural Networks", "SVM", "KNN", "Data Science", "Machine Learning"]
    },
    {
      title: "Randomized Optimization for Machine Learning",
      description: "Behavioral exploration of Randomized Optimization (RO) search algorithms: Simulated Annealing (SA), Random Hill Climbing (RHC), and Genetic Algorithm (GA) applied to the Four Peaks and Knapsack problems, and Neural Network (NN) weight optimization. Analyzed performance metrics such as fitness, loss, accuracy, wall clock time, iterations, and fitness evaluations across tuned hyperparameters, problem sizes, and convergence criteria.",
      link: "#",
      technologies: ["Python", "Simulated Annealing", "Random Hill Climbing", "Genetic Algorithm", "Neural Networks", "Optimization", "Machine Learning"]
    },
    {
      title: "Unsupervised Learning & Dimensionality Reduction",
      description: "Analysis of high dimensionality datasets using clustering algorithms (K-Means, Expectation Maximization) and linear dimensionality reduction methods (PCA, ICA, Random Projection). Explored natural groupings and computational complexity on the Avila Bible manuscript and Stellar datasets. Evaluated the impact of reduction and clustering techniques on data characteristics and Neural Network (NN) training outcomes.",
      link: "#",
      technologies: ["Python", "K-Means", "Expectation Maximization", "PCA", "ICA", "Random Projection", "Clustering", "Dimensionality Reduction", "Neural Networks", "Machine Learning"]
    },
    {
      title: "Markov Decision Process & Reinforcement Learning",
      description: "Systematic exploration of model-based (Value Iteration, Policy Iteration) and model-free (Q-learning, SARSA) RL algorithms on Markov Decision Processes (MDPs): Blackjack (discrete, stochastic) and CartPole (continuous, adaptive discretization). Analyzed trade-offs in state space, reward structure, convergence, policy stability, and learning efficiency. Provided practical insights for algorithm selection, parameter tuning, and the impact of discretization granularity and reward structure on RL performance.",
      link: "#",
      technologies: ["Python", "Reinforcement Learning", "Markov Decision Process", "Value Iteration", "Policy Iteration", "Q-learning", "SARSA", "Blackjack", "CartPole", "Machine Learning"]
    }
  ];

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-transparent rounded-lg shadow-xl overflow-hidden"
            variants={projectVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Project image */}
            {project.title.includes('Geek Week Top Coder') ? (
              <Image 
                src="/top_coder.png" 
                alt="Top Coder Challenge Winner" 
                width={400}
                height={192}
                className="h-48 w-full object-contain bg-transparent" 
              />
            ) : (
              <div className="h-48 bg-transparent"></div>
            )}
            <div className="p-6">
              <motion.h2 
                className="text-2xl font-semibold mb-2 text-white"
                whileHover={{ color: "#60A5FA" }}
              >
                {project.title}
              </motion.h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-transparent text-blue-200 rounded-full text-sm border border-blue-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={project.link}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects; 
