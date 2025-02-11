/*
1. write a function named "makeTea" that takes one parameter, "typeOfTea", and returns a string like "Making green tea" when called with "green tea". store the result in a variable named "teaOrder"
*/
// parameter or placeholder
// function greet(name)
// {
//     console.log(`good morning ${name}`);
// }
// // argument
// greet("bhole");/

function makeTea(typeOfTea)
{
    return `Making ${typeOfTea}`
}
let teaOrder = makeTea("Green Tea");
console.log(teaOrder); // "green tea"
/*
2. create a function named "orderTea" that takes one parameter, "teaType". Inside this function, create another function named "confirmOrder" that returns a message like "Order confirmed for chai".Call "confirmOrder" from within "orderTea" and return the result.
*/

function orderTea(teaType)
{
    function confirmOrder()
    {
        return `Order confirmed for ${teaType}.`;
    }
    return confirmOrder();
}
let order = orderTea("chai");
console.log(order);


/*
3. write an arrow function named "calculateTotal" that takes two parameters: "price" and "quantity". The function should return the total cost by multiplying the "price" and "quantity".
Store the result in a variable named "totatCost".
 */
// const calculateTotal = (price, quantity) => price * quantity;
// or
let calculateTotal = (price, quantity) => {
    return price * quantity;
}
let totalCost = calculateTotal(399 * 100);
console.log(totalCost);

/*
4.write a function named "processTeaOrder" that takes another function, "makeTea", as a parameter and calls it with the argument "earl grey".
Return the result of calling makeTea.
*/
function makeTea1(typeoftea){
    return `maketea: ${typeoftea}`;
}
function processTeaOrder(teafunction){
    return teafunction("earl grey");
}
let orderchai = processTeaOrder(makeTea1);
console.log(orderchai);

/*
5. write a function named "createTeaMaker" that returns another function. The returned function should take one parameter, "teaType", and return a message like "Making green tea".
Store the returned function in a variable named "teaMaker" and call it with "green tea".
*/
function createTeaMaker(name)
{
    return function(teaType)
    {
        return `Making ${teaType} ${name}`;
    }
}
let teaMaker = createTeaMaker("Bhole");
let result = teaMaker("green tea");
console.log(result);