/*
   JavaScript Promises used to simplify managing multiple asynchronous operations, preventing callback hell and unmanageable code. They represent future values, associating handlers with eventual success or failure, resembling synchronous methods by postponing value delivery until later.

Syntax:

let promise = new Promise(function(resolve, reject){
     //do something
});

Parameters:
The promise constructor takes only one argument which is a callback function
The callback function takes two arguments, resolve and reject
Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.

A Promise has four states:
  State	                                                       Description
Fulfilled	                                     Action related to the promise succeeded
Rejected                                       	 Action related to the promise failed
Pending	                                         Promise is still pending i.e. not fulfilled or rejected yet
Settled	                                         Promise has been fulfilled or rejected
*/
/*
Promise resolve() method 
The promise.resolve() method in JS returns a Promise object that is resolved with a given value. Any of the three things can happen: 

If the value is a promise then the promise is returned.
If the value has a “then” attached to the promise, then the returned promise will follow that “then” to the final state.
The promise fulfilled with its value will be returned.
Syntax: 
Promise.resolve(value);
*/

/*
The Promise.reject() method is used to return a rejected Promise object with a given reason for rejection. It is used for debugging purposes and selective error-catching. The catch() method can be used for logging the output of the reject() method to the console that is catch() method acts as a career that carries the rejected message from the Promise.reject() method and displays that in the user’s console.

Syntax:
Promise.reject(reason);
Parameter:
This method accepts a single parameter as mentioned above and described below:

reason: It is the reason for which the promise is rejected.
Return value:
It returns the rejected promise with the given reason, either specified by the user or via the backend.

*/

/*
Promise Consumers: Promises can be consumed by registering functions using .then and .catch methods.

1. Promise then() Method:
Promise method is invoked when a promise is either resolved or rejected. It may also be defined as a carrier that takes data from promise and further executes it successfully.

Parameters: It takes two functions as parameters.

The first function is executed if the promise is resolved and a result is received.
The second function is executed if the promise is rejected and an error is received. (It is optional and there is a better way to handle error using .catch() method
Syntax:

.then(function(result){
        //handle success
}, function(error){
        //handle error
})
*/

/*
Promise catch() Method:
Promise catch() Method is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.

Parameters: It takes one function as a parameter.

Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )
Syntax:

.catch(function(error){
        //handle error
    })
*/
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

