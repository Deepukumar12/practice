let car = {
    make : "TaTa",
    model : "Safari",
    year : 2021,
    start : function ()
    {
        return `${this.make} car got started in ${this.year}`;
    }
};
console.log(car.start());


function Person(name, age)
{
    this.name = name;
    this.age = age;
}

let bhole = new Person("Bhole Nath", 1008);
console.log(bhole.name);


function Animal(type)
{
    this.type = type;
}
Animal.prototype.speak = function()
{
    return `${this.type} make a sound.`;
}

Array.prototype.bhole = function()
{
    return `custom method ${this}`;
}

let myArray = [1,2,3,4,5];
console.log(myArray);


// Inheritance

class Vehicle {
    constructor(make,model)
    {
        this.make = make;
        this.model = model;
    }

    start()
    {
        return `${this.model} is a car from ${this.make}.`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make} : This is a inheritance example.`;
    }
}

let myCar = new Car("tata", "safari");
console.log(myCar.start());
console.log(myCar.drive());

let myVehicle = new Vehicle("Mahindra", "Thar");
console.log(myVehicle.make);


// Encapsulation
class BankAccount {
    #balance = 0;

    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.balance);
// console.log(account.#balance);
console.log(account.getBalance());


// Abstraction
class CoffeeMachine{
    start()
    {
        return `Starting the machine..`;
    }
    brewCoffee()
    {
        return `Brewing Coffee..`;
    }

    pressStartButton()
    {
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} ${msgTwo}`;
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// or
console.log(myMachine.pressStartButton());



// Polymorphism
class Bird {
    fly() {
        return `Flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins cannot fly...`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());



// static method

class Calculator {
    static add(a, b)
    {
    return a + b;
    }
};

// let miniCalculator = new Calculator();
// console.log(miniCalculator.add(2, 5));

console.log(Calculator.add(2,6));


// Getters and Setters

class Employee {
    #salary;
    constructor(name, salary)
    {
        if(salary < 0)
        {
            throw new Error("Salary cannot be negative.");
            
        }
        this.name = name;
        this.#salary = salary;
    }


    get salary()
    {
        // return this.salary;
        return `You are not allowed to see salary`;
    }


    set salary(value)
    {
        if(value < 0)
        {
            console.error("Invalid salary");
        }
        else
        {
            this._salary = value;
        }
    }
};

let emp = new Employee("bhole", -100000);
// console.log(emp._salary);// -100000
console.log(emp.salary);// you are not allowed to see the salary.