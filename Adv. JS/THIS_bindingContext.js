const P = {
    name : "Vikas",
    greet(){
        console.log(`My name is ${this.name}`);
    }
}

P.greet()  // Here , tyhe expected outcome is gonna come as output, as the context from "THIS" keyword is still here.


// but as son as I transfer the greet() method to another memory, the context will be lost, therefore , "this.name" will be "undefined"


let GreetFunc = P.greet;

GreetFunc();  // It's output is "undefined" as the memory transfer happended but there is no context in the new memory.

// If I have to find thata context , I literally have go and BIND that context. Like telling a backstory of it.

const bindGreet = P.greet.bind({name: "V"});
bindGreet(); // This time I have manually gave the context and the name is "V" this time. So the outpur will be as expected.


// Find about bind, call, apply.