function checkNumber(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative");
  }
  return num;
}
checkNumber(5);   
checkNumber(-2);  
