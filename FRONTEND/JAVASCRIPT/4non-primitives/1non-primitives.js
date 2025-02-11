let username = {};
console.log(typeof(username)); // object
console.log(username); // {}

let username1 = {firstname: "bhole",
    isloggedin: true,
};
console.log(typeof(username1)); // object
console.log(username1);// { firstname: 'bhole', isloggedin: true }

console.log(username1.firstname); // bhole
username1.firstname = "bhole sankar";
console.log(username1.firstname); // bhole sankar

username1.lastname = "mahadev";
console.log(username1.lastname); // mahadev
console.log(typeof(username1));//string

let user1 = {"firstname": "mahesh",
    "isBhagwan" : true,
}
console.log(user1['firstname']); // mahesh

let today = new Date();
console.log(today.getDate());//13


// Array 
// let heros = ["a", "b", "c", true];
let heros = ["bhole", "nath", true];
console.log(heros[0]); // bhole

console.log("1" + 1); // 11

let isValue = true;
console.log(isValue + 1); //2

let isTrue = true;
console.log(isTrue); // true
console.log(Number(isTrue)); // 1

let isWhat = "2";
console.log(isWhat); // 2
console.log(Number(isWhat)); // 2
console.log(typeof isWhat); // string
console.log(typeof Number(isWhat)); // Number

let isWho = "2abc";
console.log(Number(isWho)); // NaN
console.log(typeof Number(isWho)); // Number
console.log(typeof String(isWho)); // String

console.log(null); // null
console.log(Number(null)); // 0
console.log(undefined); // undefined
console.log(Number(undefined)); // NaN
console.log(Number(String)); // NaN
console.log(typeof Number(String)) // Number
console.log(Number(Symbol)); // NaN
console.log(typeof Number(Symbol)); // Number