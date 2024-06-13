class User{

    constructor(username){
        this.username=username
    }
     logMe(){
        console.log(`Username is ${this.username}`);
     }
}

class Teacher extends User{
    constructor(username,email,passowrd){
        super(username)
        this.email=email;
        this.passowrd=passowrd;
    }
    addcourse(){
        console.log(`a new course added by ${this.username}`);
    }
}


const chai = new Teacher('chai','chai@gmail.com','123')

chai.addcourse()

const masalachai = new User('masalachai')
// masalachai.addcourse()
masalachai.logMe()

console.log(chai instanceof User);