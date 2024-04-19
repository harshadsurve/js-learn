// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const jsuser = {
    name: "harshad",
    "full name":"harshad surve",
    [mySym]:"mykey1",// use [] for refer symbol
    age: 20,
    location: "karad",
    email:"harshad@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email="harshadchatgpt.com"
// Object.freeze(jsuser)
jsuser.email="harshad12.com"
// console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
