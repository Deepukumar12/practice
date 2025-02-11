
let computer = {cpu : 12};
let lenovo = {screen : "HD"};
let bholeHardware = {};
console.log(computer);
console.log(`computer`, computer.__proto__);

// or

let genericCar = {tyres: 4};
let tata = {driver : "Automatic"};
// Object.setPrototypeOf(`tata`, tata);
console.log(tata);


Object.setPrototypeOf(tata,genericCar);
console.log(`tata`, Object.getPrototypeOf(tata));

