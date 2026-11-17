// Predict and explain first...
//  =============> write your prediction here
    // Calling the function 'capitalise' is supposed to return the string input with the first character capitalised, specifically: 
    // a) str[0].toUpperCase() - should change the first character [0] of the string input to uppercase
    // b) str.slice(1) - then this expression connects the rest of the string input starting from the 2nd character [1] to the capitalised character 
    // c) return str; - should return the revised string input with the first character in uppercase/capitalised
    // but the current code might have an error due to the duplicate variable identifiers.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
// }

// =============> write your explanation here
  // SyntaxError: Identifier 'str' has already been declared via 'function capitalise(str)'. 
  // 'let str = ...' declared the same identifier again which resulted in an error in the code.

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hola"));