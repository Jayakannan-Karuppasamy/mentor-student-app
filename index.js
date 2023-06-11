//console.log(global);
//console.log("Welcome to Node Js application");
const http = require('http'); // default package

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('{ "name": "B42WEENG" }');
});

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});