//ES6 

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encrypatPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai','chai@gmail.com','1234')
console.log(chai.encrypatPassword());
console.log(chai.changeusername());

// behind the scene

function User(username,email,password){
 this.username =username;
 this.email = email;
 this.password = password;    
}
User.prototype.encrypatPassword=function() {
    return `${this.password}abc`
}
User.prototype.changeusername=function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User('tea','tea@gmail.com','1234')
console.log(tea.encrypatPassword());
 console.log(tea.changeusername());

 