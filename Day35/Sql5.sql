-- 1. Use YEAR() and MONTH() to list employees hired in 2022
SELECT *
FROM employees
WHERE YEAR(hire_date) = 2022;


Optionally also filter by month (example: March 2022):

SELECT *
FROM employees
WHERE YEAR(hire_date) = 2022
  AND MONTH(hire_date) = 3;

--  2. Compute DATEDIFF(NOW(), hire_date) for employee_id = 1
SELECT employee_id, first_name, hire_date,
       DATEDIFF(NOW(), hire_date) AS days_worked
FROM employees
WHERE employee_id = 1;


✔ Interpretation:
If result = 800 → That employee has worked for 800 days since their hire date.

--  3. Trim spaces from email and show rows where TRIM(email)
SELECT email, TRIM(email) AS trimmed_email
FROM employees
WHERE TRIM(email) <> email;


✔ This finds emails that contain leading or trailing spaces.





SELECT emp_code, LPAD(emp_code, 4, '0') AS emp_code_padded
FROM employees;

--  5. Remove all hyphens from phone using REPLACE()
SELECT phone, REPLACE(phone, '-', '') AS cleaned_phone
FROM employees;