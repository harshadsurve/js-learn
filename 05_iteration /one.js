// for

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10 ; i++) {
    // console.log(`outer loop value : ${i}`);
for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop values ${j} and inner loop ${i}`);
        // console.log(i +"*"+j+"=" + i*j);
 }
}

let myaar = ["flash","batman","superman"]
// console.log(myaar.length);
for (let index = 0; index < myaar.length; index++) {
    const element = myaar[index];
    // console.log(element);
    
}

// break and continue

//break exit form all loop
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break;
//     }
// console.log(`value of i is ${index}`);    
// } ->value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// detected 5

//continue skip one condition and print remain loop
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue;
    }
console.log(`value of i is ${index}`);    
} 