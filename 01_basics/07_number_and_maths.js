const score = 400
//console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.89367

// console.log(otherNumber.toPrecision(3));

const hundreds= 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// ****************************Maths**************************************

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.7));
console.log(Math.ceil(3.4));// top value
console.log(Math.floor(3.4));//Math.floor() rounds down a number to the nearest whole number. 

console.log(Math.min(3,5,2,7,8,9,0,1));

console.log(Math.random());
//The Math.random() static method returns a floating-point,
// pseudo-random number that's greater than or equal to 0 and less than 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max-min + 1)) + min);