// var nome = "Joao Otavio"; // variavel global
// let nome2 = "Joao Carlos"; // variavel global 
// // Global: Todo mundo pode acessar
// // Local: Apenas a função onde foi declarada pode acessar

// // VAR so tem dois escopos possiveis: Global e Local
// // LET tem 3 escopos possiveis: Global, Local e Bloco

// function falarNome() {
//     var sobrenome = "Manieri"; // variavel local
//     let sobrenome2 = "Manieri2"; // variavel local
//     console.log(nome + " " + sobrenome);
//     console.log(nome2 + " " + sobrenome2);
// }

// function falarSobrenome() {
//     //console.log(sobrenome); // erro, pois a variavel sobrenome é local
// }

// falarNome();
// falarSobrenome();
// console.log(nome);
// console.log("===============================================================================================");

// let a = 10; // escopo global
// let testar = true; // escopo global

// if (testar) {
//     let b = 20; // escopo de bloco
//     console.log(a + b);
// }

// var nome = "Joao Otavio"; 
// var sobrenome = "Manieri";
// var idade = 20;


// var empresa = {
//     empresa: "Compasso UOL",
//     cidade: "Porto Alegre",
//     estado: "RS"
// };

// var user = {
//     nome,
//     sobrenome,
//     idade,
//     ...empresa // Spread Operator - Pega todas as propriedades de um objeto e coloca dentro de outro
// };

// var {nome, empresa, cidade} = user; // Destructuring - Pega uma propriedade de um objeto e coloca em uma variavel

// console.log(empresa);
// console.log(cidade);


// console.log(user);

// var multiplicar = (a, b) => a * b; // Arrow Function
// console.log(multiplicar(2, 2));

// var somar = (a, b) => {
//     return a + b;
// } 

// var joao = {
//     nome: "Joao Otavio",
//     empresa : "Compasso UOL"
// };

// var ana = {
//     nome: "Ana",
//     empresa : "Bradesco"
// };

// var matheus = {
//     nome: "Matheus",
//     empresa : "PWI"
// };

// var usuarios = [joao, ana, matheus];

// var user = usuarios.find(usuario => usuario.nome === "Joao Otavio"); // Procura um usuario com o nome Joao Otavio
// console.log(user);

var nome = "Joao Otavio";
var sobre = "Desenvolvedor blockchain";

var frase = `Meu nome é ${nome} e sou ${sobre}`;

console.log(frase);