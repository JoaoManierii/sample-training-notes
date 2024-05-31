let app = require("../src/app");
let superTest = require("supertest");
let request = superTest(app);

describe("Cadastro de Usuario", () => {
    test("Deve cadastrar um usuario com sucesso", () => {
        let time = Date.now();
        let email = `${time}@mail.com`;
        let user = { name: "Joao Manieri", email, password: "123456" };
    
        return request.post("/user").send(user).then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
        }).catch(err => {

        });
    });

    test("Deve impedir que um usuario se cadastre com os dados vazios", () => {
        let user = { name: "", email: "", password: "" };
        return request.post("/user").send(user).then(res => {
            expect(res.statusCode).toEqual(400);
        }).catch(err => {

        });
    });

    test("Deve impedir que um usuario se cadastre com o email ja existente", () => {
            let time = Date.now();
            let email = `${time}@mail.com`;
            let user = { name: "Joao Manieri", email, password: "123456" };
        
            return request.post("/user").send(user).then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(email);

            return request.post("/user").send(user).then(res => {
                expect(res.statusCode).toEqual(400);
                expect(res.body.error).toEqual("Email ja existente");
                }).catch(err => {
        
                });
            }).catch(err => {
    
            });
        });
});
