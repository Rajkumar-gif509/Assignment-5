// Task 3.1: Create a function calculator that takes two numbers and an operation (add,
// subtract, multiply, divide) and returns the result. Use default parameters.

function calculator(num1 = 0, num2 = 0, operation = "add") {

    if (operation === "add") {
        return num1 + num2;
    }

    if (operation === "subtract") {
        return num1 - num2;
    }

    if (operation === "multiply") {
        return num1 * num2;
    }

    if (operation === "divide") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    }

    return "Invalid operation";
}

console.log(calculator(10, 5, "add"));       // 15
console.log(calculator(10, 5, "subtract"));  // 5
console.log(calculator(10, 5, "multiply"));  // 50
console.log(calculator(10, 5, "divide"));    // 2

console.log(calculator());                   // 0 (default values)
console.log(calculator(8));                  // 8 (8 + 0)

// Task 3.2: Write an arrow function that takes unlimited numbers as arguments using rest
// parameters and returns their sum.

const sum = (...numbers) => {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
};

console.log(sum(10, 20));              // 30
console.log(sum(5, 5, 5, 5));          // 20
console.log(sum(1, 2, 3, 4, 5));       // 15
console.log(sum());                    // 0

// Task 3.3: Create an IIFE that declares private variables and returns an object with methods
// to access them.

const counter = (function () {

    
    let count = 0;
    let secretMessage = "Private Data";
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        },
        getSecret: function () {
            return secretMessage;
        }
    };

})();

console.log(counter.getCount());   // 0
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getSecret());  // "Private Data"

// Task 3.4: Write a function that demonstrates the difference between function declaration
// and function expression hoisting.

function hoistingDemo() {

   
    console.log(declaredFunction());   
    console.log(expressionFunction()); 

    function declaredFunction() {
        return "I am Function Declaration";
    }

    var expressionFunction = function () {
        return "I am Function Expression";
    };
}

hoistingDemo();

// | Feature                     | Function Declaration | Function Expression  |
// | --------------------------- | -------------------- | -------------------- |
// | Hoisted                     |  Fully              |  Only variable      |
// | Can call before definition? |  Yes                | No                 |
// | Memory phase                | Function stored      | Variable = undefined |

