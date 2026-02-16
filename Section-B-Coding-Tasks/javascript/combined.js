// Task 10.1: Create a Bank Account object with the following:
//  Properties: accountNumber, accountHolder, balance
//  Methods: deposit(amount), withdraw(amount), getBalance(), getStatement()
//  Use closures to make balance private
//  Implement proper validation

function BankAccount(accountNumber, accountHolder, initialBalance) {

  // Private variable (not accessible outside)
  let balance = initialBalance;

  // Validate initial balance
  if (typeof initialBalance !== "number" || initialBalance < 0) {
    balance = 0;
  }

  return {

    deposit: function(amount) {
      if (typeof amount !== "number" || amount <= 0) {
        return "Invalid deposit amount";
      }

      balance += amount;
      return `Deposited ₹${amount} successfully`;
    },

    withdraw: function(amount) {
      if (typeof amount !== "number" || amount <= 0) {
        return "Invalid withdrawal amount";
      }

      if (amount > balance) {
        return "Insufficient balance";
      }

      balance -= amount;
      return `Withdrawn ₹${amount} successfully`;
    },

    getBalance: function() {
      return `Current Balance: ₹${balance}`;
    },

    getStatement: function() {
      return `
Account Number: ${accountNumber}
Account Holder: ${accountHolder}
Available Balance: ₹${balance}
      `;
    }

  };
}
const account = BankAccount("1234567890", "Rajkumar", 1000);

console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
console.log(account.getStatement());


// Task 10.2: Create an array of products with properties: id, name, price, category. Implement
// the following:
//  Function to filter products by category

//  Function to find products within a price range
//  Function to calculate total value of all products
//  Function to get the most expensive product
//  Use appropriate array methods


const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Phone", price: 20000, category: "Electronics" },
  { id: 3, name: "Shirt", price: 1000, category: "Clothing" },
  { id: 4, name: "Jeans", price: 2000, category: "Clothing" },
  { id: 5, name: "Shoes", price: 3000, category: "Footwear" },
];

// Function to Filter Products by Category
function filterByCategory(category) {
  return products.filter(product => product.category === category);
}

console.log(filterByCategory("Clothing"));

// Function to Find Products Within Price Range

function productsByPriceRange(min, max) {
  return products.filter(product => product.price >= min && product.price <= max);
}

console.log(productsByPriceRange(1000, 3000));

// Function to Calculate Total Value of All Products
function totalValue() {
  return products.reduce((total, product) => total + product.price, 0);
}

console.log(totalValue());

// Function to Get the Most Expensive Product
function mostExpensiveProduct() {
  return products.reduce((maxProduct, product) => {
    return product.price > maxProduct.price ? product : maxProduct;
  }, products[0]);
}

console.log(mostExpensiveProduct());


// Task 10.3: Create a Student Management System:
//  Array of student objects with: id, name, marks (array of subjects)
//  Calculate average marks for each student using map() and reduce()
//  Filter students with average &gt; 75
//  Find the topper student
//  Generate a report card for each student

const students = [
  { id: 1, name: "John", marks: [80, 70, 90] },
  { id: 2, name: "Jane", marks: [60, 75, 85] },
  { id: 3, name: "Bob", marks: [90, 95, 92] },
  { id: 4, name: "Alice", marks: [50, 65, 70] }
];

// Calculate Average Marks for Each Student

const studentsWithAverage = students.map(student => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / student.marks.length;
  return { ...student, average };
});

console.log(studentsWithAverage);

// Filter Students with Average > 75

const above75 = studentsWithAverage.filter(student => student.average > 75);

console.log(above75);

// Find the Topper Student

const topper = studentsWithAverage.reduce((top, student) => {
  return student.average > top.average ? student : top;
}, studentsWithAverage[0]);

console.log("Topper:", topper);

// Generate Report Card for Each Student

studentsWithAverage.forEach(student => {
  console.log(`
Report Card
------------
Name   : ${student.name}
ID     : ${student.id}
Marks  : ${student.marks.join(", ")}
Average: ${student.average.toFixed(2)}
Grade  : ${student.average >= 90 ? "A+" : student.average >= 75 ? "A" : student.average >= 60 ? "B" : "C"}
`);
});


