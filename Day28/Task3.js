// 1. Create an object
const user = {
  name: "ms",
  age: 20,
  email: "ms@example.com",
  preferences: {
    theme: "dark",
    notifications: true
  }
};

// 2. Convert the object to a JSON string
const userJSON = JSON.stringify(user);

// 3. Save the JSON string in localStorage
localStorage.setItem("userData", userJSON);

// 4. Optional: Retrieve it back to check
const retrievedUserJSON = localStorage.getItem("userData");
const retrievedUser = JSON.parse(retrievedUserJSON);

console.log(retrievedUser);
