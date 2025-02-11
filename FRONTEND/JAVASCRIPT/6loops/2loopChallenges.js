/*
1. write a "for" loop that through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai".
Store all teas before "chai" in a new array named "selectedTeas".
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let i=0;i<teas.length;i++)
{
    if(teas[i] === "chai")
    {
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);


/*
2. write a "for" loops through the array ["london", "new york", "paris", "berlin"] and skips "paris".
Store the other cities in a new array named "visitedCities".
*/
let cities = ["london", "new york", "paris", "berlin"];
let visitedCities = [];
for(let i=0;i<cities.length;i++)
{
    if(cities[i] === "paris")
    {
        continue;
    }
    visitedCities.push(cities[i]);
}
console.log(visitedCities);

/*
3. use a "for-of" loop to iterate through the array "[1,2,3,4,5]" and stop when the number "4" in an array named "smallNumbers".
*/
let numbers = [1,2,3,4,5];
let smallNumbers = [];
for (const num of numbers)
    {
    if(num === 4)
    {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);


/*
4. use a "for-of" loop to iterate through the array ["chai","green tea","herval tea","black tea"] and skip "herval tea".
 */

let teaOption =  ["green tea", "harval tea", " black tea"];
let remainingTea  = [];
for (const tea of teaOption) {
    if(tea === "harval tea")
    {
        continue;
    }
    remainingTea.push(tea);
}
console.log(remainingTea);



/*
5. use a "for-in" loop to loop through an object containing city population.
stop the loop when the population of "berlin" is found and store all previous cities population in a new object  named "cityPopulations". 

let cityPopulation = {
"London" : 1000000,
"New Yark": 2000000,
"Paris" : 3000000,
"Berlin" : 4000000
};
 */

let cityPopulation = {
"London" : 1000000,
"NewYark" : 2000000,
"Paris" : 3000000,
"Berlin" : 4000000
};
console.log(Object.keys(cityPopulation));
console.log(Object.values(cityPopulation));
console.log(Object.freeze(cityPopulation));

// call, bind and apply

for (const key in cityPopulation) {
    console.log(key);
    console.log(cityPopulation[key]);
}

let newCityPopulation = [];
for (const city in cityPopulation) {
    // key = values
    if(city === "Berlin")
    {
        break;
    }
newCityPopulation[city] = cityPopulation[city];
}
console.log(newCityPopulation);



/*
 6. use a "for-in" loop to loop through an object containing city populations.
 skip any city with a population below 3 million and store the rest in a new object named "largeCities".

 let worldCities = {
 "Sydney": 5000000,
 "Tokyo": 9000000,
 "Berlin": 3500000,
 "Paris": 2200000
 };
 */

 let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
 };

 let largeCities = {};

 for (const city in worldCities) {
    if(worldCities[city] < 3000000)
    {
        continue;
    }
    largeCities[city] = worldCities[city];
 }
 console.log(largeCities);


 /*
 7. write a "forEach" loop that iterates through the array ["early", "green tea","chai","oolong tea"].
 Stop the loop when "chai" is found, and store all previous tea types in an array named "availableTeas".
 */
let teaCollection = ["early", "green tea","chai","oolong tea"];
let availableTeas = [];

teaCollection.forEach(function(tea) {
    if(tea === "chai")
    {
        return;
    }
    availableTeas.push(tea);
});
console.log(availableTeas);


 /*
8. Write a "forEach" loop that iterates through the array ["Berlin", "Tokyo", "Sydney","Paris"].
Skip "Sydney" and store the other cities in a new array named "traveledCities".
 */

let citiesCollection = ["Berlin", "Tokyo", "Sydney","Paris"];
let traveledCities = [];

citiesCollection.forEach(function(city){
    if( city === "Sydney"){
        return;
    }
    traveledCities.push(city);
});
console.log(traveledCities);


/*
9. write a "for" loop that iterates through the array `[2,5,7,9]`. skip "7" and multiply the rest of by 2. store the results in a new array named "doubledNumbers".
*/
let arrayNumber = [2,5,7,9];
let doubledNumbers = [];
for (let index = 0; index < arrayNumber.length; index++) {
    if(arrayNumber[index] === 7)
    {
        continue;
    }
    doubledNumbers.push(arrayNumber[index]*2);
}
console.log(doubledNumbers);



/*
10. use a "for-of" loop to iterate through the array "["chai", "green tea", "black tea", "herbal tea", "jasmine tea"] and stop when the length of the current tea name is greater than 10. store the teas iterated over in an array named "shortTeas".
*/

let teaNames = ["chai", "green tea", "black tea", "herbal tea", "jasmine tea"];
let shortTeas = [];
for (const tea of teaNames) {
    if(tea.length > 10)
    {
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);