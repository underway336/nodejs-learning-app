var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
console.log(req.method, req.url);

next();
};

var helloWorld = function(req, res, next) {
res.setHeader('Content-Type', 'text/plain');
res.end('Goodbye World');
};

var goodbyeWorld = function(req, res, next) {
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World');
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000);

console.log('Server running at http://localhost:3000/');
//http://localhost:3000/
//curl -i http://localhost:3000/

// const express = require("express");
//     const bodyParser = require("body-parser");
    
//     const app = express();
    
//     //делаем наш парсинг в формате json
//     app.use(bodyParser.json());
    
//     // парсит запросы по типу: application/x-www-form-urlencoded
//     app.use(bodyParser.urlencoded({ extended: true }));
    
//     //  простой response - request
//     app.get("/", (req, res) => {
//         console.log(`URL: ${req.url}`);
//       res.json({ message: "Это стартовая страница нашего приложения" });
//     });
    
//     // установить порт, и слушать запросы
//     app.listen(3001, () => {
//       console.log("Сервер запущен на 3001 порту");
//     });
