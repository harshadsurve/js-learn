const name="harshad"
const repoCount =50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshad')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString); 

const anotherString = gameName.slice(-7,4)
//
const newStringOne = "  harshad  "
console.log(newStringOne);
console.log(newStringOne.trim());
//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const url = "https://harsh.com/harsh%20surve"

console.log(url.replace('%20','-'));

console.log(url.includes('harsh'));

console.log(gameName.split('-'));