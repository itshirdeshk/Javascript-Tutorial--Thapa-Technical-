// Section : Advance JavaScript.

// 1. Event Propogation (Event Bubbling and Event Capturing)

// 2. Higher Order Function

// Function which takes another function as an arguments is called HOF.
// Wo function jo dusre function ko as an argument accept krta hai use HOF. 

// 3️. Callback Function

// Function which get passed as an argument to another function is called CBF. 
// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. 

// we need to create a calculator

// const add = (a,b) => {
//     return a+b;
// }

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }

// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1, num2, operator) => {
//     return operator(num1, num2);
// }

// calculator(5, 2, subs);
// console.log(calculator(5, 2, subs));

// I have to do the hardcoded for each operation which is bad.
// We will use the callback and the HOF to make it simple to use. 

// Now instead of calling each function indivisually we can call it by simply using one function that is calculator.

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// In the above example, calculator is the higher-order function, which accepts three arguments, the third one being the callback.
// Here the calculator is called the Higher Order Function because it takes another function as an argument.

// And add, sub and mult are called the callback function bcz they are passed as an argument to another fucntion.

// 4. Hoisting in Javascript

// // we have a creation phase and execution phase.

// Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.

// For Example :
// console.log(myName);
// var myName;
// myName = "thapa";

// If we use let instead of var then we get an error
// console.log(myName);
// let myName;
// myName = "thapa";

// How it will be in output during creation phase?

// 1. var myName;
// 2. console.log(myName);
// 3. myName = "HIrdesh";

// In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword instead of var. (The other difference is that variables declared with let are local to the surrounding block, not the entire function.)

// 5. What is Scope Chain and Lexical Scoping in JavaScript? 

// The scope chain is used to resolve the value of variable names in JS.
// Scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code. 

// At the top, we have the Global Scope, which is the window Object in the browser.

// // Lexical Scoping means Now, the inner function can get access to their parent functions variables But the vice-versa is not true.


// For Example :

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"

//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c); //I can't use C 
// }

// first();

// 6. What is Closures in JavaScript 🤔

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

// In other words, a closure gives you access to an outer function’s scope from an inner function. 

// In JavaScript, closures are created every time a function is created, at function creation time.

// For Example :

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a + b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// It same like lexical scoping 

// One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a + b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);

// 7. Asynchronus Javascript

// Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again`);
// }

// fun1();


// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again`);
// }

// fun1();

// 8. Event Loop in Javascript
// This section is completed by ppt..

// 8. Function Currying

// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

// sum(5)(3)(8);

// 9. CallBack Hell 

setTimeout(()=>{
    console.log(`1️ works is done`);    
    setTimeout(()=>{
        console.log(`2️ works is done`); 
        setTimeout(()=>{
            console.log(`3️ works is done`);  
            setTimeout(()=>{
                console.log(`4️ works is done`); 
                setTimeout(()=>{
                    console.log(`5️ works is done`);   
                    setTimeout(()=>{
                        console.log(`6️ works is done`);    
                    }, 1000) 
                }, 1000)   
            }, 1000)  
        }, 1000)   
    }, 1000)
}, 1000)

