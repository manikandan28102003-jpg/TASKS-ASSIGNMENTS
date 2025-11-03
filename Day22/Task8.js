class Student {
  constructor(name, age, grade) {
    // Constructor to initialize student details
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Method to display student details
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

// Creating 3 student objects
const student1 = new Student("Mani", 22, "2th Grade");
const student2 = new Student("soundarya", 21, "1th Grade");
const student3 = new Student("susi", 22, "3th Grade");


student1.display();
student2.display();
student3.display();
