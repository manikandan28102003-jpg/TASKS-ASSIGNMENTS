class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discountPercent) {
    if (discountPercent < 0 || discountPercent > 100) {
      throw new Error("Discount percent must be between 0 and 100.");
    }
    const discounted = this.price * (1 - discountPercent / 100);
    return discounted.toFixed(2); // rounds to 2 decimal places
  }
}

// Example usage
const p = new Product("Laptop", 1200);
console.log(`Original Price: $${p.price}`);
console.log(`Discounted Price (20% off): $${p.discountedPrice(20)}`);
