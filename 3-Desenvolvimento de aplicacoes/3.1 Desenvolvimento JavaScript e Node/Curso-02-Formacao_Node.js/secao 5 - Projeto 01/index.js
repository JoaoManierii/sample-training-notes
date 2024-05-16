const express = require('express'); // Importa o express
const app = express(); // Cria uma instância do express
const bodyParser = require('body-parser'); // Importa o body-parser

app.set('view engine', 'ejs'); // Define o EJS como o motor de renderização
app.use(express.static('public')); // Define a pasta public como a pasta que contém os arquivos estáticos

app.use(bodyParser.urlencoded({extended: false})); // Permite que os dados enviados pelo formulário sejam interpretados
app.use(bodyParser.json()); // Converte os dados enviados pelo formulário em JSON

// Rotas
app.get ('/', (req, res) => { 
    res.render('index');
});

app.get ('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post ('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send('Formulário recebido! Título: ' + titulo + ' e Descrição: ' + descricao);
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
}   
);