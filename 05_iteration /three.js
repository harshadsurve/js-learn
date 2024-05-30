// for of 

/* 
for (const iterator of object) {

} 
*/
//["","",""]
//[{},{},{}]

const arr= [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello world!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys.
 Any value (both objects and primitive values) may be used as either a key or a value.
*/
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

//  console.log(map);/*-> Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'FR' => 'France'
//   } */

// for (const key of map) {
//     console.log(key); /* -> [ 'IN', 'India' ]
//     [ 'USA', 'United States of America' ]
//     [ 'FR', 'France' ] */
// }

// for (const [key, value] of map) { // [] use this for hold key and value separate this destructur of array 
//     console.log(key ,':-', value);/* -> IN :- India
//     USA :- United States of America
//     FR :- France */
// }


const myObject = {
    'game1': 'NFS',
    'game2': 'pubg',
    'game3': 'bgmi'
}

/* for (const [key,value] of myObject) {
       console.log(key ,':-', value);

}
 for (const [key,value] of myObject) {
                           ^

 TypeError: myObject is not iterable

 we are not use for_of ion the object 
 */

