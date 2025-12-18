-- 1️⃣ Procedure that prints all students


CREATE PROCEDURE get_all_students()
BEGIN
    SELECT * FROM students;
END $$

DELIMITER ;


Call:

CALL get_all_students();

-- 2️⃣ Procedure that accepts a department ID and shows all employees


CREATE PROCEDURE get_employees_by_dept(IN dept_id INT)
BEGIN
    SELECT *
    FROM employees
    WHERE department_id = dept_id;
END $$

DELIMITER ;


Call:

CALL get_employees_by_dept(10);

-- 3️⃣ Procedure that returns the highest salary (using OUT)


CREATE PROCEDURE get_highest_salary(OUT max_salary DECIMAL(10,2))
BEGIN
    SELECT MAX(salary)
    INTO max_salary
    FROM employees;
END $$

DELIMITER ;


Call:

CALL get_highest_salary(@max_sal);
SELECT @max_sal AS Highest_Salary;

-- 4️⃣ Procedure with two IN parameters (min_salary, max_salary)


CREATE PROCEDURE employees_salary_range(
    IN min_salary DECIMAL(10,2),
    IN max_salary DECIMAL(10,2)
)
BEGIN
    SELECT *
    FROM employees
    WHERE salary BETWEEN min_salary AND max_salary;
END $$

DELIMITER ;


Call:

CALL employees_salary_range(30000, 60000);

-- 5️⃣ Procedure that updates a student’s phone number


CREATE PROCEDURE update_student_phone(
    IN stu_id INT,
    IN new_phone VARCHAR(15)
)
BEGIN
    UPDATE students
    SET phone = new_phone
    WHERE student_id = stu_id;
END $$