// This is a synchronous code 


console.log("Starting")
for (let index = 0; index < array.length; index++) {
    console.log("loop");   
}



// Asynchronous  -----  having a pause in the language . i.e. code will be paused a moment in some instances

// why need this? for example , network calls, like, requests from databse or from server or my backend. These are the things that requires pause in the language.
// reason is , network calls are not spontaneous , although they appear to be some times. Making a call from india to the server on USA, and my database might be in germany.
// sometimes it takes seconds to complete
// example 2 ---- read/write files. i.e reading from the memory is instant but reading from disk itself takes time
// example 3 ---- user Inputs
// example 4 ---- Time functions. for example -

function say() {
    console.log("I am saying...");    
}


setTimeout(() => {   // parameter is callback, which is a normal function just used in case like there and it's name gets changed
    
}, 2000);   // 2000 ms = 2 seconds


// Fun Fact ----- JavaScript does not have a capability to do network calls. It doesn't exist. Even some time functions are not supported by JavaScript itseld but we are able to still execute them in node and browser too.

// So therefore, now I have to introduce "EVENT LOOP". 