// const http = require('http');


const hostname = '127.0.0.1';
const port = 8080;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Node');
});

app.get('/test', (req, res) => {
    res.send('Hello Node test');
});

app.get('/test1', (req, res) => {
    res.send('Hello Node test1');
});

app.listen(port, () => {
    console.log("Example app listening at http://%s:%s", hostname, port);
});



