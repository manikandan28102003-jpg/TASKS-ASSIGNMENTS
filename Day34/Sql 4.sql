
Fetch first_name, salary of employees with salary > 75,000
SELECT first_name, salary
FROM employees
WHERE salary > 75000;

--  2. Get employees whose hire_date is between 2020 and 2022
SELECT *
FROM employees
WHERE hire_date BETWEEN '2020-01-01' AND '2022-12-31';

--  3. List employees from departments 1, 3, and 5 using IN
SELECT *
FROM employees
WHERE department_id IN (1, 3, 5);

-- 4. Get all inactive employees (active = 0)
SELECT *
FROM employees
WHERE active = 0;


SELECT first_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;