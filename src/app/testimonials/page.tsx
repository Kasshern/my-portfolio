"use client";

import React from 'react';
import PageTransition from '../../components/PageTransition';
import { motion } from 'framer-motion';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at TechCorp",
      image: "/testimonials/john.jpg",
      quote: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional.",
      rating: 5
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      image: "/testimonials/jane.jpg",
      quote: "The quality of work delivered exceeded our expectations. Highly recommended for any web development project.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      role: "Startup Founder",
      image: "/testimonials/mike.jpg",
      quote: "Professional, responsive, and incredibly skilled. Would definitely work together again in the future.",
      rating: 5
    }
  ];

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <motion.div
          className="max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Testimonials
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full overflow-hidden mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="font-semibold"
                      variants={itemVariants}
                    >
                      {testimonial.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm"
                      variants={itemVariants}
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex mb-4"
                  variants={itemVariants}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>

                <motion.blockquote 
                  className="text-gray-600 italic"
                  variants={itemVariants}
                >
                  &quot;{testimonial.quote}&quot;
                </motion.blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Testimonials; 
