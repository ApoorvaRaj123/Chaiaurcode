// OOP - object oriented programming is the ability to create object. Here a lot of focus is given to these things :
// Encapsulation,Inheritance, Polymorphism and abstraction


let car = {
    make: "Toyota",
    model: "camry",
    year:2020,
    start : function () {
        return `${this.make} car, model ${this.model} was made in ${this.year}`
    },
}


console.log(car.start());


function Animal(type) {
    this.type = type;
}

Animal.prototype.sound = function () {
    return `${this.type} makes a sound`
}

Array.prototype.johndoe = function () {  // I injected the johndoe method in the prototype of Array itself.
    return `custom method ${this}`
}


// let myArray = [1,2,3]
// console.log(myArray.johndoe());
// let myNewArray = [1,2,3,4,5,6,7,8,9]
// console.log(myNewArray.johndoe());



// How classes are being created as well as injeritance in JS. classes, under the hood, are prototypes.

class Vehicle {        // Now here , there are no parenthesis to actually take parameters unlike from the above created constructor functions. But, there is a method inside the class named "constructor" that takes these parameters
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start (){
        return `${this.model} is a car from ${this.make}`
    }

}



class Car extends Vehicle {
    
    drive () {
        return `${this.make}`  // This is an example of inheritance
    }
}

let myCar = new Car("Toyota", "martin");
console.log(myCar.start());
console.log(myCar.drive());