class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

     static createId(){
        return `123`
    }
}

const harshad = new User('harshad')
// console.log(harshad.createId())

class Teacher extends User{

    constructor(username,email){
super(username)
        this.email=email
    }
     
}

const iphone = new Teacher('iphone','i@phone.com')
iphone.logMe();
console.log(iphone.createId());

