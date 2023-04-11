// Section 8 : Arrays in Javascript

// let mySelf = ["Hirdesh Khandelwal", "Male"];

// Array's Subsection

// 1. Traversal in Array (navigate through an array)
// let mySelf = ["Hirdesh Khandelwal", "Male"];
// console.log(mySelf[1]);

// To Find the length of tha Array
// console.log(mySelf.length);

// We use loop to Navigate
// let mySelf = ["Hirdesh Khandelwal", "Male"];
 
// for (let i = 0; i < mySelf.length; i++) {
//     console.log(mySelf[i]);
// }

// After ES6, now we have for...in loop and for...of loop too

// // for..in Loop
// for (let elements in mySelf){
//     console.log(elements);
// }

// // for...of Loop
// for (let elements of mySelf) {
//     console.log(elements);
// }

// forEach() Function
// Calls a Function for Each element in the Array.

// mySelf.forEach(function(element, index, array) {
//     console.log(element + " index : " + index + " " + array);
// })

// mySelf.forEach((element, index, array) => {
//     console.log(element + " index : " + index + " " + array);
// });


// 2. Searching and filtering in an Array

// Array.prototype.indexOf()

// let myFriends = ["Abhishek", "Vaibhav", "Akshar", "Piyush", "Suryansh", "Adarsh", "Priyam"];

// console.log(myFriends.indexOf("Vaibhav"));
// // It will give -1 if none is found.
// console.log(myFriends.indexOf("Hirdesh"));

// // Array.prototype.lastIndexOf()

// console.log(myFriends.indexOf("Vaibhav"));
// // It will give -1 if none is found.
// console.log(myFriends.indexOf("Hirdesh"));

// Array.prototype.includes()
// console.log(myFriends.includes("Akshar"));

// Array.prototype.find()
// const prices = [200,250,300,350,400,450,500,550,600];

// Price < 400
// const findElem = prices.find((Element) => {
//     return Element < 400;
// });
// console.log(findElem);

// const findElem = prices.find((Element) =>  Element < 400);
// console.log(findElem);

// console.log(prices.find((Element) =>  Element < 400));

// console.log(prices.findIndex((Element) =>  Element < 400));

// console.log(prices.find((Element) =>  Element > 1400));
// It will give undefined when it's found Nothing

// console.log(prices.findIndex((Element) =>  Element > 1400));
// It will give -1 when it's found Nothing


// Array.prototype.filter() 
// const prices = [200,250,300,350,400,450,500,550,600];

// let filterPrices = prices.filter((element, index) => {
//     return element < 400;
// })

// console.log(filterPrices);


// 3. How to sort an Array

// Array.prototype.sort()
// This method is only for Strings
// const months = ["March", "April", "November", "May", "June"];
// console.log(months.sort());

// const numArray = [1, 10, 190, 34, 23, 99];
// console.log(numArray.sort());
// However, if numbers are sorted as Strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incoreect result when sorting Numbers.


// 4. Perform CURD (Insert, Replace, Add, Delete)

// Array.Prototype.push()
// It returns the new Length of the Array
// const animals = ["Lion", "Tiger", "Elephant"];

// let count = animals.push("Dog");
// console.log(animals);

// console.log(count);

// Array.prototype.unshift()
// It adds the element in the starting of the Array and returns the length of the array.

// const animals = ["Lion", "Tiger", "Elephant"];

// let count = animals.unshift("Dog");
// console.log(animals);

// console.log(count);

// Array.prototype.pop()
//It removes the last element from the array and return that removed element.
// const animals = ["Lion", "Tiger", "Elephant"];

// console.log(animals);
// console.log(animals.pop());
// console.log(animals);

// Array.prototype.shift()
// It removes the first element from the array and returns that removed element.

// const animals = ["Lion", "Tiger", "Elephant"];

// console.log(animals);
// console.log(animals.shift());
// console.log(animals);

// Challenge Time

// Array.prototype.splice()
// Add or remove elements from the Array.

// 1. Add Dec at the end of an Array?
// 2. What is the return value of Splice method?
// 3. Update march to March (Update)?
// 4. Delete June from an Array?

// const months = ["Jan", "march", "April", "June", "July"];

// Solutions
// 1. Add Dec at the end of an Array?
// const newMonth = months.splice(5, 0, "Dec");
// console.log(months);

// 2. What is the return value of Splice method?
// const newMonth = months.splice(5, 0, "Dec");
// console.log(newMonth);

// 3. Update march to March (Update)?
// const updateMonth = months.splice(1, 1, "March");
// console.log(updateMonth);
// console.log(months);

// 4. Delete June from an Array?
// const dltMonth = months.splice(3, 1);
// console.log(dltMonth);
// console.log(months);


// 4. Map and Reduce Method

// Array.peototype.map()
// It returns the New array without mutating the original array 

// const array1 = [1, 4, 9, 16, 25];

// let newArr = array1.map((element, index, array) => {
//     return element > 9;
// })

// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curEle, index, array) => {
//     return ` Index no. = ${index} and the value is ${curEle} belongs to ${array} `;
// })

// console.log(newArr);


// Challenge Time

// 1. Find the Square Root of the each element in the array?
// let array = [25, 36, 49, 64, 81];

// let arrSqr = array.map((Element) => {
//         return Math.sqrt(Element);
// })

// console.log(arrSqr);

// 2. Multiply each Element by 2 and return only those Elements which are greater than 10?
// let array = [2, 3, 4, 6, 8];

// let array2 = array.map((Element) => {
//     return Element * 2;
// }).filter((Element) => {
//     return Element > 10;
// })

// Another way of writing the above code

// let array2 = array.map((Element) => Element * 2 ).filter((Element) => Element > 10 );

// console.log(array2);

// Array.prototype.reduce()
// It used to flatten the Array means to convert the 3d or 2d array into a single dimensional array.

// The reduce() method excutes a reducer function (that your provide) on each element of the array, resulting in single output value.

// The reducer function takes four arguments: 

// Accumulator
// Current Value
// Current Index
// Source Array

// let arr = [5, 6, 7];

// let sum = arr.reduce((accumulator, Element, index, arr) => {
//     return accumulator = accumulator + Element;
// })

// console.log(sum);

// How to flatten an Array

// const arr = [
//     ["zone_1", "zone_2"],
//     ["zone_3", "zone_4"],
//     ["zone_5", "zone_6"],
//     ["zone7", "zone_8"]
// ];

// let flatArr = arr.reduce((accum, Element) => {
//     return accum.concat(Element);
// })

// console.log(flatArr);