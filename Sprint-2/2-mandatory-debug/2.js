// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Since the value of num has been set to 103, evaluating the function would return '3' each time, no matter what the number indicated in the 3 console logs. 


// ==== original code ====
// const num = 103;

// function getLastDigit() {
//  return num.toString().slice(-1);
//}

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// A: The actual output is the same as my prediction. Since num is set to 3 , evaluating the function would return '3' each time, no matter what the number indicated in the 3 console logs. 


// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// A: The last digit of 42 is 2
// A: The last digit of 105 is 5
// A: The last digit of 806 is 6

// Explain why getLastDigit is not working properly - correct the problem
