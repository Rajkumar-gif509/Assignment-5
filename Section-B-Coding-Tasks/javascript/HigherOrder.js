// Task 4.1: Create a higher-order function repeat(n, action) that takes a number and a
// callback function, and executes the callback n times.

function repeat(n, action) {

    for (let i = 0; i < n; i++) {
        action(i);   // execute callback
    }

}
repeat(3, function (index) {
    console.log("Iteration:", index);
});

// Task 4.2: Create a higher-order function filterArray(arr, condition) where
// condition is a callback function that returns true/false.

function filterArray(arr, condition) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}
const numbers = [1, 2, 3, 4, 5, 6];

const evens = filterArray(numbers, function (num) {
    return num % 2 === 0;
});

console.log(evens);

// Task 4.3: Create a function multiplyBy(factor) that returns another function which
// multiplies its argument by the factor (function returning function).

function multiplyBy(factor) {

    return function (number) {
        return number * factor;
    };

}
const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Task 4.4: Create a higher-order function operate(a, b, operation) where operation is
// a callback that performs different math operations.

function operate(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}

console.log(operate(10, 5, add));  // 15

function subtract(x, y) {
    return x - y;
}

console.log(operate(10, 5, subtract));  // 5

console.log(
    operate(10, 5, (x, y) => x * y)
);  // 50

console.log(
    operate(10, 5, (x, y) => x / y)
);  // 2


// Task 4.5: Implement a custom forEach function that takes an array and a callback function.

function customForEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }

}const numbers1 = [10, 20, 30];

ForEach(numbers1, function (value) {
    console.log(value);
});

