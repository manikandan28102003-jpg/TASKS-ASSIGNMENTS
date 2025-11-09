function checkNumber(num) {
  if (num > 100) {
    throw new Error("Number is greater than 100!");
  }
  return num;
}

try {
  console.log(checkNumber(50));   // Works fine
  console.log(checkNumber(150));  // Throws an error
} catch (error) {
  console.error("Error:", error.message);
}
