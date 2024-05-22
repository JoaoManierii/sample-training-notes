const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Banco de dados falso para simular uma API
var DB = {
    games: [
        {
            id: 23,
            title: "Call of Duty",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Valorant",
            year: 2020,
            price: 0
        },
        {
            id: 2,
            title: "Rainbow Six Siege",
            year: 2015,
            price: 20
        }
    ]
};

app.listen(3000, () => {
    console.log("API RODANDO");
});

app.get("/game", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

// GET e para buscar um recurso
app.get("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        if (game != undefined) {
            res.statusCode = 200;
            res.json(game);
        } else {
            res.sendStatus(404);
        }
    }
});

// POST e para criar um novo recurso
app.post("/game", (req, res) => { 
    var { title, price, year } = req.body;

    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });

    res.sendStatus(200);
});

// DELETE e para deletar um recurso
app.delete("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);
        if (index == -1) {
            res.sendStatus(404);
        } else {
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

// PUT e para atualizar um recurso
app.put("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        if (game != undefined) {
            var { title, price, year } = req.body;
            if (title != undefined) {
                game.title = title;
            }
            if (price != undefined) {
                game.price = price;
            }
            if (year != undefined) {
                game.year = year;
            }
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }
});