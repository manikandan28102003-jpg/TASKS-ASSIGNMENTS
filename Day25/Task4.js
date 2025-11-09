class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NameError extends ValidationError {
  constructor(message = "Invalid name input") {
    super(message);
    this.name = "NameError";
  }
}

class EmailError extends ValidationError {
  constructor(message = "Invalid email input") {
    super(message);
    this.name = "EmailError";
  }
}
validateUserInput("", "mk@example.com");
// Throws NameError: Invalid name: Must be a non-empty string.

validateUserInput("mani", "mk.com");
// Throws EmailError: Invalid email: Must follow standard email format (e.g., user@example.com).

