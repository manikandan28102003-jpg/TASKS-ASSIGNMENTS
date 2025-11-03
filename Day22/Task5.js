class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Employee Name: ${this.name}, Salary: $${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  displayInfo() {
    console.log(`Manager Name: ${this.name}, Salary: $${this.salary}, Department: ${this.department}`);
  }
}

// Example usage
const mgr1 = new Manager("Manikandan", 95000, "Engineering");
mgr1.displayInfo();
