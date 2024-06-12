
// object literal

const user ={
    username : 'harshad',
    loginCount:8,
    signedIn:true,

     getUserdtails:function () {
      //   console.log(`got user details from database`);
      // console.log(`username ${this.username}`);
      console.log(this);
     }
}

const user2 ={
   username : 'harshad',
   loginCount:8,
   signedIn:true,

    getUserdtails:function () {
     //   console.log(`got user details from database`);
     // console.log(`username ${this.username}`);
     console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserdtails());



// new keyword is a - Constructor function is allow one object literal multiple instance

//  const promiseOne = new Promise()
//  const date = new Date()

function User(username,loginCount,isloggedIn) {

   this.username = username;
   this.loginCount = loginCount;
   this.isloggedIn = isloggedIn;
// return is implicties define 
    return this
}

const userOne = new User('harshad',12,true)
const userTwo=  new User('Chai aur code',11,true)
console.log(userOne.constructor);
// console.log(userTwo);

// when you use new keyword empty object is create (instance)
// contructor function call new keyword karan argumnet pack 
// this keyword inject argument 
// function ata milanar

// construcctor properties reffer itself

/*
The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the 
prototype chain of an object. The return value is a boolean value. Its behavior can be customized with 
Symbol.hasInstance.


*/






