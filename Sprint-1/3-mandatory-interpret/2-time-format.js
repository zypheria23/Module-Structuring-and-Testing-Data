const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6

// b) How many function calls are there? 1 - console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
    // (a) movie length = 8784 second; (b) = 60 seconds or 1 minute
    // this expression provides the remaining number of seconds that are not divisible by 60.
    // Since 60 seconds is equivalent to 1 minute, this expression would show the balance of seconds that are less than a minute.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    //the movie length is also in the format of seconds, thus subtracting the remaining seconds from the movieLength provides the length of the movie that is still in 60sec format.
    // Since 60 seconds is equivalent to 1 minute, dividing the resulting value by 60 will result in the number of minutes  

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // the variable result represents the total movie length in terms of hours, minutes and seconds, where minutes refer to the remaining minutes that are less than an hour and seconds refer to the remaining seconds that are less than a minute.
    // alternative names: runtime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // the code can work for all values of movieLength provided that the value format is primitive numbers with no commas