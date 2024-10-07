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



// ENCAPSULATION -- restriction of direct access to object data

// example

class BankAccount {
    #balance = 30000000;   // Now this will not be available to use for anyone. To access , provide a custom method



    deposit (amount) {
        this.#balance += amount    // This will only be accessed using this method within the class. i.e. no direct access of object data.
        return this.#balance
    }


    getbalance () {       // Whenever I encapsulate any data, I don't want it to never be available , instead I just want to be able to make it's access not derect/harder/restrictions
        return `$ ${this.#balance}`;
    }
}


let acount = new BankAccount()   // I am not giving any values/parameters here because inside this class there is no constructor method

// console.log(acount.getbalance());
// console.log(acount.deposit(10000000));
// console.log(acount.getbalance());

// console.log(acount.balance)   // This will show 'undefined' because it's encapsulated and can only be accessed via the method I defined inside the class "getbalance" or "deposit".



// ABSTRACTION

class CoffeeMachine {
    

    start () {
        // call DB maybe?
        // Filer values 
        // Basically I can assign this method to do some very heavy taks like commented above. or I can just give it simplest of taks.

        return `Starting the machine...`  // Even with all the heavy tasks, this method will return a string. i.e something very simple.

    }

    brewCoffee() {
        // complex calculation/logic
        return `brewing coffee`
    }
}


let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());


// This was basically abstraction



// POLYMORPHISM


class Bird{

    fly(){
        return `flying...`
    }
}


class RunnerBird extends Bird {

    fly(){
        return `Cant fly, runnerbirds`
    }
}

let bird = new Bird();
let runnerBird = new RunnerBird();

// console.log(bird.fly());
// console.log(runnerBird.fly());




// STATIC Keyword


class Calculator{
    static add(a,b){
        return a + b;
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add());  // This will return "miniCalc.add() is not a funciton". Because I used "static" keyword while defining the method add.

// SO by using "static" keyword , I am not allowing this method to be used by creating an object.  YES, there are some use cases like that.
// to use it , I can directly call the Calculator class here


console.log(Calculator.add(10000000, 25000000));



// GETTERS and SETTERS


// class Employee{
//     constructor(name, salary){
//         this.name = name
//         this._salary = salary   // Here I used a underscore of variable name
//     }
// }

// let emp = new Employee("Vis",30000000);
// console.log(emp._salary);   // Here I can access the salary, but my goal is to not access the salary THIS directly. Also , the underscore name will be used in next example correctly.


class Employee{
    constructor(name, salary){
        this.name = name
        this._salary = salary   // Here I used a underscore of variable name, which is good practice and helps understand that it holds a special meaning that's about to come
    }

    get salary(){
        return `You are not allowed to see the salary of this employee`;
    }

    set salary(value){
        if(value<0){
            console.error("Invalid salary");
        }
        else {
            this._salary = value;
        }
    }

}

let emp = new Employee("Vis",30000000);
console.log(emp._salary);   // Here I can access the salary, but my goal is to not access the salary THIS directly. Also , the underscore name will be used in next example correctly.


