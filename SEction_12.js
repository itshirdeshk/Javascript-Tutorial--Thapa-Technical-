// Section 11 : Document Object Model (DOM) in Javascript.

// 1. Window is the main container or we can say that the global object and any operation related to the entire window can be a part of window object.

// For example, the history, or to find the URL, etc.

// 1. Whereas, the DOM is the child of window object.


// 2. All the members like objects, methods or properties. If they are the part of window object then we do not refer the window object. Since window is the global object so you do not have to write down window - it will be figured out by the runtime.

// For example :
// window.screen or just screen is a small information object about physical screen dimensions.
// window.location giving the current URL.
// window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.


// 2️. Where in the DOM we need to refer the document, if we want to use the document object, methods or properties.

// For example : 
// document.getElementById()

// 3️. Window has methods, properties and object. 
// For example, setTimeout() or setInterval() are the methods.
// Where as Document is the object of the Window and it also has a screen object with properties describing the physical display.


// Now, I know you have a doubt like we have seen the methods and object of the global object that is window. But What about the properties of the Window Object.

// So for example of window object properties are innerHeight, innerWidth and there are many more. 

// Let's see some practical in DOM HTML file.


// DOM vs BOM

// The DOM is the Document Object Model, which deals with the document, the HTML elements themselves, e.g. document and all traversal you would do in it, events, etc.

// For example : 
// Change the background color to red :
// document.body.style.background = "red";


// The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen (as well as some others that vary by browser). 

// OR 

// In simple meaning all the Window operations which comes under BOM are performed usign BOM. 


// Let's see more practical on History object. 

// Functions alert/confirm/prompt are also a part of BOM.
// They are directly not related to the document, but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }


// Navigate through the DOM.

// 1. document.documentElement
// It returns the Element this is the root element of the Document.
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
// list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// Practice Time

// How to check whether an element has child nodes or not?
// We will use hasChildNOdes()

// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 

// const data = document.body.firstElementChild;
// undefined

// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling


// How to search the Elements and the Refrences.

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.getElementsByName();
// document.querySelector();

