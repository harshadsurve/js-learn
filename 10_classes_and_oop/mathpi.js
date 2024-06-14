const Descriptor= Object.getOwnPropertyDescriptor(Math,'PI')
console.log(Descriptor);

console.log(Math.PI);
Math.PI= 5
console.log(Math.PI);

const chai={
    name:'ginger',
    price:250,
    isAvaliable:true,


    orderchai:function(){
        console.log(`chai nahi bani`);
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{ 
    // writable: false,
    enumerable: false,

    })
    console.log(Object.getOwnPropertyDescriptor(chai,'name'));
for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);

    }
};
    
