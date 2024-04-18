// array

const myArr =[1,2,3,4,5,6]

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5,6)

// console.log(myArr[2]);

// Array methods

// myArr.push(7)
// myArr.push(8) // add element in last of array
// myArr.pop() // delete last element

// myArr.unshift(9) // insert element in array start
// myArr.shift()

// console.log(myArr.includes(9)); // ture or false result
// console.log(myArr.indexOf(3)); 


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice ,splice
/**
 * The slice() method of Array instances returns a shallow copy of a portion of an array 
   into a new array object selected from start to end (end not included) 
    where start and end represent the index of items in that array. 
 * The original array will not be modified.
 */
console.log("a",myArr); // a [ 1, 2, 3, 4, 5, 6 ]
                  //index    [ 0, 1  2  3  4  5]
const myn1 = myArr.slice(1,3)// index number in ()
console.log(myn1); // [ 2, 3 ]  
console.log("b",myArr); // b [ 1, 2, 3, 4, 5, 6 ]

/**
 * The splice() method of Array instances changes the contents of an array by removing or 
  replacing existing elements and/or adding new elements in place
 */
const myn2 = myArr.splice(1,3)//
console.log(myn2); // [ 2, 3, 4 ]
console.log("c",myArr); // c [ 1, 5, 6 ]

