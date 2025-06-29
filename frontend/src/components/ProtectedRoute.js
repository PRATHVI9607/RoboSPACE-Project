import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    // If user is not logged in, redirect them to the home page
    return <Navigate to="/" replace />;
  }

  // If user is logged in, show them the page they wanted to see
  return children;
};

export default ProtectedRoute;