// Task 8.1: Destructure the following array and object:
// const arr = [10, 20, 30, 40, 50];
// const person = {
// firstName: &quot;John&quot;,
// lastName: &quot;Doe&quot;,
// age: 30,
// address: {
// city: &quot;Bangalore&quot;,
// state: &quot;Karnataka&quot;
// }
// };
//  Extract first two elements from array and rest in another array
//  Extract firstName, age, and city from person object
//  Rename firstName to fName during destructuring

const arr = [10, 20, 30, 40, 50];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    city: "Bangalore",
    state: "Karnataka"
  }
};
const [first, second, ...rest] = arr;


// Extract first two elements & rest from array
console.log(first);   // 10
console.log(second);  // 20
console.log(rest);    // [30, 40, 50]

const { firstName, age, address: { city } } = person;


// Extract firstName, age, and city
console.log(firstName); // John
console.log(age);       // 30
console.log(city);      // Bangalore

// Rename firstName to fName        

const { firstName: fName } = person;

console.log(fName); // John


// Array Destructuring
// const [first, second, ...rest] = arr;

// Object Destructuring with renaming and nested object
// const { firstName: fName, age, address: { city } } = person;

console.log(first);    // 10
console.log(second);   // 20
console.log(rest);     // [30, 40, 50]
console.log(fName);    // John
console.log(age);      // 30
console.log(city);     // Bangalore


// Task 8.2: Write a function that accepts an object parameter and uses destructuring in the
// function parameters itself.
function displayUser({ name, age, city }) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("City:", city);
}

const user = {
  name: "John",
  age: 25,
  city: "Hyderabad"
};

displayUser(user);


// Task 8.3: Swap two variables using array destructuring.

let num1 = 5;
let num2 = 10;

[num1, num2] = [num2, num1];

console.log("num1:", num1);
console.log("num2:", num2);
