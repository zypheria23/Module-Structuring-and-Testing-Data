// Predict and explain first...
  // A: Ideally the function is supposed to return the percentage equivalent of the decimal input. In this case, converting the decimal 0.5 to percentage should return 50%.
// Why will an error occur when this program runs?
// =============> write your prediction here
// A: An error will occur because the variable 'decimalNumber' has already been declared inside the function. Declaring const decimalNumber is a duplication identifier that results in the error.

// Try playing computer with the example to work out what is going on

// === original code ====
//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
//  A: My proposed solution is to transfer "const decimalNumber = 0.5" before the function so that declaring the constant variable 'decimalNumber' widens its scope outside the limits of the function. 

// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  return percentage = `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(decimalNumber));