// Task 7.1: Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
//  Use map() to create a new array with each number squared
//  Use filter() to get only even numbers
//  Use reduce() to find the sum of all numbers
//  Chain map(), filter(), and reduce() to get the sum of squares of even numbers

const numbers = [1,2,3,4,5,6,7,8,9,10];
const squared = numbers.map(function(num) {
    return num * num;
});

console.log(squared);

const evens = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evens);


const sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);


const result = numbers
    .filter(function(num) {
        return num % 2 === 0;
    })
    .map(function(num) {
        return num * num;
    })
    .reduce(function(total, num) {
        return total + num;
    }, 0);

console.log(result);
