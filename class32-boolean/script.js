// falsee value
let a = 0; // Boolean(a); return false
let b = -0;// Boolean(a); return false
let c = '';// Boolean(a); return false
let e;// Boolean(a); return false
let d = null;// Boolean(a); return false
let f = false;// Boolean(a); return false
let g = 10 / 'hello';// Boolean(a); return false

/// boolean can be objects

console.log(Boolean(a));
console.log(b.constructor);
console.log(b.toString());
console.log(b.valueOf());