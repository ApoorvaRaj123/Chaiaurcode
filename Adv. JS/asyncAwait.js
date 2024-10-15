// There is another way of consuming promises which is called async and await. Until now, I learned about promises where I used .then and .catch to com=nsume the promises are

function fetch(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve({name: "V", url:"google.com"});
        }, 3000);
    })
}

fetch()
.then()
.catch()  // This is the previous way

// 


async function getUserData(){  // here i will use try/catch. Where I will "try" a code , if it runs , then good. But if doesn't, and an error came back
    try {                      // So, instead of just letting the whole program crash, I would "catch" the error and allow the program to continue running.
        console.log(`fetching that user data...`);
        const userData = await fetch();  // await should be used where I know the task will tkae time and can only be used when async is over the parent function.
        console.log(`user data ${userData}`);
        
    } catch (error) {
        console.log(error);
    }
}

// The error catching will not be affecting our main thread. and the program will continue from next line.

