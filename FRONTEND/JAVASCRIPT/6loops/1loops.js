/*
1. write a while loop that calculates the sum of all numbers from 1 to 5 stores the result in a variable named "sum".
 */

let sum = 0;
let i = 1;
while(i <= 5)
{
    sum += i;
    i++;
}
console.log(sum);


/*
2. Write a while loop that counts down from 5 to 1 and stores the numbers in an array named "countdowm".
*/
let countDown = [];
let count = 5;
while(count > 0)
{
    countDown.push(count);
    count--;
}
console.log(countDown);


/*
3. write a "do while" loop that prompts a user to enter their favorite tea type until they enter "stop".
Store each tea type in an array named "teaCollection".
*/

// let teaCollection = [];
// let tea;
// do{
// tea = prompt(`Enter your favorite tea (type "stop" to finish)`);

// if(tea !== "stop")
// {
//     teaCollection.push(tea);
// }
// }while (tea !== "stop");

/*
4. write "do while" loop that adds numbers from  1 to 3 and stores the result in a variable named "total".
*/
let total = 0;
let j = 1;
do{
    total += j;
    j++;
}while(j <= 3);
console.log(total);


/*
5. write a "for" loop that multiplies each element in the array "[2,4,6]" by 2 and stores the result in a new array named "multipliedNumbers".
*/
let multipliedNumbers = [];
let numbers = [2,4,6];
for(let i=0;i<numbers.length;i++)
{
    let takeNumber = numbers[i]*2;
    multipliedNumbers.push(takeNumber);
}
console.log(multipliedNumbers);



/*
6. write a "for" loop that lists all the cities in the array "["paris", "new york", "tokyo", "london"] and stores each city in a new array named "cityList".
*/
let cities = ["paris", "new york", "tokyo", "london"];
let cityList = [];
for(let c=0;c<cities.length;c++)
{
    const myCity = cities[c];
    cityList.push(myCity);
}
console.log(cityList);