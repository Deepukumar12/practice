// Number
let balance = 120;
console.log(typeof(balance)); // Number
console.log(balance); // 120

let anotherBalance = new Number(100);
console.log(typeof(anotherBalance)); // object
console.log(anotherBalance); // [Number: 100]
console.log(anotherBalance.valueOf()); // 100

// Boolean
let islove = false;
console.log(typeof(islove)); // boolean
console.log(islove); // false

let isPrem = new Boolean(true); // not recommended to write
console.log(typeof(isPrem)); // [Boolean: true]
console.log(isPrem); // true

// null, undefined
let firstName;
console.log(firstName); // undefined

let lastName = null;
console.log(lastName); // null

// String
let name = "jai";
let fullName = "bhole nath";

let allName = name + " " + " jaiHo";
console.log(allName); // jai jaiHo

let greetMessage = `namaste ${fullName} !`;
console.log(greetMessage); // namaste bhole nath !

let value = `value is ${ 9 * 4}.`;
console.log(value); // value is 36.

// Symbol
let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2); // false

let sm3 = Symbol("bhole");
let sm4 = Symbol("bhole");
console.log(sm3 == sm4); // false