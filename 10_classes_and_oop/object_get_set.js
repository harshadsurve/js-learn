const User={
 _email:"cahi12@.com",
 _passwoed:"asdccdg",

 get email(){
  return this._email.toUpperCase()
 },
 set email(value){
    this._email=value
 }

}

const tea = Object.create(User)
console.log(tea.email);

// _ =define private properties
