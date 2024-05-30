/*
 The JavaScript `map()` method is used to iterate over an array, applying a callback function to each 
 element. It then generates a new array containing the results of applying the callback function to each
  element. It’s important to note that the `map()` method does not alter the original array, 
  preserving its integrity. Additionally, it skips executing the function for empty elements, 
  ensuring efficient processing of non-empty values exclusively.
 */

const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynumber.map((num)=>(num+10))

const newnums = mynumber
                .map((num)=> num *10)
                .map((num)=> num +1)
                .filter((num)=> num>=40)
console.log(newnums);