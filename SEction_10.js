// Section 10 : Date and Time in Javascript.

// Javascript Date objects represent a single moment in time in a platform - independent format. 
// Date objects contain a number that represents milliseconds since 1 January 1970 UTC.

// Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()

// new Date(year, month, day, hours, minutes, seconds, miliseconds)
// It takes 7 Arguments.

// new Date(miliseconds)
// We cannot avoid Month section.

// new Date(date String)


// new Date()

// let curDate = new Date();
// console.log(curDate);

// console.log(new Date().toLocaleString()); 
// console.log(new Date().toStringt()); 

// Date.now()
// Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since Janurary 1, 1970 00:00:00 UTC.
// console.log(Date.now());

// new Date(year, month,...)
// 7 number specify year, month, day, hour, second, milliseconds (in that order).

// Note : JavaScript counts months from 0 to 11.

// January is 0 to December is 11.

// let date = new Date(2021, 9, 18, 16, 0, 0);
// console.log(date.toLocaleString());

// new Date(dateString)
// It creates a new date object from a date string.

// let d = new Date("18 October, 2021 16:07:00");
// console.log(d.toLocaleString());

// new Date(milliseconds)
// It creates a new date object as zero time plus milliseconds.

// let d = new Date(0);
// let d = new Date(10000000000);
// let d = new Date(864000000 * 2);

// console.log(d.toLocaleString());


// Dates Method

// const curDate = new Date();

// // How to get the individual Date

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDay());
// console.log(curDate.getDate());


// How to set individual Date

// console.log(curDate.setFullYear(2022));

// // The setFullYear() method can optionally set month and day.
// console.log(curDate.setFullYear(2022, 9, 18));

// console.log(curDate.setMonth(9));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());


// let curTime = new Date();

// How to get individual Time

// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// How to set individual Time
 
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));