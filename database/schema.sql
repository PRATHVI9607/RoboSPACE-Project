-- RoboSpace Database Schema for Neon PostgreSQL

-- Table for contact/demo requests
CREATE TABLE IF NOT EXISTS contact_requests (
  id SERIAL PRIMARY KEY,
  school_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  location VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending'
);

-- Table for career applications
CREATE TABLE IF NOT EXISTS career_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  position VARCHAR(255) NOT NULL,
  resume_link TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending'
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_requests(email);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_career_email ON career_applications(email);
CREATE INDEX IF NOT EXISTS idx_career_created ON career_applications(created_at);
CREATE INDEX IF NOT EXISTS idx_career_position ON career_applications(position);
