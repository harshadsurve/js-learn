const name="harshad"
const repoCount =50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshad')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));//The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
console.log(gameName.indexOf('a'));//The JavaScript String indexOf() method finds the index of the first occurrence of the argument string in the given string. The value returned is 0-based.

const newString = gameName.substring(0,4)//The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.


console.log(newString); 

const anotherString = gameName.slice(-7,4)
//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

const newStringOne = "  harshad  "
console.log(newStringOne);
console.log(newStringOne.trim());
//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const url = "https://harsh.com/harsh%20surve"

/*
The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement.
The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string,
only the first occurrence will be replaced. The original string is left unchanged.
*/
console.log(url.replace('%20','-'));

/*
The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within 
this string, returning true or false as appropriate.
*/
console.log(url.includes('harsh'));

/*
The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for 
the pattern, puts these substrings into an array, and returns the array.
*/
console.log(gameName.split('-'));

/*
Basic String Methods
Javascript strings are primitive and immutable: 
All string methods produces a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
See Also:
String Search Methods
String Templates
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/
