function outer()
{
    let counter = 5;
    return function () {
        counter++;
        return counter;
    };
};

let increment = outer();
console.log(increment());//6            
console.log(increment());//7
console.log(increment());//8