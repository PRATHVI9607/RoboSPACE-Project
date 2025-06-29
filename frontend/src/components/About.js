import React from 'react';
import './About.css';
import aboutImage from '../assets/about-image.jpg';

// We'll define the gear icon right here as its own little component
const GearIcon = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2V3.5M12 20.5V22M16.95 3.55L16 4.5M6 18L5.05 18.95M20.45 7.05L19.5 8M8 19.5L7.05 20.45M22 12H20.5M3.5 12H2M18.95 18.95L18 18M4.5 6L3.55 7.05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* ADD THE GEARS HERE */}
      <GearIcon className="gear gear-1" />
      <GearIcon className="gear gear-2" />
      
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          RoboSpace is an EdTech initiative focused on transforming education through experiential learning in robotics and automation. We partner with schools to deliver customized programs that blend technology with creativity, preparing students for a tech-driven future.
        </p>
        <div className="vision-mission">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>To make robotics and innovation education accessible to every school and every student.</p>
          </div>
          <div className="mission">
            <h3>Our Mission</h3>
            <p>To inspire young minds to think, build, and solve using real-world STEM applications.</p>
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Students working with robotics" />
      </div>
    </section>
  );
};

export default About;