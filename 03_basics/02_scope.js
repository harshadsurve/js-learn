let a = 100
// var c =300


if(true){
let a = 10
const b = 20
// console.log("Inner",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "harshad"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "harshad"
    if (username === "harshad") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num+ 1      //-> function.
}
// addone(5)-> only return not print

addtwo(5)
const addtwo = function (num) { //-> expressions,declare and hold in veriable.
    return num + 2
}

