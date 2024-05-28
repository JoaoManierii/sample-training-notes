const mongoose = require('mongoose');
const articleModel = require('./article');

mongoose.connect('mongodb://localhost:27017/aprendendoMongo');

const Article = mongoose.model("Article", articleModel);



// Article.findByIdAndUpdate("66548acd16771f6c3803d998", {title: "Vue do 0", author: "Lucas", body: "faz o login"}).then(() => {
//     console.log("Artigo atualizado com sucesso!");
// }).catch((err) => {
//     console.log("Erro ao atualizar o artigo: " + err);
// });

Article.find({}).then((articles) => {
    console.log(articles);
}
).catch((err) => {
    console.log("Erro ao listar os artigos: " + err);
}
);

// Article.find({author : "Joao Otavio Manieri"}).then((articles) => {
//     console.log(articles);
// })
//     .catch((err) => {
//         console.log("Erro ao listar os artigos: " + err);
//     }
//     );


// Article.findByIdAndDelete("66548ab7f54b6189ab21625b").then(() => {
//     console.log("Artigo deletado com sucesso!");
// }
// ).catch((err) => {
//     console.log("Erro ao deletar o artigo: " + err);
// }
// );



























// const artigo = new Article(
//     {title : "REST API: Métodos GET, POST, PUT e DELETE",
//     author : "Joao Otavio Manieri",
//     body : "Corpo do artigo",
//     special : true,
//     resume : {
//         content : "Resumo do artigo",
//         author : "Lucas"
//              }
//      });


// artigo.save().then(() => {
//     console.log("Artigo salvo com sucesso!");
// }).catch((err) => {
//     console.log("Erro ao salvar o artigo: " + err);
// });