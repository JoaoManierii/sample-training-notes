let app = require("../src/app")
let superTest = require("supertest");
let request = superTest(app);

test("A aplicacao deve responder na porta 3131", () => {
    
    return request.get("/").then(res => {
        expect(res.statusCode).toEqual(200);
    
    });

});

test("Deve Retornar vermelho como a cor favorita do Joao", () => {
    return request.get("/cor/joao").then(res => {
        expect(res.body.cor).toEqual("Vermelho");
    }); 
});

