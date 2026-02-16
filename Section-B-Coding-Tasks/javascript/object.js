// Task 6.1: Create an object student with properties: name, age, course, and a method
// getDetails() that returns student information.

const student = {

    name: "Rajkumar",
    age: 22,
    course: "Computer Science",

    getDetails: function () {
        return "Name: " + this.name +
               ", Age: " + this.age +
               ", Course: " + this.course;
    }

};
console.log(student.getDetails());


// Task 6.2: Write a function that performs deep cloning of an object (handle nested objects).

function deepClone(obj) {

    // If value is not object or is null, return directly
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Create new object or array
    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);  // Recursive call
        }
    }

    return clone;
}
const student1 = {
    name: "Rajkumar",
    age: 22,
    address: {
        city: "Hyderabad",
        pin: 500001
    },
    marks: [80, 85, 90]
};

const copiedStudent = deepClone(student1);

copiedStudent.address.city = "Delhi";
copiedStudent.marks[0] = 100;

console.log(student.address.city);  // Hyderabad
console.log(student.marks[0]);      // 80


// Task 6.3: Create an object with computed property names based on user input.

function createObject(key, value) {

    const obj = {
        [key]: value
    };

    return obj;
}
const userKey = "age";
const userValue = 25;

const result = createObject(userKey, userValue);

console.log(result);

// Task 6.4: Write code to demonstrate the difference between shallow copy and deep copy
// using an object with nested properties.




function deepClone(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }

    return copy;
}



const student2 = {
    name: "Rajkumar",
    age: 22,
    address: {
        city: "Hyderabad",
        pin: 500001
    }
};

const deepCopy = deepClone(student2);

deepCopy.address.city = "Mumbai";

console.log("Original City After Deep Copy:", student.address.city);


const shallowCopy = { ...student2 };

shallowCopy.name = "Arjun";              // Changes only copy
shallowCopy.address.city = "Delhi";     // Changes nested object

console.log("Original Name:", student2.name);
console.log("Original City:", student2.address.city);

// Task 6.5: Use Object.keys(), Object.values(), and Object.entries() to iterate through an object
// and display its contents.

const student4= {
    name: "Rajkumar",
    age: 22,
    course: "Computer Science"
};

const keys = Object.keys(student4);

for (let i = 0; i < keys.length; i++) {
    console.log("Key:", keys[i]);
}
const values = Object.values(student4);

for (let i = 0; i < values.length; i++) {
    console.log("Value:", values[i]);
}
const entries = Object.entries(student4);

for (let i = 0; i < entries.length; i++) {
    console.log(entries[i][0] + " : " + entries[i][1]);
}

