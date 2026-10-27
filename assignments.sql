CREATE DATABASE study_planner;
USE study_planner;

CREATE TABLE assignments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  subject VARCHAR(100),
  assignment VARCHAR(100),
  deadline DATE,
  status VARCHAR(20)
);