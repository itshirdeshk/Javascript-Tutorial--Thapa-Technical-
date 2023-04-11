// Section 9 : Strings in Javascript

// Strings can be created as Primitives form String literals or as objects, using the String() constructor.

// let myFirstName = "Hirdesh";
// let myLastName = 'Khandelwal';

// let fullName = new String("Hirdesh Khandelwal");

// console.log(myFirstName);
// console.log(fullName);


// How to find the Length of a String
// String.prototype.length

// let myName = "Hirdesh Khandelwal";
// console.log(myName.length);


// Escape Character
// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// If you don't want to mess than simply use double Quotes

// let anySentence = 'We are the so-called \"Vikings\" from the north.';
// console.log(anySentence);


// How to find a String in a String 
// String.prototype.indexOf()
// It gives -1 if the string is not found.

// const myBioData = "I am a Student";
// console.log(myBioData.indexOf("Student"));

// String.prototype.lastIndexOf()
// It gives -1 if the string is not found.

// const myName = "Hirdesh Khandelwal";
// console.log(myName.lastIndexOf("Khandelwal"));


// How to Search String in a String
// String.prototype.search()
// It gives -1 if the string is not found.

// const myName = "Hirdesh Khandelwal";
// console.log(myName.search("Khandelwal"));
// console.log(myName.search("khandelwal"));


// Extracting String Parts

// There are 3 methods for extracting a part of a String:

// slice(start, end)
// subString(start, end)
// subStr(start, length)

// String.prototype.slice()

// let str = "Apple, Banana, Kiwi";
// let res = str.slice(0,5);

// console.log(res);

// Challenge Time

// Display only 280 characters of a String like the one used in Twitter?

// let myTweet = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus";

// let myActualTweet = myTweet.slice(0, 280);

// console.log(myActualTweet);

// String.prototype.substring()
// It is similar to slice() method but the main difference is that it cannot accept negative indexes.

// let str = "Apple, Banana, Kiwi";
// // let res = str.substring(0,5);
// let res = str.substring(7, -2);

// console.log(res);

// String.prototype.substr()
// It is similar to slice()

// The difference is that the second parameter specifies the length of the extracted part.

// let str = "Apple, Banana, Kiwi";

// // let res = str.substr(0, 4);
// let res = str.substr(-4);
// console.log(res);


// Replacing String Content()

// String.prototype.replace()

// let bioData = "My name is hirdesh Khandelwal";

// let replaceValue = bioData.replace("hirdesh", "Hirdesh");
// console.log(replaceValue);
// console.log(bioData);


// Extracting String Characters

// There are 3 methods to Extracitng Srting Characters:

// charAt(position)
// charCodeAt(position)
// Proeperty access []

// String.prototype.charAt()

// let str = "HELLO WORLD";

// console.log(str.charAt(3));

// String.prototype.charCodeAt()
// Returns the Unicode Value of the specified Stirng

// let str = "Hello";
// console.log(str.charCodeAt(2));

// Challenge Time

// Question : Return the Unicode of the last charartcer of the String.

// let str = "Hirdesh Khandelwal";
// console.log(str.charCodeAt((str.length) - 1)); 

// Property Access
// ECMAScript 5 (2009) alloes property access [ ] on Strings.

// let str = "Hello World";
// console.log(str[0]);


// Other Useful Methods

// let myName = "Hirdesh Khandelwal";

// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// The Concat() method
// Concat() joins two or more strings.

// let fName = "Hirdesh"; 
// let lName = "Khandelwal";
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));

// String.prototype.trim()

// let str = "        Hello World   ";
// console.log(str);
// console.log(str.trim());


// How to convert a String to an Array?

// String.prototype.split()

// let text = "a, b, c, d, e";         // String
// console.log(text.split(","));       // Split on commas
// console.log(text.split(" "));       // Split on spaces
// console.log(text.split("|"));       // Split on pipe