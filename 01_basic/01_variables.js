const accountId = 12345
/*
const is a keyword used to declare a variable that cannot be reassigned a new value
 The const declaration declares block-scoped local variables.
 The value of a constant can't be changed through reassignment using the assignment operator
 */
let accountEmail="abc11@gmail.com"
/*The let declaration declares re-assignable, block-scoped local variables, 
optionally initializing each to a value.
*/
var accountPassowrd="12345"
/* prefer not to use var
 because of issue in block scope and functional scope
*/
accountCity="karad"

 // accountId= 2 // not allowed
accountEmail="adc12@gamil.com"
accountPassowrd="12345"
accountCity="patan"
console.log(accountId);

console.table([accountId,accountEmail,accountPassowrd,accountCity]);
//The console.table() static method displays tabular data as a table.