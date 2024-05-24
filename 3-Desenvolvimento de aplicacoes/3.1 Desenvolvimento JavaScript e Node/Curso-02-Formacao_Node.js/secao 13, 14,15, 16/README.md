# API de games

Esta API foi utilizada para aprendizado de criacao e consumo de APIs, simulando um banco de dados falso e realizando um CRUD completo de uma loja de jogos.

## EndPoints

### GET /games

Esse endpoint e responsavel por retornar a listagem de todos os games cadastrados no banco de dados.

#### Parametros

Nenhum

#### Respostas

##### OK ! 200

Caso essa resposta aconteca, voce vai receber a listagem de todos os games.

Exemplo de resposta:

```
{
"empresa": "Compasso UOL",
"user": {
"id": 1,
"email": "joao@gmail.com"
},
"games": [
{
"id": 22,
"title": "Call of duty MW",
"year": 2019,
"price": 60
},
{
"id": 17,
"title": "Raibow Six Siege",
"year": 2015,
"price": 40
},
{
"id": 13,
"title": "Valorant",
"year": 2020,
"price": 20
}
]
}
```

##### Falha na autenticacao ! 401

Caso essa resposta aconteca, isso significa que aconteceu alguma falha durante o processo da requisicao. Motivos: Token invalido, Token expirado.

Exemplo de resposta:

```
{
"err": "Token inválido!"
}
```

### GET /game/:id

Esse endpoint e responsavel por retornar os detalhes de um jogo especifico com base no ID fornecido.

#### Parametros

- id: ID do jogo (numero)

#### Respostas

##### OK ! 200

Caso essa resposta aconteca, voce vai receber os detalhes do jogo especificado.

##### Falha na autenticacao ! 401

Caso essa resposta aconteca, isso significa que aconteceu alguma falha durante o processo da requisicao. Motivos: Token invalido, Token expirado.

##### Nao encontrado ! 404

Caso essa resposta aconteca, isso significa que o jogo com o ID especificado nao foi encontrado.

### POST /game

Esse endpoint e responsavel por adicionar um novo jogo a lista de jogos.

#### Parametros

Nenhum

#### Corpo da requisicao

```
{
"title": "Nome do jogo",
"price": "Preco do jogo",
"year": "Ano de lancamento do jogo"
}
```

#### Respostas

##### OK ! 200

Caso essa resposta aconteca, o jogo e adicionado com sucesso a lista.

##### Falha na autenticacao ! 401

Caso essa resposta aconteca, isso significa que aconteceu alguma falha durante o processo da requisicao. Motivos: Token invalido, Token expirado.

### DELETE /game/:id

Esse endpoint e responsavel por remover um jogo da lista com base no ID fornecido.

#### Parametros

- id: ID do jogo a ser removido (numero)

#### Respostas

##### OK ! 200

Caso essa resposta aconteca, o jogo e removido com sucesso da lista.

##### Falha na autenticacao ! 401

Caso essa resposta aconteca, isso significa que aconteceu alguma falha durante o processo da requisicao. Motivos: Token invalido, Token expirado.

##### Nao encontrado ! 404

Caso essa resposta aconteca, isso significa que o jogo com o ID especificado nao foi encontrado.

### PUT /game/:id

Esse endpoint e responsavel por atualizar as informacoes de um jogo com base no ID fornecido.

#### Parametros

- id: ID do jogo a ser atualizado (numero)

#### Corpo da requisicao
```
{
"title": "Novo nome do jogo (opcional)",
"price": "Novo preco do jogo (opcional)",
"year": "Novo ano de lancamento do jogo (opcional)"
}
```

#### Respostas

##### OK ! 200

Caso essa resposta aconteca, as informacoes do jogo sao atualizadas com sucesso.

##### Falha na autenticacao ! 401

Caso essa resposta aconteca, isso significa que aconteceu alguma falha durante o processo da requisicao. Motivos: Token invalido, Token expirado.

##### Nao encontrado ! 404

Caso essa resposta aconteca, isso significa que o jogo com o ID especificado nao foi encontrado.

### POST /auth

Esse endpoint e responsavel por retornar e fazer o processo de login.

#### Parametros no corpo da requisicao

- Email: email do usuario cadastrado no sistema
- Password: senha do usuario cadastrado no sistema

Exemplo:
```
{
"email": "joao@gmail.com",
"password": "nodejs123"
}
```

#### Respostas

##### OK ! 200

Caso essa resposta aconteca, a API retorna o token do usuario.

Exemplo:

```
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTcxNjU1NTc3NCwiZXhwIjoxNzE2NzI4NTc0fQ.hgTkFtqYIhWn0V7tm6yhSQKFoVspluusUHaDk5XHP88"
}
```

##### Falha na autenticacao ! 401

Caso essa resposta aconteca, isso significa que aconteceu alguma falha durante o processo da requisicao. Motivos: email e/ou senha incorretos.
