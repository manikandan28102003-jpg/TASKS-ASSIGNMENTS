function makeCounter() {
  let count = 0; // This variable is enclosed in the inner function

  return function() {
    count++;
    return count;
  };
}


const counter1 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


