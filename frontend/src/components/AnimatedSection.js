import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// We add a 'direction' prop to control where the animation comes from
const AnimatedSection = ({ children, className, direction = 'up' }) => {
  const { ref, inView } = useInView({
    // CHANGE: triggerOnce is now false, so it animates every time
    triggerOnce: false, 
    threshold: 0.15, // How much of the item must be visible to trigger
  });

  const variants = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      // We choose the variant based on the 'direction' prop
      variants={variants[direction]} 
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;