/* JavaScript variables can be converted to a new variable and another data type:

By the use of a JavaScript function
Automatically by JavaScript itself
*/
//let score=33
//let score ="33"
//let score ="33abc"
let score = null

//console.log(typeof score);
//console.log(typeof (score));

let valueInnumber = Number(score)
//console.log(typeof valueInnumber);
//console.log(valueInnumber);

//"33" => 33
// "33abc" => NaN
// true => 1; false=> 0

let isLoggedIn= "harsh"
let booleanIsLogged = Boolean(isLoggedIn)
//console.log(booleanIsLogged);
//1 => true; 0 => false
// "" => false
// "harsh" => true


let someNumber = 33
let stringNumber  = String(someNumber)
//console.log(stringNumber);

//console.log(typeof stringNumber);
// ***************************** Operations ***********************

let value = 3
let negvalue = -value
//console.log(negvalue);

//console.log(2+2);
//console.log(2-2);   
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 ="hello"
let str2 =" harsh"

let str3 = str1 + str2
// console.log(str3)

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+ 2 +2);
// console.log(1+2+"2");

// console.log((3+4)*5%3);

console.log(true);
console.log(+true);
console.log(+"");

let num1,nmu2,nmu3

num1=nmu2=nmu3 =2+2

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);