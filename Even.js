const isEven = n => n % 2 === 0;

console.log(isEven(4)); 
console.log(isEven(7)); 

const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";

console.log(result);

const greet = name => `Hello, ${name ? name : "Guest"}`;
console.log(greet("Pravallika")); 
console.log(greet()); 