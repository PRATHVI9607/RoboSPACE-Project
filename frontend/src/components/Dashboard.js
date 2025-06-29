import React from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  if (!user) {
    return (
      <div className="dashboard-container">
        <h2>Please log in to view the dashboard.</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Welcome to your Dashboard, {user.name}!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        This is your personal space. Here you'll find your courses, progress, and upcoming workshops.
      </motion.p>
      <div className="dashboard-grid">
        <motion.div className="dashboard-card" whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}>
          <h3>My Courses</h3>
          <p>You are not enrolled in any courses yet.</p>
        </motion.div>
        <motion.div className="dashboard-card" whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}>
          <h3>My Profile</h3>
          <p>View and edit your profile information.</p>
        </motion.div>
        <motion.div className="dashboard-card" whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}>
          <h3>Resources</h3>
          <p>Access exclusive learning materials.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;