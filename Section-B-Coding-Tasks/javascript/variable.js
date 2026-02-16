
// Task 2.2:Create a function that demonstrates the difference between var, let, and const in
// loops.

// Keyword	            Scope	            Accessible Outside Loop?
// var	                Function        	Yes
// let               	Block	             No
// const	            Block	             No

function loopDifference() {

    console.log("---- Using var ----");
    for (var i = 0; i < 3; i++) {
        console.log("Inside loop:", i);
    }
    console.log("Outside loop:", i);   // Accessible


    console.log("---- Using let ----");
    for (let j = 0; j < 3; j++) {
        console.log("Inside loop:", j);
    }
    // console.log(j);  // Error (not accessible outside)


    console.log("---- Using const ----");
    for (const k of [0, 1, 2]) {
        console.log("Inside loop:", k);
    }
    // console.log(k);  //  Error (not accessible outside)

}

loopDifference();


// Task 2.3:Write code that demonstrates Temporal Dead Zone with let and const.

// | Keyword | Hoisted | Initialized       | TDZ   |
// | ------- | ------- | ----------------- | ----- |
// | `var`   |  Yes   |  Yes (undefined) |  No  |
// | `let`   |  Yes   |  No              |  Yes |
// | `const` |  Yes   |  No              |  Yes |

function tdzWithLet() {

    console.log(a); // undefined (var works)

    // console.log(b);  ReferenceError (TDZ)

    var a = 10;
    let b = 20;

    console.log("After declaration:");
    console.log(a); // 10
    console.log(b); // 20
}

tdzWithLet();


function tdzWithConst() {

    // console.log(x);  ReferenceError (TDZ)

    const x = 50;

    console.log(x); // 50
}

tdzWithConst();
