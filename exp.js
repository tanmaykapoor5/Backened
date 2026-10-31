const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req,res) => {
    return res.end("hello ");
})

app.get("/about", (req,res) => {
    return res.end("hii");
})

const myserver = http.createServer(app);
myserver.listen(8000, console.log("Server Started"))