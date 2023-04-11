// Section 5 : Operators in Javascript.

// 1. Assignment Operators
// var x = 10;
// var y = 13;

// 2. Arithemetic Opertors
// console.log(10 + 2);
// console.log(10 - 2);
// console.log(10 * 2);
// console.log(10 / 2);
// console.log(10 % 2);

// Increment AND Decrement operator
// Operator : x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), the increment operator increments and reutuns the value before incrementing.

// var num = 15;
// var newNum = num++;

// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = num--;

// console.log(num);
// console.log(newNum);

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = ++num;

// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = --num;

// console.log(num);
// console.log(newNum);

// 3. Comparison Operators
// var a = 10;
// var b = 30;

// // Equal (==) 
// console.log(a == b);

// Other comparision operators are :
// Not Equal (!=)
// Greater than (>)
// Greater than or equals to (>=)
// Less than (<)
// Less than or equals to (<=)  

// 4. Logical Operators

var a = 20;
var b = -30;

// Logical AND (&&) 
// console.log(a > b && b > 0);
// console.log(a > b && b < 0);
// console.log(a > b && b > 0 && a > 0);

// Logical OR (||)
// console.log(a > b || b > 0);
// console.log(a > b || b < 0);
// console.log(a > b || b > 0 || a > 0);

// // Logical NOT (!)
// console.log(a > b || b < 0);
// console.log(!(a > b || b < 0));
// console.log(!true);

// 5. String Operators
// String Concatenation
console.log("Hello " + "World");

// Challenge Time
// Question 1 : Write a program to Swap two numbers.

// var a = 10;
// var b = 20;
// console.log(a);
// console.log(b);

// var c = b;
// b = a;
// a = c;
// console.log(a);
// console.log(b);

// Question 2 : Write a program to Swap two Numbers withour using Third Variable.

var a = 10;
var b = 20;

a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
