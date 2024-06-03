var pdf = require('html-pdf');

var nome = "Joao";
var curso = "Node.js";

var conteudo = `
    <h1>Meu PDF</h1>
    <hr>
    <p>Meu nome e ${nome} </p>
    <p>Se quiser sim mano ${curso}</p>
    `

pdf.create(conteudo, {}).toFile("./meupdf.pdf", function(err, res) {
    if(err) return console.log(err);
    console.log(res);
});