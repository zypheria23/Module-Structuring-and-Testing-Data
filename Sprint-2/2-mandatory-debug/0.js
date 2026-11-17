// Predict and explain first...

// =============> write your prediction here
// A: inside the function, 'console.log(a * b)' will only display the output of multiplying the 2 number inputs but the resulting value cannot be stored so that it can still be used in other parts of the functions.

// ==== original code ====
// function multiply(a, b) {
//  console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// error: The result of multiplying 10 and 32 is undefined

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}.`);

// output: The result of multiplying 10 and 32 is 320.