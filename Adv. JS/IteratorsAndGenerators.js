// This is actually a really advanced topic in JavaScript.

// What is generator function? Generator functions doesn't execute all of the things all at once, but it actually creates the things on the resume basis.
// I hit it once , it's gonna generate one result, I hit it again, it will generate another result and so on.It doesn't really execute all at once

// How to make sure how many times it's gonna be called? It can remember that it will give results based on that.
// I can achieve that using "yield", where I have to manually tell the generator function what it should do every time a hit happens on it. 

// For examole - 

function* numberGenerator(params) {  // The "*" after the "function" is what makes it a generator function. otherwise it's just a normal function without it.
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

let generator = numberGenerator();
let generatorTwo = numberGenerator();

// next() is the iterator here which keeps the track of number of times the generator is getting called.
console.log(generator.next());  // This will return the result as object where there are two key-value pairs named -----> value : "Whatever is returned from yield" and done: "True/False".

console.log(generator.next().value);    // The firsr yield will return 1 here
console.log(generator.next().value);    // The firsr yield will return 2 here
console.log(generator.next().value);    // The firsr yield will return 3 here
console.log(generator.next().value);    // This will return "undefined" as I only yielded for 3 times in generator function.



console.log(generatorTwo.next().value);    // The firsr yield will return 1 here, as it also remembers the  reference of it. The second variable is used here , therefore the generation will start from 1st yield again.
console.log(generatorTwo.next().value);    // The firsr yield will return 2 here