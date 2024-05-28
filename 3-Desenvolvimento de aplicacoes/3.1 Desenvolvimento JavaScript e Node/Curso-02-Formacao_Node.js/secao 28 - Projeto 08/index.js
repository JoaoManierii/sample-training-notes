const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const appointmentService = require('./services/appointmentService');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");


mongoose.connect('mongodb://localhost:27017/agendamento');



app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cadastro", (req, res) => {
    res.render("create");
});

app.post("/create", async (req, res) => {
    var status = appointmentService.create(
        req.body.name,
        req.body.email,
        req.body.cpf,
        req.body.description,
        req.body.date,
        req.body.time);
    if (status) {
        res.redirect("/");
    }
    else {
        res.send("Houve um erro ao realizar o agendamento");
    }

});

app.get("/getcalendar", async (req, res) => {
    var appointments = await appointmentService.GetAll(false);
    res.json(appointments);
});

app.get("/event/:id", async (req, res) => {
    var id = req.params.id;
    var appointment = await appointmentService.GetById(id);
    res.render("event", {appo: appointment});
});

app.post("/finish", async (req, res) => {
    var id = req.body.id;
    var result = await appointmentService.Finish(id);
   res.redirect("/");
});

app.get("/list", async (req, res) => {
    var appos = await appointmentService.GetAll(true);
    res.render("list", {appos});
});

app.get("/searchresult", async (req, res) => {
    var appos = await appointmentService.Search(req.query.search);
    res.render("list", {appos});
});


app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
