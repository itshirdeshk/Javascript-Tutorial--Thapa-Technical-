// Section 6 : Control Statement.

// 1. If-else Statement
// var tomr = "rain";

// if (tomr == "rain") {
//     console.log("Take the Raincoat");
// }
// else {
//     console.log("Don't take the Raincoat");
// }

// Challenge Time
// Question 1 : Write a program to check whether the given year is laep year or not?

// var year = 2020;

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log("The year " + year + " is a leap year");
//         }
//         else {
//             console.log("The year " + year + " is a leap year");
//         }
//     }
//     else {
//         console.log("The year " + year + " is a leap year");
//     }
// }
// else {
//     console.log("The year " + year + " is not a leap year");
// }

// // Question 2 : What is truthy and falsy value in Javascript?

// // We have total 5 falsy values in Javascript...
// // 0, "", undefined, null, NaN, false (is false anyway)

// if (score = 0) {
//     console.log("We lost the Game");
// }
// else {
//     console.log("We won the Game");
// }

// 2. Conditional (ternary) operator (Short Hand of If-else Statement)
// The conditional(ternary) operator is the only Javascript Operator that takes three operands.
// variable name = (condition) ? value1 : value2

// var age = 19;
// console.log((age >= 18) ? "you can vote" : "you can't vote");

// 3. Switch Statement
// var area = "circle";
// var r = 3, l = 3, h = 4;

// switch (area) {
//     case "circle":
//         console.log(3.14 * r ** 2);
//         break;

//     case "rectangle":
//         console.log(l * b);
//         break;

//     case "triangle":
//         console.log((l * b) / 2); 
//         break
//     default:
//         console.log("Enter the correct the Data");
// }

// 4. While loop Statement
// var num = 0;
// // Block Scope
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// 5. Do-While Loop
// var num = 0;

// do{
//     console.log(num);
//     num++;
// } while(num <= 10);

// 6. For Loop
// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Challenge Time
// Question 3 : Write a Program to print Table of any Given number.

// var num = 8;
// console.log("So, the Table of " + num + " is :");

// for (var i = 1; i <= 10; i++) {
//     console.log(num + " X " + i + " = " + num * i);
// }