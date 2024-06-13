
let myhero= ['thor','spiderman']
let heropowr = {
    thor: "hammer",
    spidrman: "sling",

    getSpiderPower: function () {
console.log(`spidy power is ${this.spidrman}`);
    }
}


Object.prototype.harshad=function () {
    console.log(`harshad is present in all object`);
}
Array.prototype.heyharshad=()=> console.log(`harshad say hello`);
// heropowr.harshad()
// myhero.harshad()
// myhero.heyharshad()
// heropowr.heyharshad()

const user={
    name:'chai',
    email:'chai@gmail.com'
}

const Teacher = {
    makevideo : true,
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeassignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher__proto__=user

// moder syntax of prototype in heritance
Object.setPrototypeOf(TeachingSupport,Teacher)



String.prototype.trueLength = function() {
    console.log(`${this}`);  // 'this' refers to the string instance
    console.log(`true length is: ${this.trim().length}`);
}

let anotherusername = 'Chia aur code         ';
anotherusername.trueLength();

'harshad'.trueLength()
'iceTea'.trueLength()

anotherusername.harshad()
myhero.harshad()