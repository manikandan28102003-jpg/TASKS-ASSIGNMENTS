-- 1. Extract year, month, and day from a birthdate



SELECT
    YEAR('1998-07-14') AS birth_year,
    MONTH('1998-07-14') AS birth_month,
    DAY('1998-07-14') AS birth_day;

--  2. Calculate days between today and your next birthday



SELECT DATEDIFF(
    DATE_FORMAT(CONCAT(YEAR(CURDATE()), '-', MONTH(birthdate), '-', DAY(birthdate)), '%Y-%m-%d'),
    CURDATE()
) AS days_until_birthday
FROM employees
WHERE employee_id = 1;


✔ If result = 45 → birthday is 45 days away.

--  3. Convert a given string to uppercase and lowercase
SQL:
SELECT UPPER('hello world'), LOWER('HELLO WORLD');

JavaScript:
"hello world".toUpperCase(); // "HELLO WORLD"
"HELLO WORLD".toLowerCase(); // "hello world"

-- 4. Replace "bad" with "good" in a sentence
SQL:
SELECT REPLACE('This is a bad example', 'bad', 'good');

JavaScript:
"This is a bad example".replace("bad", "good");

 -- 5. Use padStart() to format roll numbers as 4 digits



let roll = "23";
let formatted = roll.padStart(4, '0');
console.log(formatted); // "0023"