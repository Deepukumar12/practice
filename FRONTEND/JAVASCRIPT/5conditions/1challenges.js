
//1 check if the number is greater than the another number
let num1 = 5;
let num2 = 10;

console.log("I am regular upper code");
if(num1 > num2)
{
    console.log("num1 is greater than num2");
}
else
{
    console.log("num2 is greater than num1");
}

console.log("I am regular bottom code");



//2 check if a string is equal to another string

let username = "bhole";
let anotherUsername = "bhole";

if(username == anotherUsername)
{
    console.log("Both usernames are equal");
}
else
{
    console.log("Both usernames are not equal");

}


//3 check if a variable is a number or not
let score = 108;

if(typeof(score) === "number")
{
    console.log("number is a number");
}
else
{
    console.log("number is not a number");
}


//4 check if the boolean value is true or false
let isTeaReady =  true;
if(isTeaReady)
{
    console.log("Tea is ready");
}
else
{
    console.log("tea is not ready");
}


//5 check if array is empty or not
let items = [];
// console.log(items.length());
console.log(items.length);
if(items.length === 0)
{
    console.log("Array is empty");
}
else
{
    console.log("Array is not empty");
}