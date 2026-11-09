const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
    // prediction - the error might be in the slice function, possibly in the type of slice function that should be used for numbers.
// Then run the code and see what error it gives.
    // upon testing, the error shows "cardNumber.slice is not a function at Object"
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
    // my prediction that the error is in the slice function is correct but I was not able to specify which part of the function it points to. So it seems that there must be a specific slice function for letters and numbers to make the code work.
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
    // Per research, the slice function only works for string characters thus the need to convert the numbers to string so that JS can properly read and execute the function.
