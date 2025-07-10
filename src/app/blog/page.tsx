"use client";

import React from 'react';
import PageTransition from '../../components/PageTransition';
import { motion } from 'framer-motion';

const Blog = () => {
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

  const blogPosts = [
    {
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js...",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development"
    },
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is shaping the future of web development...",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "AI"
    },
    {
      title: "Mastering TypeScript",
      excerpt: "A comprehensive guide to TypeScript for modern developers...",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Programming"
    }
  ];

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-start min-h-screen p-8">
        <motion.div
          className="max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            variants={itemVariants}
          >
            Blog
          </motion.h1>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-transparent rounded-lg shadow-xl overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-6">
                  <motion.div 
                    className="flex items-center gap-2 mb-4"
                    variants={itemVariants}
                  >
                    <motion.span
                      className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {post.category}
                    </motion.span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </motion.div>

                  <motion.h2 
                    className="text-2xl font-bold mb-2 text-white"
                    variants={itemVariants}
                  >
                    {post.title}
                  </motion.h2>

                  <motion.p 
                    className="text-gray-300 mb-4"
                    variants={itemVariants}
                  >
                    {post.excerpt}
                  </motion.p>

                  <motion.button
                    className="text-blue-400 font-medium hover:text-blue-300"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Blog; 
