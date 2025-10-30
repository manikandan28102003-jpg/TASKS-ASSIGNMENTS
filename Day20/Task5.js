
//callback function

function Username(name) {
  console.log("This is " + name);
}

function userInput(callback) {
  let name = "Manikandan";
  callback(name);
}

userInput(Username);