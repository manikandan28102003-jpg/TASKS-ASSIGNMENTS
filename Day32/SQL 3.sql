-- create database employee;
use employee


CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
);


-- Insert 3 new employees into the employees table

INSERT INTO employees (employee_id, first_name, last_name, salary, hire_date)
VALUES (201, 'John', 'Doe', 45000, '2024-02-10');

INSERT INTO employees (employee_id, first_name, last_name, salary, hire_date)
VALUES (202, 'Priya', 'Sharma', 52000, '2023-05-15');

INSERT INTO employees (employee_id, first_name, last_name, salary, hire_date)
VALUES (203, 'Arjun', 'Singh', 48000, '2022-09-22');

-- SELECT query to display only first_name and hire_date

SELECT first_name, hire_date FROM employees;

-- Increase one employee’s salary using UPDATE

UPDATE employees
SET salary = salary * 1.10
WHERE employee_id = 203;

-- Delete an employee hired before 2021

DELETE FROM employees
WHERE hire_date < '2023-05-15';


-- Sort all employees by salary ascending


SELECT *
FROM employees
ORDER BY salary ASC;







