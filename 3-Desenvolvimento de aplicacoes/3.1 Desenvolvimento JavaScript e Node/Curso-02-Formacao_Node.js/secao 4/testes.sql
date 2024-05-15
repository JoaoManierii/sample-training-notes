CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    idade INT(10) NOT NULL
);

INSERT INTO usuarios (nome, email, idade) VALUES (
    "Joao Manieri",
    "joao.manieri.pb@campasso.com.br",
    22
 );

SELECT * FROM usuarios;


INSERT INTO usuarios (nome, email, idade) VALUES
    ("Maria Manieri", "maria.manieri@gmail.com", 20),
    ("Pedro Silva", "pedro.silva@gmail.com", 25),
    ("Ana Santos", "ana.santos@gmail.com", 30),
    ("Carlos Oliveira", "carlos.oliveira@gmail.com", 28)
    ;

SELECT * FROM usuarios WHERE idade > 25;
SELECT * FROM usuarios WHERE nome LIKE "%Manieri%";

DELETE FROM usuarios WHERE id = 2;
DELETE FROM usuarios WHERE idade < 18;

UPDATE usuarios SET nome = "Ana Roling" WHERE nome = "Ana Santos";