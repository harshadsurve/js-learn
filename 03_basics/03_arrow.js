/*
In JavaScript, this keyword refers to the current context or scope within which code is executing.
Its value is determined by how a function is called, and it can dynamically change depending on 
the invocation context.
*/
const user = {
    username: "harshad",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);/*->harshad, welcome to website
        {
          username: 'harshad',
          price: 999,
          welcomeMessage: [Function: welcomeMessage]
        }*/
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//->{}

// function chai() {
//     let username = "harshad"
//     console.log(this.username);//->undefined
// }
// chai()

// const chai = function () {
//     let username = "harshad"
//     console.log(this.username);  //-> undefined
// }
// chai()

// const chai = () =>{
//     let username = "harshad"
//     console.log(this.username);
// }
// chai()

// const addtwo =(num1,nmu2) =>{ //7
//     return num1+nmu2
// }

// const addtwo =(num1,nmu2) => num1+nmu2 // 7

// const addtwo =(num1,nmu2) => (num1+nmu2) // 7

const addtwo =(num1,nmu2) => ({username:"harshad"}) // -> { username: 'harshad' }
console.log(addtwo(3,4));

 const myarr = [2,3,4,5,6,7]

 