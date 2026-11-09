const penceString = "399p";    

const penceStringWithoutTrailingP = penceString.substring(    
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// L1. const penceString = "399p" --> initializes a string variable with the value "399p". The quotation marks mean the value is a string.
// L3. const penceStringWithoutTrailingP = penceString.substring( : creates a new variable that will provide a result after executing the operation/expression after the = sign.
          // penceString.substring: starts taking just part of the original string
// L4. 0, -->   this indicates the start of the substring, which in this case 0 means to start the substring with the first character
// L5. penceString.length - 1 --> indicates the end of the substring, means that 1 less character from the end of the string or 4-1 = 3. this removes the "p" from 399p.
// L6. ); --> this indicates the end of the operation or call, means that the value is now just "399"

// L8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
//     --> padding means to add characters until the target string length is reached. this line declares a new variable with the purpose of adding '0' at the start until the string has at least 3 characters. in this case '399' will stay the same as it already has 3 characters. 
// L9. const pounds = paddedPenceNumberString.substring( --> declares a new variable that results from getting parts of the string "399"
// L10. 0, --> start of the substring that will be included. this means "3" from "399" 
// L11. paddedPenceNumberString.length - 2 --> means that the last 2 characters from the end of the string will not be included. this would remove "99" from "399" and only leaves "3"
// L12. ); --> closes the operation call for the expression above it. the result for L9-12 will only leave "3" from the substring "399".

// L14-L16. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
      // L14. const pence --> similar operation to pounds, this declares a new variable 'pence' that is derived/printed from executing the expression on the right. 
      // L14. = paddedPenceNumberString --> equal sign signifies the start of the operation where the reference string is identified to be 'paddedPenceNumberString' from L11 
      // L15. .substring(paddedPenceNumberString.length - 2) --> part of the L11 string will be taken and the new substring will start 2 characters from the end but has no stopping position indicated, giving "99"
      // L16. .padEnd(2, "0"); --> this means that 0 should be added at the end of the substring if the result has less than 2 characters.In this case, this call is not needed as '99' is already composed of 2 characters. The period indicates that a "." is included between the 2 expressions, resulting in ".99"

// L18. console.log(`£${pounds}.${pence}`); --> allows printing of the code in the specified text format, giving "£3.99"
