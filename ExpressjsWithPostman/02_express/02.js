// Create a node project by npm init inside this folder "02_express".
//  After doing all the steps, go to package.json and give type as "module" to use modern JS. so, instead of 
// const express = require('express'); I can write import express from "express";
// Next step is to install express bu npm i express


import express from "express";
import { request } from "http";

const app = express(); // now app is an object with all the powers of express


const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello from me")
})  // I want my app to respond to a GET request. what is this get request? 

// The get request is for extracting all the coming data from the request of the user, and I can respod to the user by using the "res"
// Every change I make, my server is not aware of it and I will have to restart it everytime. Although I can use "nodemon" for that.


app.listen(port, () => {
    console.log("Express server listening on port " + port);
})

// Now, to run this I can simply type "nom start"

