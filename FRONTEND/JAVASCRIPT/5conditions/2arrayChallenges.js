/*
1. Declare an array named 'teaFlavors' that contains the strings "green tea", "black tea", and "oolong tea".
Access the first element of the array and store it in a variable named "firstTea".
*/

let teaFlavors = ["greean tea", "black tea", "oolong tea"];
// or
// let teaFl = new Array("greean tea", "black tea", "oolong tea");
const firstTea = teaFlavors[0];
console.log(firstTea);


/*
2. Declare an array named "cities" containing "london", "Tokyo", "Paris", and "New York".
Access the third element in the array and store it in a variable named "favoriteCity".
*/
let cities = ["London", "Tokyo", "Patna", "New York"];
const favoriteCity = cities[2];
console.log(favoriteCity);


/*
3. You have an array named "teaTypes" containing "herbal tea","white tea", and "masala tea".
Change the second element of the array to "bhole tea".
*/
let teaTypes = ["harbal tea", "white tea", "masala tea"];
teaTypes[1] = "bhole tea";
console.log(teaTypes[1]);


/*
4. Declare an array named citiesVisited containing "Mumbai", and "Patna".
Add "Gopalganj" to the array using push method.
*/
let citiesVisited = ["Mumbai", "Patna"];
console.log(citiesVisited.length);

citiesVisited.push("Gopalganj");

console.log(citiesVisited.length);
console.log(citiesVisited);


/*
5. You have an array named "teaOrders" with "chai", "ice tea", "matcha", and "earl grey".
Remove the last element of the array using the pop method and store it in a variable named "lastOrder".
*/

let teaOrders = ["chai", "ice tea", "matcha", "earl grey"];

console.log(teaOrders);
const lastOrder = teaOrders[teaOrders.length - 1];
console.log(lastOrder);
teaOrders.pop();
console.log(teaOrders);
// const lastOrder = teaOrders.pop();


/*
6. You have an array named "popularTeas" containing "greean tea", "oolong tea" and "chai".
Create a soft copy of this array named "softCopyTeas".
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);


/*
7. You have an array named "topCities" contsining "Patna", "Gopalganj", "Siwan", and "Chhapra".
Create a hard copy of this array named "hardCopyCities".
*/
let topCities = ["Gopalganj", "Siwan", "Chhapra"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(hardCopyCities);
console.log(topCities);


/*
8. You have two arrays: "europeanCities" containing "Paris" and "Rome" and "asianCities" containing "Patna" and "Mumbai".
Merge these two arrays into a new array named "worldCities".
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Patna", "Mimbai"];
let worldCiites = [...europeanCities, ...asianCities];
// or worldCiites = europeanCities.concat(asianCities);
console.log(worldCiites);


/*
9. You have an array named "teaMenu" containing "masala chai", "oolong tea", "green tea", and "earl grey".
Find the length of the array store it in a variable named "menuLength".
 */
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);


/*
10. You have an array named "cityBucketList" containing "Tokyo", "London", "Cape Town", and "Mumbai".
Check if "London" is in the array and store the result in a variable named "isLondonInList".
 */
let cityBucketList = ["Tokyo", "London", "Cape Town", "Mumbai"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);