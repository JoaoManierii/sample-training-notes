class Filme {
    constructor(titulo, duracao, ano, genero, diretor, atores) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
    }



    Reproduzir() {
        console.log('Reproduzindo...');
    }

        Pausar() {
            console.log('Pausado ||');
        }

        Avancar() {
            console.log('Avançar >>');
        }

        Fechar() {
            console.log('Fechar X');
        }

        Ficha() {
            console.log('Título: ' + this.titulo);
            console.log('Ano: ' + this.ano);
            console.log('Gênero: ' + this.genero);
            console.log('Diretor: ' + this.diretor);
            console.log('Atores: ' + this.atores);
            console.log('Duração: ' + this.duracao + ' minutos');
        }

    }
    
    var inter = new Filme("interestelar", 169, 2014, "Ficção Científica", "Christopher Nolan", ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]);
    inter.Ficha();
