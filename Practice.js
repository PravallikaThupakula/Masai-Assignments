console.log(`${5 + 7 - 12}`); 
const message = `
Line 1
Line 2
Line 3
`;
console.log(message);


const firstname = "John";
const lastname = "Doe";
console.log(`${firstname} ${lastname}`);


const square = n => n * n;
const obj1 = {
    value: 50,
    test: () => console.log(this.value) 
};
obj1.test();


const obj2 = {
    value: 50,
    test() {
        console.log(this.value); 
    }
};
obj2.test();


const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);


const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(5, 20, 7)); 


const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);


const info = {};
console.log(info?.details?.email); 


for (var i = 0; i < 3; i++) {}
console.log(i); 


for (let j = 0; j < 3; j++) {}

let speed;
speed = kmph > 60 ? "Fast" : "Normal";


const status = age >= 18 ? "Adult" : "Minor";


const checkNumber = n =>
    n > 0 ? "Positive" :
    n === 0 ? "Zero" :
    "Negative";

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];

const A = ["x", "y"];
const B = ["z"];
const combinedAB = [...A, ...B];


const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));



const user = { id: 101, sta: "active" };
const { id, sta } = user;


const id2 = 101;
const role = "admin";
const user2 = { id2, role };

const person = {
    name: "Sam",
    age: 25,
    greet() {
        console.log("Hello!");
    }
};
person.greet();



console.log(`Today's date: ${new Date().toDateString()}`);

const NAME = "Alice";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


const add = (a, b) => a + b;

const isAdult = age => age >= 18;

const double = n => n * 2;
const arrClone = [...nums];
const newArray = [100, ...nums];
const objA = { p: 1, q: 2 };
const objB = { q: 99, r: 3 };
const mergedObj = { ...objA, ...objB }; 

const userX = {
    name: "Alex",
    address: { city: "Bangalore" }
};
console.log(userX?.address?.city);
console.log(userX?.job?.title); 


const car = { brand: "BMW" };
console.log(car.engine?.model); 