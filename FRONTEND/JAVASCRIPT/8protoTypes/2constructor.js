// constructor function
function Person(name, age)
{
    this.name = name;
    this.age = age;
}

function Car(make, model)
{
    this.make = make;
    this.model = model;
}

let myCar = new Car("Tata", "Safari");
console.log(myCar);


let myNewCar = new Car("Mahindra", "Thar-Roxx");
console.log(myNewCar);


function Tea(type)
{
    this.type = type;
    this.describe = function()
    {
        return `This is a cup of ${this.type}`;
    }
};

let lemonTea = new Tea("lemon tea.");
console.log(lemonTea.describe());


function Animal(species)
{
    this.species = species;
}
Animal.prototype.sound = function()
{
    return `${this.species} make a sound.`;
}
let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("Cat");
console.log(cat.sound());


function Drink(name)
{
    if(!new.target)
    {
        throw new Error("Drink must be called new keyword.");   
    }
    this.name = name;
};

let tea = new Drink("tea");
console.log(tea.name);
let coffee = Drink("coffee");
console.log(coffee.name);

