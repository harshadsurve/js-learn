// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2== 1);
// console.log(2 !=1);

// console.log("2">1);
// console.log("02">1);
// due to problem when you can not comaparison same data type

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >=0);

/**
 * the reason is that an equality check == and comparisons > < >== <= work differently.
 * Comparisons convert null to a number,treating it as 0.
 * that is why (3)null >=0 is true and (1) null>0 is flase.
 */
console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);
// avoid this conversion and comparison

// === IsStrictlyEqual

console.log("2"===2);