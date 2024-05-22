class Animal {
    constructor(nome, idade, preco) {
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;

    }

    emitirSom() {
        console.log('Som de animal');
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log('Au au');
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log('Miau');
    }
}

class PastorAlemao extends Cachorro {
    constructor(nome, idade, raca, cor) {
        super(nome, idade, raca);
        this.cor = cor;
    }

    emitirSom() {
        console.log('Au au au');
    }
}

var animal = new Animal('Totó', 3);
var cachorro = new Cachorro('Bob', 5, 'Labrador');
var gato = new Gato('Felix', 2, 'Preto');
var pastorAlemao = new PastorAlemao('Rex', 5, 'Pastor Alemão', 'Preto');

animal.emitirSom();
cachorro.emitirSom();
gato.emitirSom();
