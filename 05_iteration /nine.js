/*
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each 
element of the array, in order, passing in the return value from the calculation on the preceding element.
 The final result of running the reducer across all elements of the array is a single value.
*/


const mynums = [1,2,3]

// const mytotal=mynums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// },0)

const mytotal = mynums.reduce((acc,curr)=>(acc+curr),0)
console.log(mytotal);

const shopingcart = [
    {
        itemname: "js course",
        price:"2999"
    },
    {
        itemname: "java course",
        price:"4999"
    },
    {
        itemname: "python course",
        price:"999"
    },
    {
        itemname: "mobile dev course",
        price:"5999"
    },
    {
        itemname: "data science course",
        price:"12999"
    },
]

const add 