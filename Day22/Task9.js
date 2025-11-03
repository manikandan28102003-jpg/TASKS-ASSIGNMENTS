// Base class
class Shape {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(`This is a ${this.name}`);
  }
}

// Subclass
class Circle extends Shape {
  constructor(radius) {
    super("Circle"); 
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Example usage
const circle1 = new Circle(5);
circle1.display();
console.log(`Area of the circle: ${circle1.area().toFixed(2)}`);
