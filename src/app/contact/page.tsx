"use client";

import React, { useState } from 'react';
import PageTransition from '../../components/PageTransition';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-start min-h-screen p-8">
        <motion.div
          className="max-w-2xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            variants={itemVariants}
          >
            Contact Me
          </motion.h1>

          <motion.form 
            className="bg-transparent rounded-lg shadow-xl p-8 mb-8"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <label className="block text-gray-300 font-medium mb-2">Name</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
                whileFocus={{ scale: 1.01 }}
                placeholder="Your name"
              />
            </motion.div>

            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <label className="block text-gray-300 font-medium mb-2">Email</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
                whileFocus={{ scale: 1.01 }}
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <label className="block text-gray-300 font-medium mb-2">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
                whileFocus={{ scale: 1.01 }}
                placeholder="Your message..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div 
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:your.email@example.com"
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/yourusername"
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact; 
