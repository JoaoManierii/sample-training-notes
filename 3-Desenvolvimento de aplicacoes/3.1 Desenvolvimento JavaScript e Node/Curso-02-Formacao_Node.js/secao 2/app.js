var http = require('http');

http.createServer(function(req, res){
    res.end("<h1>Bem vindo ao meu site fml!</h1><br> <h2>Da uma olhada la no meu <a href='https://github.com/JoaoManierii'>github</a></h2>");
}).listen(8181);

console.log("Servidor rodando!");