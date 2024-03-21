const http = require('node:http')
const fs = require('fs')
const event = require('events')
const url = require('node:url')

//const door = new event.EventEmitter()
const server = http.createServer()

server.on('request', (req, res) => {
    /*
    fs.readFile('home.html', (err, data) => {
        res.writeHead(200, { 'content-Type': 'text/html'});
        res.write(data);
    })
    */
   var myUrl = url.parse(req.url, true);
   var q = myUrl.pathname;
   console.log(q);
   if (q == '/') {
    fs.readFile('home.html', (err, data) => {
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
    })}

   else if (q == '/about') {
    fs.readFile('about.html', (err, data) => {
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
   })}

   else if (q == '/contact') {
    fs.readFile('contact.html', (err, data) => {
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
   })}
   else {
    fs.readFile('404.html', (err, data) => {
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
   })}
})

server.listen(process.env.PORT)
console.log(`Server is running on ${process.env.HOST}`)