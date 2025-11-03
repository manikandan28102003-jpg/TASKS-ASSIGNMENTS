class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  showdetails() {
    console.log(`Employee Name: ${this.name}, Salary: $${this.salary}`);
  }
}

// Example usage:
const emp1 = new Employee("Manikandan", 50000);
emp1.showdetails();
