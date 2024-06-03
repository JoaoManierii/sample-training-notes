const express = require('express');
const app = express();
const multer = require('multer');


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 3000');
});