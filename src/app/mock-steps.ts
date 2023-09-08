import { Step } from './step';

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create the STEPS array with randomized numbers as names
export const STEPS: Step[] = [
  { id: 1, name: getRandomNumber(900, 12500).toString() },
  { id: 2, name: getRandomNumber(900, 12500).toString() },
  { id: 3, name: getRandomNumber(900, 12500).toString() },
  { id: 4, name: getRandomNumber(900, 12500).toString() },
  { id: 5, name: getRandomNumber(900, 12500).toString() },
  { id: 6, name: getRandomNumber(900, 12500).toString() },
];
