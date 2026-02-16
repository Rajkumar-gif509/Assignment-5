// Task 9.1: Create examples demonstrating type coercion in JavaScript (at least 5 examples).

// String + Number (Implicit Coercion)
// When + is used and one value is a string → number is converted to string.
console.log("5" + 2);

// 2 → "2"
// "5" + "2" → "52"

// String - Number

console.log("5" - 2);

// - operator converts string to number.

// "5" → 5
// 5 - 2 = 3

// Boolean to Number

console.log(true + 1);
console.log(false + 1);

// true → 1
// false → 0

// 1 + 1 = 2
// 0 + 1 = 1

// null and undefined

console.log(null + 1);
console.log(undefined + 1);

// null → 0
// undefined → NaN

// Empty String with Number

console.log("" + 5);
console.log("" - 5);

// + → converts to string
// - → converts to number ("" becomes 0)


// Task 9.2: Write a function that checks the data type of a variable and returns appropriate
// message for all primitive and reference types.


function checkType(value) {

  if (value === null) {
    return "Type is null (primitive)";
  }

  if (Array.isArray(value)) {
    return "Type is Array (reference type)";
  }

  if (value instanceof Date) {
    return "Type is Date (reference type)";
  }

  if (typeof value === "function") {
    return "Type is Function (reference type)";
  }

  if (typeof value === "object") {
    return "Type is Object (reference type)";
  }

  return `Type is ${typeof value} (primitive type)`;
}
console.log(checkType("Hello"));        // string
console.log(checkType(100));            // number
console.log(checkType(true));           // boolean
console.log(checkType(undefined));      // undefined
console.log(checkType(null));           // null
console.log(checkType(10n));            // bigint
console.log(checkType(Symbol("id")));   // symbol
console.log(checkType([1, 2, 3]));      // array
console.log(checkType({ name: "Raj" }));// object
console.log(checkType(function(){}));   // function
console.log(checkType(new Date()));     // date


// Task 9.3: Demonstrate the difference between == and === with 10 different examples.x

// | Expression       | `==` | `===` | Reason               |
// | ---------------- | ---- | ----- | -------------------- |
// | 5 & "5"          | yes    | no       | Type coercion        |
// | true & 1         | yes    | no       | true → 1             |
// | null & undefined | yes   | no     | Special rule         |
// | [] & 0           | yes   | no     | Array → "" → 0       |
// | {} & {}          | no    | no     | Different references |

// Number and String 

console.log(5 == "5");  
console.log(5 === "5");

//  == converts "5" → 5
//  === checks type (number vs string)

// Boolean and Number /
console.log(true == 1);
console.log(true === 1);

// true → 1 in loose comparison

// false and 0
console.log(false == 0);
console.log(false === 0);

// false → 0

// null and undefined
console.log(null == undefined);
console.log(null === undefined);

// Special rule: null == undefined is true
// But types are different


// Empty String and 0
console.log("" == 0);
console.log("" === 0);

// "" → 0 in loose comparison

// Task 9.4: Create a function that identifies truthy and falsy values from an array.

// Function to Identify Truthy and Falsy Values

function checkTruthyFalsy(arr) {

  const truthyValues = [];
  const falsyValues = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i]) {
      truthyValues.push(arr[i]);
    } else {
      falsyValues.push(arr[i]);
    }

  }

  return {
    truthy: truthyValues,
    falsy: falsyValues
  };
}
const values = [
  0,
  1,
  "",
  "Hello",
  null,
  undefined,
  NaN,
  false,
  true,
  [],
  {},
  -10
];

const result = checkTruthyFalsy(values);

console.log("Truthy Values:", result.truthy);
console.log("Falsy Values:", result.falsy);
