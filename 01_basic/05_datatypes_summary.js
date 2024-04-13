// Primitive
 // call by value
// 7 types : String , Number, Boolearn , null,  undefined, Symbol , BigInt
/*
Number => number
String => string
Undefined => undefined
Null => object
Boolean => boolean
Symbol => symbol
BigInt => bigint
 */
const score = 100
 const scoreValue= 110.3

 const isLoggedIn = false//The Boolean type represents a logical entity having two values, called true and false.


 const outsideTemp= null//The Null type has exactly one value, called null.

 let userEmail;//Any variable that has not been assigned a value has the value undefined.

 const id =Symbol('123') // Each possible Symbol value is unique and immutable.
 const another = Symbol('123');
 console.log(id === another);

const bigNumber = 234567898n
//The BigInt type represents an integer value. 
//The value may be any size and is not limited to a particular bit-width.
console.log(bigNumber);


// Reference (Non primitive):
/*
Arrays => object
Function => function
Object => object
*/
// Array, Objects , Functions

// array:
const heros= ["shaktiman","naagarj","doga"];

// object:
let myObj={
    name: "harsh",// object which is inside the curly breses.
    age:22,
}

// function:
 const myFunction=function(){
    console.log("hello world");

 }

 console.log(typeof heros);
