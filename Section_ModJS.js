// Now it's time for Modern Javascript

// Features of ECMAScript 2015, also known as ES6.

// 1. LET vs CONST vs VAR

// var myName = "HIrdesh Khandelwal";
// console.log(myName);

// myName = "Hirdesh";
// console.log(myName);


// let myName = "HIrdesh Khandelwal";
// console.log(myName);

// myName = "Hirdesh";
// console.log(myName);


// const myName = "HIrdesh Khandelwal";
// console.log(myName);

// myName = "Hirdesh";
// console.log(myName);


// var => Function Scope
// let and const => Block Scope

// function bioData () {
//     var myFirstName = "Hirdesh";
//     console.log(myFirstName);

//     if (true) {
//         var myLastName = "Khandelwal";
//         console.log("inner " + myFirstName);
//         console.log("inner " + myLastName);
//     }

//     console.log("innerOuter " + myLastName);
// }

// function bioData () {
//     let myFirstName = "Hirdesh";
//     console.log(myFirstName);

//     if (true) {
//         let myLastName = "Khandelwal";
//         console.log("inner " + myFirstName);
//         console.log("inner " + myLastName);
//     }

//     console.log("innerOuter " + myLastName);
// }

// bioData();

// 2. Template Literals (Template Strings)

// for (let num = 1; num <= 10; num++) {
//     let tableOf = 12;
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }

// 3. Default Parameters

// function mult(a,b = 3) {
//     return a * b;
// }

// console.log(mult(2));

// 4. Fat Arrow Function
 
// const sum = () => {
//     let a = 5, b = 5;
//     let sum = a + b;
//     return `The sum of ${a} and ${b} is ${a + b}`
// }

// const sum = () => {
//     let a = 5, b = 5;
//     return `The sum of ${a} and ${b} is ${a + b}`
// }

// const sum = () => `The sum of two number is ${(a = 5) + (b = 5)}`;
// console.log(sum());

// 5. Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Array Destructuring 

// const myBioData = ["Hirdesh", "Khandelwal", 18];
// console.log(myBioData);

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// let [myFName, myLName, myAge, myDegree = "12th"] = myBioData;
// console.log(myFName);
// console.log(myDegree);

// Object Destructuring

// const myBioData = {
//   myFname : 'Hirdesh',
//   myLname : 'Khandelwal',
//   myAge : 26
// }

// let age = myBioData.myAge;
// let myFname = myBioData.myFname;

// let {myFname, myLname, myAge, myDegree = "12th"} = myBioData;
// console.log(myLname);


// 6. Object Properties

// We can now use Dynamic Properties

// let myName = "Hirdesh";
// const myBio = {
//     [myName] : "Hello, How are you?",
//     [20 + 6] : "is my age"
// }

// console.log(myBio);

// No need to write key and value, if both are same.

// let myName = "Hirdesh Khandelwal";
// let myAge = 18;

// const myBio = {
//     myName : myName,
//     myAge : myAge
// }

// const myBio = {myName, myAge}

// console.log(myBio);


// 7. Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];

// 2nd time add one more color on top and tell we need to write it again on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(MyFavColors);


// Features of ES7 or ECMAScript2016.

// 1. Array.prototype.include
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes("red");
// let isPresent = colors.includes("pureple");

// console.log(isPresent);

// 2. **
// console.log(2 ** 2);


// Features of ES8 or ECMAScript2017

// 1. String padding

// const mess = "My name is Hirdesh";
// console.log(mess);
// console.log(mess.padStart(5));
// console.log(mess.padEnd(10));  

// 2. Object.values
// const person = {name : "Fred", age : 16}
// console.log(Object.values(person));

// 3. Object.entries
// const person = {name : "Fred", age : 16}
// console.log(Object.entries(person));


// Features of ES9 or ECMAScript2018

// 1. Rest and Spread Operator now for object too.
// const person = {name : "Fred", age : 16}
// const secPerson = {...person}

// console.log(person);
// console.log(secPerson); 


// Features of ES10 or ECMASript2019

// 1. Array.flat
// Converting 2d and 3d array into one dimensional array.

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// console.log(arr.flat(Infinity));

// 2. Object.fromEntries

// const person = {name : "Fred", age : 16}
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));


// Features of ES11 or ECMAScript2020

// 1. BigInt
let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
console.log(9007199254740991n + 10n);
let newNum = 9007199254740991n + 10n;
console.log(typeof newNum);