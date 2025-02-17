

function Person(name)
{
    this.name = name;
}

Person.prototype.greet = function (){
    console.log(`Hello, ${this.name} meri jaan!`);
}

let bhole = new Person("Bhole");
bhole.greet();