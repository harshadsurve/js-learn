// Immediately invoked Function expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
// ()- function definetion ()-> excution call

/*
The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

*/
//unname IIFE
( (name) =>{
    console.log(`DB CONNECTED ${name}`);
})("harshad");