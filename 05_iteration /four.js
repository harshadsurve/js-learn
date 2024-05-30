// for in 
/*The for-in loop in JavaScript iterates over the enumerable properties of an object, 
  executing a specified block of code for each property.
 It’s commonly used for iterating through object properties or elements in an array.
 */
const myObject = {
   js: 'javascript',
   cpp: 'c++', 
   rb:'ruby',
   swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);/*-> js
    cpp
    rb
    swift */
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);/* -> js shortcut is for javascript
    cpp shortcut is for c++
    rb shortcut is for ruby
    swift shortcut is for swift by apple */
}

const programming = ["js","rb","py","java","cpp",]

for (const key in programming) {
   console.log(key);/* -> 0
   1
   2
   3
   4 */
}
for(const key in programming){
 console.log(programming[key]);/* -> js
 rb
 py
 java
 cpp 
 */
}

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('FR',"France")

// for (const key in map) {
    
//     console.log(key);
// }
// we are not use for_in loop for the map in js 

