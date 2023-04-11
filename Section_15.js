// Section 15 : Object Oriented Javascript.

// 1️. What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, we can refer this as an Objects.

// Object is like a school bag where we can store any tyoes of things.

// How to create an Object?

// 1st way :

// let bioData = {
//     myName : {
//         firstName : "Hirdesh",
//         lastName : "Khandelwal"
//     },
//     myAge : 18,
//     getData : function() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
//     }
// }

// console.log(bioData.myName);
// console.log(bioData.myName.firstName);

// 2nd way : 
// No need to write functions as well after es6.

// let bioData = { 
//   myName : "Hirdesh Khandelwal",
//   myAge : 18,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


// What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  

// Example 1 : 
// console.log(this.alert('Awesome'));
// It refers to the current context and that is window global object.

// Example 2 : 
// function myName() {
//     console.log(this);
// }
// myName();

// Example 3 : 

// var myNames = 'Hirdesh';
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// Example 4 : 
// const obj = {
//     myAge : 18,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

// Example 5 : 
// this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();

// Example 6 :

// let bioData = {
//     myName : {
//         realName : "Hirdesh Khandelwal",
//         channelName : 'Hirdesh'
//     },
// things to remember is that the myName is the key and the object is act like a value.
//     myAge : 18,
//     getData (){
//     console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();

