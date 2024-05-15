const e = require('express');
const express = require('express'); // Importando o express
const app = express(); // Iniciando o express

app.get("/", function(req, res){
    res.send("<h1>Seja bem-vindo ao meu app!</h1>");
});

app.get("/sobre/:artigo?", function(req, res){

    var artigo = req.params.artigo;
    if (artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>");
    }
    else{
        res.send("<h1>Sobre</h1>");
    }

    res.send("<h1>Quem somos</h1> <br> <h3>Somos uma empresa especializada em criar solucoes para o seu negocio!</h3>");
});

app.get("/canal/youtube", function(req, res){   
    var canal = req.query["canal"];
    if (canal){
        res.send("<h1>" + canal + "</h1>");
    }
    else{
        res.send("Nenhum canal fornecido!");
    }
});

app.get("/ola/:nome/:empresa", function(req, res){
    // REQ => Dados enviados pelo usuario
    // RES => Resposta que sera enviada para o usuario
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Ola " + nome + " da " + empresa + "</h1>");
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro ao iniciar o servidor!");
    }else{
        console.log("Servidor rodando!");
    }
}); 
    
