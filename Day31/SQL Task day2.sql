



-- Create a table named departments with id, name, and description.

CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Insert three sample departments


INSERT INTO departments (name, description)
VALUES 
('CSE', 'Department of computer science and engineering'),
('EEE', 'Department of electrical and electronics engineering'),
('MECH', 'Department of mechanical');

 SELECT * FROM databasename.departments;

-- Query to show only students from the users table





