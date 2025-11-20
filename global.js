// 1. Define a global variable age
let age = 20;

// 2. Create a function displayAge that prints the value of age
function displayAge() {
  console.log("Age is:", age);
}

// 3. Call displayAge to show how global execution context works
displayAge();

// Additionally: function to change age
function changeAge() {
  age = 25;  // updating global variable
  console.log("Age after updating:", age);
}

// Call changeAge
changeAge();

// Print age again to show final updated value
console.log("Final age value:", age);