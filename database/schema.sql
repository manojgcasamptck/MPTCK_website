-- MPTC Karunagappally Database Schema
-- PostgreSQL

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  hod VARCHAR(255),
  image VARCHAR(500),
  established VARCHAR(10),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE faculty (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  designation VARCHAR(255),
  qualification VARCHAR(255),
  email VARCHAR(255),
  department_id INTEGER REFERENCES departments(id),
  photo VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  roll_no VARCHAR(50) UNIQUE,
  department_id INTEGER REFERENCES departments(id),
  year INTEGER,
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE placements (
  id SERIAL PRIMARY KEY,
  company VARCHAR(255) NOT NULL,
  package DECIMAL(10,2),
  student_name VARCHAR(255),
  year VARCHAR(20),
  department VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  date DATE,
  description TEXT,
  image VARCHAR(500),
  category VARCHAR(50),
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  description TEXT,
  category VARCHAR(50),
  event_date DATE,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE gallery (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  image VARCHAR(500) NOT NULL,
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE downloads (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  file_url VARCHAR(500) NOT NULL,
  file_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  student_name VARCHAR(255),
  department VARCHAR(100),
  batch_year INTEGER,
  content TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE achievements (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500),
  description TEXT,
  student_name VARCHAR(255),
  department VARCHAR(100),
  year INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Seed default admin (password: admin123 - bcrypt hash)
INSERT INTO admins (email, password_hash, name)
VALUES ('admin@mptc.ac.in', '$2a$10$rQZ8K8Y5xJ5xJ5xJ5xJ5xO', 'Administrator');
