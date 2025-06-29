import React from 'react';
import './Partner.css';

const Partner = () => {
  return (
    <section id="partner" className="partner-section">
      <div className="partner-content">
        <h2>Partner With Us</h2>
        <p>Are you a school looking to introduce robotics, AI, or STEM?
          <br />Let’s work together to build your school’s innovation lab and ignite curiosity in your students.
        </p>
        <div className="contact-info">
          <span>📞 Call: [Your Phone Number]</span>
          <span>📧 Email: [Your Email Address]</span>
          <span>📍 Location: [Your Office/City]</span>
        </div>
        <a href="mailto:your-email@example.com?subject=Free Demo Request" className="partner-cta-button">
          👉 Schedule a Free Demo
        </a>
      </div>
    </section>
  );
};

export default Partner;