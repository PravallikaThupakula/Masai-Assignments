
const username = "Pravallika";
const course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);


const name = "Sam";
const age = 21;

const student = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};

student.greet();



const getFullName = (first, last) =>`${first} ${last};` 

console.log(getFullName("Sam", "Wilson"));