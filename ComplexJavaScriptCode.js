/*
    File Name: ComplexJavaScriptCode.js
    Description: This code demonstrates a complex and elaborate JavaScript program
    Author: Your Name
    Date: Current Date
*/

// Define a class for representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define a function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Define an array of objects representing employees
const employees = [
  { name: "John Doe", age: 30, salary: 50000 },
  { name: "Jane Smith", age: 35, salary: 60000 },
  { name: "Alice Johnson", age: 25, salary: 40000 },
];

// Calculate the average salary of employees using array.reduce()
const averageSalary = employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;

// Create instances of the Person class
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Call the greet() method on the instances
person1.greet();
person2.greet();

// Output the factorial of a number
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}.`);

// Output the average salary of employees
console.log(`The average salary of employees is $${averageSalary}.`);

// Define a function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledNumbers = shuffleArray(numbers);
console.log("Shuffled Numbers:", shuffledNumbers);

// Calculate the sum of an array of numbers
const sum = numbers.reduce((total, number) => total + number, 0);
console.log("Sum of Numbers:", sum);

// Generate a random password
function generateRandomPassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

console.log("Random Password:", generateRandomPassword(8));

// ...rest of the complex code goes here...