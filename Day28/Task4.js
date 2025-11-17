// Example: Assume savedData is a JSON string
let savedData = '{"name":"ms","age":20,"hobbies":["reading","gaming"]}';

// Parse the JSON string into a JavaScript object
let parsedData = JSON.parse(savedData);

// Log the parsed object
console.log(parsedData);

// Accessing properties
console.log(parsedData.name);     
console.log(parsedData.age);      
console.log(parsedData.hobbies);  
