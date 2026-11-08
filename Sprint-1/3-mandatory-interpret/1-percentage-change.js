let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // L4 - carPrice.replaceAll(",", "")
    // L4 - Number(carPrice.replaceAll(",", ""))
    // L5 - priceAfterOneYear.replaceAll("," "")
    // L5 - Number(priceAfterOneYear.replaceAll("," ""))
    // L10 - console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // The error is in L5 with the missing comma 
    // Need to add a comma after the first quotation mark within the replaceAll function so that the function can be read properly.

// c) Identify all the lines that are variable reassignment statements
    // L1: carPrice = "10,000"
    // L2: priceAfterOneYear = "8,543"

// d) Identify all the lines that are variable declarations
    // the let variables in lines 1 (carPrice) and 2 (priceAfterOneYear)
        // L1: let carPrice = "10,000";
        // L2: let priceAfterOneYear = "8,543";
    // the const variables in lines 7 (priceDifference) and 8 (percentageChange)
        // L7: const priceDifference = carPrice - priceAfterOneYear;
        // L8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // It removes the comma from the numeric value which will convert the string into a primitive/basic number. It will then allow the succeeding functions to work.