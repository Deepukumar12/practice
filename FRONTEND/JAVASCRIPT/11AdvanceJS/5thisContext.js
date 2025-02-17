
const person = {
    name : "Bhole",

    greet()
    {
        console.log(`Hi, I am ${this.name}!`);
    },
};

person.greet();


const greetFunction = person.greet;
// greetFunction();

const boundGreet = person.greet.bind({name : "jaan"});
boundGreet();

// bind, call an apply