// filename: complexCode.js
// This code implements a complex algorithm to solve the traveling salesman problem using a genetic algorithm.

// Define the cities and their coordinates
const cities = [
  { name: 'City A', x: 0, y: 0 },
  { name: 'City B', x: 1, y: 3 },
  // ... more cities ...
  { name: 'City Z', x: 5, y: 5 },
];

// Generate initial population of 100 solutions
let population = generateInitialPopulation(100);

// Main loop for genetic algorithm
for (let generation = 1; generation <= 1000; generation++) {
  // Evaluate fitness of each solution in the population
  population = evaluateFitness(population);

  // Sort population by fitness (ascending order)
  population.sort((a, b) => a.fitness - b.fitness);

  // Select the top 10% best solutions for elitism
  const elitismCount = Math.ceil(population.length * 0.1);
  const elites = population.slice(0, elitismCount);

  // Create new population from elites and crossover
  let newPopulation = elites;
  while (newPopulation.length < population.length) {
    const parent1 = selectParent();
    const parent2 = selectParent();
    const child = crossover(parent1, parent2);
    newPopulation.push(child);
  }

  // Mutate some individuals in the new population
  for (let i = elitismCount; i < newPopulation.length; i++) {
    if (Math.random() < 0.2) {
      mutate(newPopulation[i]);
    }
  }

  // Replace old population with new population
  population = newPopulation;
}

// Select the best solution after all generations
population = evaluateFitness(population);
population.sort((a, b) => a.fitness - b.fitness);
const bestSolution = population[0];

console.log('Best solution:', bestSolution);

// --------------------- Helper Functions ---------------------

function generateInitialPopulation(populationSize) {
  const population = [];

  for (let i = 0; i < populationSize; i++) {
    const solution = [...cities];
    shuffle(solution); // Randomize the order of cities
    population.push(solution);
  }

  return population;
}

function evaluateFitness(population) {
  for (const solution of population) {
    let totalDistance = 0;

    for (let i = 0; i < solution.length - 1; i++) {
      const start = solution[i];
      const end = solution[i + 1];
      const distance = getDistance(start, end);
      totalDistance += distance;
    }

    solution.fitness = totalDistance;
  }

  return population;
}

function getDistance(city1, city2) {
  const dx = city1.x - city2.x;
  const dy = city1.y - city2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function selectParent() {
  // Tournament selection - randomly select two individuals and choose the one with the best fitness
  const tournamentSize = 5;
  const candidates = [];

  for (let i = 0; i < tournamentSize; i++) {
    const index = Math.floor(Math.random() * population.length);
    candidates.push(population[index]);
  }

  candidates.sort((a, b) => a.fitness - b.fitness);
  return candidates[0];
}

function crossover(parent1, parent2) {
  // Order crossover (OX) - create a child from two parents by preserving a subset from the first parent
  const startPos = Math.floor(Math.random() * parent1.length);
  const endPos = Math.floor(Math.random() * parent1.length);

  const child = [...parent1];
  for (let i = 0; i < parent2.length; i++) {
    const city = parent2[i];
    if (i >= startPos && i <= endPos) {
      child[i] = null; // Mark positions to be replaced later
    }

    if (!child.includes(city)) {
      for (let j = startPos; j <= endPos; j++) {
        if (child[j] === null) {
          child[j] = city;
          break;
        }
      }
    }
  }

  return child;
}

function mutate(solution) {
  // Swap mutation - swap the positions of two randomly selected cities
  const index1 = Math.floor(Math.random() * solution.length);
  let index2 = Math.floor(Math.random() * solution.length);

  while (index2 === index1) {
    index2 = Math.floor(Math.random() * solution.length);
  }

  [solution[index1], solution[index2]] = [solution[index2], solution[index1]];
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// ... more helper functions if needed ...