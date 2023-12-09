/**
 * This code is an example of a complex JavaScript program that performs various mathematical computations and simulations.
 * Filename: math_simulation.js
 */

// Helper function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Main function to run the simulation
function runSimulation() {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Random Number:", randomNumber);

  // Sum of first N natural numbers
  let sum = (randomNumber * (randomNumber + 1)) / 2;
  console.log("Sum of first", randomNumber, "natural numbers:", sum);

  // Calculate the factorial of the random number
  const fact = factorial(randomNumber);
  console.log(randomNumber + " factorial:", fact);

  // Find the prime numbers up to the random number
  console.log("Prime numbers up to", randomNumber + ":");
  for (let i = 2; i <= randomNumber; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }

  // Perform a simulation of a mathematical function
  console.log("Simulation of a mathematical function:");
  let result = 0;
  for (let x = 0; x <= randomNumber; x++) {
    result += Math.sqrt(x) / Math.log(x);
  }
  console.log("Result:", result);
}

// Call the main function to run the simulation
runSimulation();