// I can manually create the asynchronous behaviour of JS using promises. So, promises is a utility being provided in JS.
// There's another way to create the asynchronous behaviour of JS using ASYNC and AWAIT.

// Now , promise's example : I will be using a fetch API function , which in itself doesn't cause asynchronous behaviour (pause in the language).
// That's why I will use promise to create the asynchronous behaviour, because it's needed in this cause as Fetching Api does take time.




function fetchData() {  // I am assuming that some API data will return from this function, so I'll return it inside Promise like:
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("data sent seccessfully");
            }else{
                reject("Error")
            }
        }, 3000);
    })    // Promise takes a callback function and what goes inside that funciton is the interesting part.
}

//So , the funciton will take two parameters. as either I will fulfill the promise or not. In which case it will be resolve or reject and I will retrun accordingly
//  Example -> I an doing some ttime taking things like writing a file or I went to a database, went to server in another country. So, to simulate it I will use setTimeout function.
// So , here I let success as true in which case , I will resolve as much data as I want in any form .i.e. array,string,object etc
// SO FAR I LEARNED PROMISE CREATION



// PROMISE CONSUMPTION ------------------------------> How to consume the promise


let response = fetchData()  // This alone wont return anything. ----> output = { <Pending> }
// It means every promise has some kind of state associated with it. Pending, fulfilled, and rejected.

// How to know if the promise is fulfilled or rejected.
// We can chain some methods with promise, that when if promis fulfilled , it will o one task but if failed, the other task.

fetchData()
    .then((data)=> console.log(data))        //  This will be use if the promise is resolved
    .catch((error)=> console.error(data));      //  This will be use if the promise is rejected


// Here ".then" is taking a callback as well. The data resolved inside the then can again be grabbed in another ".then" attached to it. So , it becomes a ".then" chain sometimes.