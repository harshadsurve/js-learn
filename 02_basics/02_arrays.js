const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["Superman","Flash","batman"]

/* The push() method of Array instances adds the specified elements to the end of an array 
and returns the new length of the array.
*/
// marvel_heros.push(dc_heros) // push in exesting array
// console.log(marvel_heros); //  [ 'thor', 'Ironman', 'spiderman', [ 'Superman', 'Flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // Flash

/**
 The concat() method of Array instances is used to merge two or more arrays. 
 This method does not change the existing arrays, but instead returns a new array.
 */
 // const allHeros = marvel_heros.concat(dc_heros) // concat return new array
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'Superman', 'Flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] 
/*The JavaScript spread operator (...) allows us to quickly copy all or
 part of an existing array or object into another array or object.
*/
// console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
/*
The flat() method of Array instances creates a new array with all sub-array elements concatenated
 into it recursively up to the specified depth.
*/
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("harshad")); //False
console.log(Array.from("harshad")); //['h','a','r','s','h','a','d']
console.log(Array.from({name:"harshad"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));// Returns a new array from a set of elements.
// [ 100, 200, 300 ]

