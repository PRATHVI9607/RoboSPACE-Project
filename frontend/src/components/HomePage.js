import React from 'react';

import Hero from './Hero';
import About from './About';
import Partner from './Partner';
import Careers from './Careers';
import AnimatedSection from './AnimatedSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* The About section will slide in from the left */}
      <AnimatedSection direction="left">
        <About />
      </AnimatedSection>
      
      {/* The Partner section will slide up from the bottom */}
      <AnimatedSection direction="up">
        <Partner />
      </AnimatedSection>
      
      {/* The Careers section will slide in from the right */}
      <AnimatedSection direction="right">
        <Careers />
      </AnimatedSection>
    </>
  );
};

export default HomePage;