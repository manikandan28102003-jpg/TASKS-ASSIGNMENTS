let age = prompt("Enter your age");

if (age === null) {
  alert("You cancelled the input.");
} else if (isNaN(age) || age.trim() === "") {
  alert("Please enter a valid number.");
} else if (age >= 18) {
  alert("You can drive!");
} else {
  alert("You are too young to drive.");
}
