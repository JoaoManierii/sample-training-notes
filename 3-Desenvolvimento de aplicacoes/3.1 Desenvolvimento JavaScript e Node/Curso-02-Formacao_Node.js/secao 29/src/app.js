let express = require("express")
let app = express()



app.get("/", (req, res) => {
    res.statusCode(200);
})

app.get("/cor/joao", (req, res) => {
    let pessoa = req.params.pessoa;
    if (pessoa === "joao") {
        res.json({cor: "Vermelho"});
    }
})

module.exports = app;