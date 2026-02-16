// Task 2.1:Predict and explain the output of the following code:
// console.log(a);
// var a = 10;
// console.log(a);
// console.log(b);
// let b = 20;
// console.log(b);


// | Keyword | Hoisted | Initialized During Hoisting | Access Before Declaration |
// | ------- | ------- | --------------------------- | ------------------------- |
// | `var`   |  Yes   |  undefined                 |  Allowed                 |
// | `let`   |  Yes   |  No                        |  ReferenceError          |
// | `const` | ✅Yes   |  No                        |  ReferenceError          |

// JavaScript hoists variables before execution.

// var a → hoisted and initialized with undefined

// let b → hoisted BUT NOT initialized (in TDZ)

// So internally it becomes:

var a = undefined;

var a=10
console.log(a) //10

console.log(b) // ReferenceError: Cannot access 'b' before initialization

let b = 20;
console.log(b); //Will NOT execute because the program already stopped due to error.

// finally output

undefined
10
// ReferenceError: Cannot access 'b' before initialization


