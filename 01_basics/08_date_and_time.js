// Dates

let myDate = new Date()
// console.log(myDate);// 2024-04-18T08:36:09.483Z
// console.log(myDate.toString());// Thu Apr 18 2024 08:38:13 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());// Thu Apr 18 2024
// console.log(myDate.toISOString());// 2024-04-18T08:38:13.503Z
// console.log(myDate.toJSON());// 2024-04-18T08:38:13.503Z
// console.log(myDate.toLocaleDateString());// 4/18/2024
// console.log(myDate.toLocaleString());// 4/18/2024, 8:38:13 AM

// console.log(typeof myDate);// object

// let myCreateddate = new Date(2024,0,23)// months start with 0 in js on single digit.
// console.log(myCreateddate.toDateString());
// let myCreateddate = new Date(2024,0,4,4,7)
// console.log(myCreateddate.toLocaleString());
let myCreateddate = new Date("09-03-2024")
// console.log(myCreateddate.toLocaleString());

//  timestamp value directly using the getTime() and setTime() methods.
let myTimeStamp = Date.now()
// console.log(myTimeStamp); //  milliseconds since the midnight at the beginning of January 1, 1970.
// console.logy(mCreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1 );
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})


