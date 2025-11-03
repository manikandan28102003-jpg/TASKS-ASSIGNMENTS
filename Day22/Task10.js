// Student constructor function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

// Existing method using prototype
Student.prototype.display = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
};

// Creating student objects
const student1 = new Student("Mani", 22, "2th Grade");
const student2 = new Student("soundarya", 21, "1th Grade");
const student3 = new Student("susi", 22, "3th Grade");

// Adding a new method dynamically to all Student objects
Student.prototype.isPassed = function() {
  // Example logic: grade >= 10th is passing
  return this.grade.includes("2") || this.grade.includes("1") ? "Passed" : "Failed";
};

// Testing the new method
student1.display();
console.log(student1.isPassed()); // Passed

student2.display();
console.log(student2.isPassed()); // Passed

student3.display();
console.log(student3.isPassed()); // Failed
