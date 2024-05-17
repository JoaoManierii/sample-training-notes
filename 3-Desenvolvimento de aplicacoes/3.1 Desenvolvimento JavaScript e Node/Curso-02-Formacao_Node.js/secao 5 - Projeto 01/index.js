const express = require('express'); // Importa o express
const app = express(); // Cria uma instância do express
const bodyParser = require('body-parser'); // Importa o body-parser
const connection = require('./database/database'); // Importa a conexão com o banco de dados
const Pergunta = require('./database/pergunta'); // Importa o model Pergunta
const Resposta = require('./database/Resposta'); // Importa o model Resposta

connection.authenticate().then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!');
}).catch((msgErro) => { 
    console.log(msgErro);
});

app.set('view engine', 'ejs'); // Define o EJS como o motor de renderização
app.use(express.static('public')); // Define a pasta public como a pasta que contém os arquivos estáticos

app.use(bodyParser.urlencoded({extended: false})); // Permite que os dados enviados pelo formulário sejam interpretados
app.use(bodyParser.json()); // Converte os dados enviados pelo formulário em JSON

// Rotas
app.get ('/', (req, res) => { 
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC']
    ] }).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    });
});

app.get ('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post ('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    });
});

app.get ('/pergunta/:id', (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
                if (pergunta != undefined) {
                    Resposta.findAll({
                        where: {perguntaId: pergunta.id},
                        order: [['id', 'DESC']]
                    }).then(respostas => {
                        res.render('pergunta', {
                            pergunta: pergunta,
                            respostas: respostas
                        });
                    });
                } else {
                    res.redirect('/');
                }
            });
        });


app.post ("/responder", (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId);
    });
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
}); // Inicia o servidor na porta 8000