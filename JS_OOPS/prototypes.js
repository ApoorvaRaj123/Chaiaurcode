let myvals = [1, 2, 3, 4, 5];

// In console of browsre we will see when the array is opened there is prototype
// What does prototype means? It means extra properties and functionality in any given datatype

//Designing a prototype

let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer, // pointing the prototype to computer's object prototype. 
};
let tomhardware = {};

console.log(`computer`, computer.__proto__); // Accessing a "Dunder prototype"
console.log(`lenovo`, lenovo.__proto__); //Here, Accessing a "Dunder prototype" will point the prototype of lenovo to the prototype of conputer . and in addition to prototype calues of computer I will also get the "cpu:12" that I defined inside the computer object.



let car = {tyres:4}

let tesla = {driver : "AI"}


Object.setPrototypeOf(tesla, car) //In tesla I want to inherit all the properties of a car

// This was another method of doing the same thing I did with lenovo object.


console.log("tesla", tesla) // This will only show {driver :"AI"}. Because with the method we inherited the properties of car in tesla , also have special keyword to show the inherited properties. Not that the tesla object didn't inherited the properties, it just can't show it . We can access the inherited properties like:

console.log("tesla", tesla.tyres) // will give answer as 4 meaning tesla have access to car object

console.log("tesla", Object.getPrototypeOf(tesla)) // Thsi is the method from which the inherited properties in tesla can be seen after inheriting them from setPrototypeOf keyword