console.log("Bhole, meri jaan.....");

function sayHello()
{
    console.log("I would like to say Hello to my jaan.....");
}

setTimeout(() => {
    sayHello();
}, 5000);

for (let i = 0; i < 10; i++) {
    console.log(i);
}


function saysHello() {
    console.log("bhole, meri jaan !!!!!");   
}


setInterval(() => {
    saysHello();
}, 2000);