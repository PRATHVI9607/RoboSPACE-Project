import React from 'react';
import './Careers.css';

const Careers = () => {
  return (
    <section id="careers" className="careers-section">
      <h2>Join Our Team</h2>
      <p className="careers-intro">We're looking for passionate educators, engineers, and outreach executives.</p>
      <div className="openings">
        <div className="opening-card">
          <h3>Business Development Executive (BDE)</h3>
        </div>
        <div className="opening-card">
          <h3>Robotics Trainer (Part-time/Full-time)</h3>
        </div>
        <div className="opening-card">
          <h3>Intern – Workshop Assistant</h3>
        </div>
      </div>
      <p className="contact-prompt">
        Interested? Send your resume to <a href="mailto:careers@robospace.in">careers@robospace.in</a>
      </p>
    </section>
  );
};

export default Careers;