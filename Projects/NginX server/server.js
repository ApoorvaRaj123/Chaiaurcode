const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res)=>{

})

server.listen(port ,() => {
    console.log(`listening on port ${port}`);
})