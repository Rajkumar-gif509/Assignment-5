// Task 5.1: Create a function processArray(arr, callback) that processes each element
// using the callback function

function processArray(arr, callback) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }

    return result;
}

// Task 5.2: Create a function calculator(a, b, operationCallback) where operations
// (add, subtract, multiply, divide) are passed as callbacks.

function calculator(a, b, operationCallback) {
    return operationCallback(a, b);
}
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Cannot divide by zero";
    }
    return x / y;
}
console.log(calculator(10, 5, add));       // 15
console.log(calculator(10, 5, subtract));  // 5
console.log(calculator(10, 5, multiply));  // 50
console.log(calculator(10, 5, divide));    // 2

// Task 5.3: Simulate asynchronous behavior: Create fetchData(callback) that uses
// setTimeout to mimic API call and executes callback with data after 2 seconds.

function fetchData(callback) {

    console.log("Fetching data...");

    setTimeout(function () {

        const data = {
            id: 1,
            name: "Rajkumar",
            role: "Developer"
        };

        callback(data);

    }, 2000); // 2 seconds delay
}


// Task 5.4: Create downloadFile(filename, onSuccess, onError) that randomly
// succeeds or fails and calls appropriate callback.

function downloadFile(filename, onSuccess, onError) {

    console.log("Starting download:", filename);

    setTimeout(function () {

        const isSuccessful = Math.random() > 0.5;

        if (isSuccessful) {
            onSuccess("File '" + filename + "' downloaded successfully.");
        } else {
            onError("Error downloading file '" + filename + "'.");
        }

    }, 2000); // 2 seconds delay
}
downloadFile(
    "data.txt",

    function (message) {
        console.log("SUCCESS:", message);
    },

    function (error) {
        console.log("ERROR:", error);
    }
);

// Task 5.5: Implement a custom sort function that accepts an array and a comparison
// callback function.

function customSort(arr, compare) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (compare(arr[j], arr[j + 1]) > 0) {

                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }

    return arr;
}
