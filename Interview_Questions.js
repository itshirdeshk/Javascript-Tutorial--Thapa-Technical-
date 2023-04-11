// Interview Questions
// Question 1 : Difference Between null vs undefined?

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless)); // Javascript Bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

// Question 2 : What is NaN?
// console.log("Apple" - "Mango"); 
// When we subtract two Strings then we get NaN - Not a Number.
// NaN is the Property of Global Object.

// var myPhoneNumber = 6396435678;
// var myName = "Hirdesh";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// NaN Practice
// NaN === NaN;
// console.log(NaN === NaN);

// Number.NaN === NaN;
// console.log(Number.NaN === NaN);

// isNaN(NaN);
// console.log(isNaN(NaN));

// isNaN(Number.NaN);
// console.log(isNaN(Number.NaN));

// Number.isNaN(NaN);
// console.log(Number.isNaN(NaN));

// Question 3 : What is the difference between '==' and '==='?
// var a = 10;
// var b = "10";

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(a == b); // It onlt checks the Value.
// console.log(a === b); // It checks both Value and Type.

// Question 4 : Why Functions?
// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with differnt arguments, to produce different results.

// Or

// A Function is the group of resuable code which can be called anywhere in your program. This eliminate the need of writing the same code again and again.

// Question 5 : Differnce between getElementById() and querySelector()?

// What is getElementById()?

// Syntax :
// let element = document.getElementById(id);

// Returns a reference to the element by its ID.
// If the element with the specified ID is not in the document, it will return null.

// What is querySelector()?

// Syntax :
// let element = document.querySelector(selectors);

// Returns the first element within the document that matches the specified group of selectors, or null if no matches are found.

// Question 6 : Difference between addEventListener and onclick?

// addEventListener does not overwrite existing event handlers, whereas onclick overrides any existing onclick = fn event handlers.

// The other significant difference, of course, is that one onclick will always work, whereas add event listener does not work in Internet Explorer before version 9.