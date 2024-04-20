function saymyname(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
}

// saymyname()

// function addTwoNumber(num1,num2){
    
//     console.log(num1+num2);
// }

 
function addTwoNumber(num1,num2){
    
    // let result = num1 + num2 
    // return result

    return num1 + num2
}

const result = addTwoNumber(3,5)
// console.log("result:" ,result);->result: 8


function loginUserMessage(username ="sam"){
    if(!username){
     console.log("plesase enter a username");
     return
    }
    return`${username} just logged in `
}
// console.log(loginUserMessage("harshad"));->harshad just logged in 
// console.log(loginUserMessage(""));-> just logged in 
// console.log(loginUserMessage());->undefined just logged in 
// console.log(loginUserMessage("harshad")); 

function calculatecartPrice(...num1){
return num1
}
// console.log(calculatecartPrice(200,250,600));

const user={
    username:"harshad",
    price: 199
}
function handelObject(anyobject){
 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)

handelObject({
    username:"sam",
    price: 300
})

const myarr =[200,400,300,100]
function returnsecondValue(getArray){
    return getArray[1]
}
// console.log(returnsecondValue(myarr));
console.log(returnsecondValue([200,300,100,500,400]));