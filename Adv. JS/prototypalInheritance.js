function Person(name) {
    this.name = name;
}


Person.prototype.hello = function () {
    console.log(`Hello My name is ${this.name}`);
}


let V = new Person("Wing chun");
V.hello();


// The whole idea is that in JS objects inherits properties of other objects through prototype chain. Each object has a hidden property.