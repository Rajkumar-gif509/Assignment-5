// Task 7.1: Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
//  Use map() to create a new array with each number squared
//  Use filter() to get only even numbers
//  Use reduce() to find the sum of all numbers
//  Chain map(), filter(), and reduce() to get the sum of squares of even numbers


// Use map() → Square Each Number
// map() returns a new array by transforming each element.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const squared = numbers.map(function(num) {
    return num * num;
});

console.log(squared);

// Use filter() → Get Only Even Numbers
// filter() returns elements that satisfy the condition.

const evens = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evens);

// reduce() combines all elements into a single value.
// Use reduce() → Find Sum of All Numbers
const sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);

// Chain map(), filter(), reduce()
// Sum of squares of even numbers.

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


// Task 7.2: Given an array of objects:
// const users = [
// { name: &quot;John&quot;, age: 25, salary: 50000 },
// { name: &quot;Jane&quot;, age: 30, salary: 60000 },
// { name: &quot;Bob&quot;, age: 35, salary: 55000 },
// { name: &quot;Alice&quot;, age: 28, salary: 65000 }
// ];
//  Use map() to create an array of just names
//  Use filter() to get users with age &gt; 28
//  Use reduce() to calculate total salary
//  Use reduce() to group users by age

const users = [
  { name: "John", age: 25, salary: 50000 },
  { name: "Jane", age: 30, salary: 60000 },
  { name: "Bob", age: 35, salary: 55000 },
  { name: "Alice", age: 28, salary: 65000 }
];

//Use map() → Create Array of Just Names
//map() transforms each object into just the name.
const names = users.map(function(user) {
  return user.name;
});

console.log(names);

//Use filter() → Users with Age > 28
// filter() keeps only users where condition is true.
const ageAbove28 = users.filter(function(user) {
  return user.age > 28;
});

console.log(ageAbove28);


// Use reduce() → Calculate Total Salary
// reduce() accumulates salary values.
const totalSalary = users.reduce(function(total, user) {
  return total + user.salary;
}, 0);

console.log(totalSalary);

// Use reduce() → Group Users by Age
// reduce() builds an object where:
// Key = age
// Value = array of users with that age

const groupedByAge = users.reduce(function(group, user) {

  if (!group[user.age]) {
    group[user.age] = [];
  }

  group[user.age].push(user);

  return group;

}, {});

console.log(groupedByAge);


// Task 7.4: Given an array of students with marks, add 20 grace marks to students who scored
// less than 60, then filter students with marks &gt; 60, and finally calculate the total marks using
// method chaining.

const students = [
  { name: "John", marks: 50 },
  { name: "Jane", marks: 75 },
  { name: "Bob", marks: 40 },
  { name: "Alice", marks: 90 }
];
const totalMarks = students
  .map(function(student) {

    if (student.marks < 60) {
      return {
        name: student.name,
        marks: student.marks + 20  //Add 20 marks to students scoring < 60
      };
    }

    return student;

  })
  .filter(function(student) {
    return student.marks > 60;  //(Bob has 60, so removed)
  })
  .reduce(function(total, student) {
    return total + student.marks;
  }, 0);

console.log(totalMarks);
