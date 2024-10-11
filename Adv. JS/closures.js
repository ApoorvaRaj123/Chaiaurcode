function out() {
    let count = 100000000;
    return function () {
        count += 1;
        return count;
    };
}


let inc = out();

console.log(inc());  // because inc now holds the value of function inside out function.

// This was closure. A special type of function, which if any function is created, it actually retains the memory of that function.  Here , the variable count,
// was declared outside of the returned function inside out function, but still retains the memory of that function.


// For a more comprehensive definition of closures, I can write it as : 


// the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// Lexical environment 

// This can be understood from the following example : 

function lex() {
    var name = "Aleksandar"; // name is a local variable created by lex(just a name here) function.
    function displayName() {  // It is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  lex();


//   lex() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside lex() and is available only within the body of the lex() function. Note that the displayName() function has no local variables of its own.

//    However, since inner functions have access to the variables of outer scopes, displayName() can access the variable name declared in the parent function, lex().
