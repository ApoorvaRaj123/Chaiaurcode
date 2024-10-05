// For constructor function the name of the function is important, it doesn't do much behind the scenes but just for convention. The name shoukd be anything with first letter as capital letter,

function Person(name, age) {
    this.name = name;   // here instead of "let name" I used this.name as placeholder for name parameter 
    this.age = age;   // here instead of "let age" I used this.age as placeholder for parameter
}
// function Person(name, age) {
//     let myname = name;   // here instead of "let name" I used this.name as placeholder for name parameter 
//     let myage = age;   // here instead of "let age" I used this.age as placeholder for parameter
// }

function Car(make, model) {
    this.make = make;
    this.model = model;
}



// Now that the blueprint has been created , I can now create an instance/object 
// I will create a variable , then the most important part is "new" keyword. Without the "new" keyword the output will be "undefined". So turns out for making an object 
// I have to use the "new" keyword.



let myCar = new Car("Lamborgini", "Carmy");
console.log(myCar);

let myNewCar = Car("Tata", "Safari");
console.log(myNewCar);

let myPerson = new Person("Tata", "Safari");
console.log(myPerson);

// So behind the scenes , Here it is actually trying to access the function of object created, here it's Car. So , "new" keyword is linked to "this" keyword and "this" keyword refers the variables that its attached to.
// The blank object created by "new" keyword gets the value I put as arguments in the variables of its function

function Tea(type) {
    this.type = type
    this.describe = function () {
        return `this is a cup of ${this.type}`
    }
}

// function Tea(type) {
//     this.type = type
//     this.describe = function () {
//         return `this is a cup of ${type}`
//     }()
// }   // This is another way I did, fopr getting the same outcome.

let myTea = new Tea("kashmiri");
console.log(myTea);

let mynewTea = new Tea("Taaz");
console.log(mynewTea.describe();
