// Predict and explain first...
//  =============> write your prediction here
// A: The semi-colon after 'return' ends the expression of the function, which cuts off evaluating the sum of inputs a & b

// function sum(a, b) {
//  return;
//  a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//  Actual output: "The sum of 10 and 32 is undefined"

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}.`);