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