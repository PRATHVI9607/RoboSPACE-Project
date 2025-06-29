import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png'; // Find a cool robotics image for this
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
        <div className="clouds-container">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          🌟 Welcome to RoboSpace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering the next generation through robotics, coding, and hands-on STEM education.
        </motion.p>
        <motion.a 
          href="#partner" 
          className="hero-cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Schedule a Free Demo
        </motion.a>
      </div>
      <div className="hero-image-container">
        <motion.img 
          src={heroImage} 
          alt="Robotics in action" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        />
      </div>
      <div className="custom-shape-divider-bottom-1668462458">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
    </div>
    </section>
  );
};

export default Hero;