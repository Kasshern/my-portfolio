"use client";

import React from 'react';
import PageTransition from '../../components/PageTransition';
import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

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
            variants={sectionVariants}
          >
            Work Experience
          </motion.h1>
          <motion.section 
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            variants={sectionVariants}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div variants={sectionVariants}>
              {/* ConsenSys Mesh */}
              <motion.div className="mb-8" whileHover={{ x: 10 }}>
                <h3 className="text-xl font-medium">Zero-Knowledge and Blockchain Engineering Lead</h3>
                <p className="text-gray-600 font-semibold">ConsenSys Mesh · Full-time</p>
                <p className="text-gray-500">Feb 2022 - Present · 3 yrs 3 mos</p>
                <p className="text-gray-500">United States</p>
                <p className="mt-2 text-gray-700">
                  Skills: Solidity · C++ · Rust (Programming Language) · Pandas (Software) · Python (Programming Language) · Go (Programming Language)
                </p>
              </motion.div>
              {/* General Motors */}
              <motion.div className="mb-8" whileHover={{ x: 10 }}>
                <h3 className="text-xl font-medium">Software Development Engineer</h3>
                <p className="text-gray-600 font-semibold">General Motors · Full-time</p>
                <p className="text-gray-500">Oct 2020 - Feb 2022 · 1 yr 5 mos</p>
                <p className="text-gray-500">Austin, Texas, United States</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Architected Java Perfecto Mobile Test Automation Framework with Selenium and Appium that runs automated test scenarios on actual Mobile devices in the Perfecto Cloud</li>
                  <li>Architected Multi-Engine Concurrent Hybrid Test Automation framework capable of running Selenium UI, Perfecto Native Application, and Browser Mobile Emulation tests Concurrently</li>
                  <li>Developed code for hundreds of automated tests interacting with multiple GM website UI, API services, iOS & Android native applications</li>
                  <li>Created standards for optimized automation code and practices that simultaneously increase robustness, longevity, time complexity and space complexity.</li>
                  <li>Aided in CI/CD pipeline integration of automation repositories in order to achieve CT of multiple GM UI, API, and Native Apps</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  Skills: C++
                </p>
              </motion.div>
              {/* Revature */}
              <motion.div className="mb-8" whileHover={{ x: 10 }}>
                <h3 className="text-xl font-medium">Full Stack Software Engineer</h3>
                <p className="text-gray-600 font-semibold">Revature · Full-time</p>
                <p className="text-gray-500">Jan 2020 - Oct 2020 · 10 mos</p>
                <p className="text-gray-500">Remote</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Programmed various server-side web technologies in JavaScript, Typescript, and NodeJS.</li>
                  <li>Implemented scalable server-side frameworks utilizing Express, Ajax technologies, Axios, and RESTful principles.</li>
                  <li>Applied Spring Framework advantages to create and launch web applications in Java.</li>
                  <li>Utilized Hibernate, RabbitMQ, Feign Client, Circuit Breaker Protocols, etc. in Java in order to facilitate communication with web-servers</li>
                  <li>Effectuated potent client-side single-page applications through React.</li>
                  <li>Established React-Redux application providing the consistent and accessible centralized state through adherence to flux-design-pattern principles.</li>
                  <li>Designed HTML, CSS, Bootstrap, and Material UI enhanced client-side UI and UX.</li>
                  <li>Constructed databases and queries with PostgreSQL via Amazon Web Services designed for communication to servers.</li>
                  <li>Ensured application unit accuracy through black-box unit testing with Jest, Enzyme, and JUnit.</li>
                </ul>
              </motion.div>
              {/* Bright Scholar */}
              <motion.div className="mb-8" whileHover={{ x: 10 }}>
                <h3 className="text-xl font-medium">Full Stack Software Engineer</h3>
                <p className="text-gray-600 font-semibold">Bright Scholar Education Holdings Ltd. · Full-time</p>
                <p className="text-gray-500">Jan 2018 - Jan 2020 · 2 yrs 1 mo</p>
                <p className="text-gray-500">Wuhan, Hubei, China</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Designed and implemented scalable server-side web technologies and frameworks with JavaScript, Typescript, Express, NodeJS, Ajax, Axios, etc.</li>
                  <li>Designed and implemented scalable server-side web technologies and frameworks with Java, Spring, Hibernate, RabbitMQ, Feign, etc.</li>
                  <li>Designed and Created Mobile-first Single page applications in React and Redux using the Flux-Design-Pattern principles.</li>
                  <li>Designed HTML, CSS, Bootstrap, and Material UI enhanced client-side UI and UX.</li>
                  <li>Constructed databases and queries with PostgreSQL via Amazon Web Services designed for communication to servers.</li>
                  <li>Ensured application unit accuracy through black-box unit testing with Jest, Enzyme, and JUnit.</li>
                </ul>
              </motion.div>
              {/* San New School */}
              <motion.div className="mb-8" whileHover={{ x: 10 }}>
                <h3 className="text-xl font-medium">Computer and Mathematics Department Manager</h3>
                <p className="text-gray-600 font-semibold">San New School · Full-time</p>
                <p className="text-gray-500">Jan 2016 - Jan 2018 · 2 yrs 1 mo</p>
                <p className="text-gray-500">Wuhan, Hubei, China</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Managed professional team of 15+ individuals.</li>
                  <li>Oversaw all departmental affair planning and execution.</li>
                  <li>Facilitated ongoing development workshops for employees.</li>
                  <li>Developed and maintained school network, website and online tools.</li>
                  <li>Taught AP Computer Science, AP Calculus, AP Statistics, etc.</li>
                </ul>
              </motion.div>
              {/* Kaplan Higher Education */}
              <motion.div className="mb-8" whileHover={{ x: 10 }}>
                <h3 className="text-xl font-medium">Science, Technology, Engineering and Mathematics Department Lead</h3>
                <p className="text-gray-600 font-semibold">Kaplan Higher Education - Wuhan No. 6 High School · Full-time</p>
                <p className="text-gray-500">Jan 2011 - Jan 2016 · 5 yrs 1 mo</p>
                <p className="text-gray-500">Wuhan, Hubei, China</p>
              </motion.div>
              {/* Polk State College */}
              <motion.div className="mb-8" whileHover={{ x: 10 }}>
                <h3 className="text-xl font-medium">Math and Science Tutor</h3>
                <p className="text-gray-600 font-semibold">Polk State College · Full-time</p>
                <p className="text-gray-500">Feb 2007 - Jan 2011 · 4 yrs</p>
                <p className="text-gray-500">Lakeland, Florida, United States</p>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Experience; 
