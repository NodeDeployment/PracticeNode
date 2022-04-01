const express = require("express");
const app = express();
app.get("/",(req,res)=>res.json({message: "Hello world"}))
app.listen(process.env.PORT || 80);


// const http = require("http");
// const port = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-type": "text/plain"});
//     response.end("Hello world!");
// });

// server.listen(port)