var nome = "Minha calculadora";

function soma(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}


module.exports = {
    nome,
    soma,
    subtrair,
    dividir,
    multiplicar
};
