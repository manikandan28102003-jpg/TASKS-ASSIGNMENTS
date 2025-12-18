-- 1️⃣ Create a view that shows student name and marks above 80



CREATE VIEW vw_top_students AS
SELECT student_name, marks
FROM students
WHERE marks > 80;

-- 2️⃣ Write a query to use a view that joins two tables



Create View
CREATE VIEW vw_student_marks AS
SELECT s.student_name, m.marks
FROM students s
JOIN marks m ON s.student_id = m.student_id;

Use the View
SELECT *
FROM vw_student_marks
WHERE marks > 80;

-- 3️⃣ Create a stored procedure that returns product details based on product_id



CREATE PROCEDURE get_product_details(IN p_id INT)
BEGIN
    SELECT *
    FROM products
    WHERE product_id = p_id;
END $$

DELIMITER ;

Call the procedure
CALL get_product_details(101);

-- 4️⃣ Create a function that returns total price = qty * price


CREATE FUNCTION total_price(qty INT, price DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN qty * price;
END $$

DELIMITER ;

-- 5️⃣ Use your function inside a SELECT query



SELECT qty, price, total_price(qty, price) AS total_amount
FROM order_items;