// const tinderUser = new Object() // singleton object
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name ="harshad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);->{ id: '123abc', name: 'harshad', isLoggedIn: false }

const regulaeuser = {
    email:"harshad12@gmail.com",
    fullname:{
        userfullname:{
            firstname:"harshad",
            lastname:"surve"
        }
    }
}
// console.log(regulaeuser.fullname);// { userfullname: { firstname: 'harshad', lastname: 'surve' } }
// console.log(regulaeuser.fullname.userfullname);// { firstname: 'harshad', lastname: 'surve' }

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 ={obj1,obj2}->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1,obj2)->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
/*
The Object.assign() static method copies all enumerable own properties from one or
 more source objects to a target object. It returns the modified target object.
*/
// const obj3 ={...obj1,...obj2}->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },

]
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstrutor:"hitesh"
}
// course.courseInstrutor

const{courseInstrutor: instructor} = course
// console.log(couserInstructor);
console.log(instructor);

// {
//     "name":"harshad",
//     "cousername":"js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]