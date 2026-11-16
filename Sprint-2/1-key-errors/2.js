
// Predict and explain first BEFORE you run any code...
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// A: the current code did not declare the 'num' variable at the start so the function cannot run its supposed operation.

// ==== original code ====
// function square(3) {
//    return num * num;
// }

// =============> write the error message here
// A: SyntaxError: Unexpected number

// =============> explain this error message here
// A: The number 3 is not a valid function parameter. The 'num' variable should be declared at the start so the function do its operation

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));