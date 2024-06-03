let app = require("../src/app");
let superTest = require("supertest");
let request = superTest(app);

let mainUser = { name: "Joao Manieri", email: "xj6@gmail.com", password: "123456" };

beforeAll(() => {
    return request.post("/user")
    .send(mainUser).then(res => {

    }).catch(err => {
        console.log(err);
    });
});

// // afterAll(() => {
//     return request.delete(`/user/${mainUser.email}`)
//     .then(res => {})
//     .catch(err => {
//         console.log(err);
//     });
// });

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

describe("Autenticacao de Usuario", () => {
    test("Deve me retonar um token ao logar", () => {
        return request.post("/auth")
        .send({ email: mainUser.email, password: mainUser.password })
        .then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.token).toBeDefined();
        }).catch(err => {

        });
    });
    test("Deve impedir que um usuario nao cadastrado se loge", () => {
        return request.post("/auth")
        .send({ email: "emailx@x.com", password: "32111" })
        .then(res => {
            expect(res.statusCode).toEqual(403); // 403 - Forbidden
            expect(res.body.errors.password).toEqual("Senha errada");
        }).catch(err => {

        });
    });

    test("Deve impedir que um usuario se logue com a senha errada", () => {
        return request.post("/auth")
        .send({ email: "xj6@gmail.com", password: "321" })
        .then(res => {
            expect(res.statusCode).toEqual(403);
            expect(res.body.errors).toEqual("Email nao cadastrado");
        }).catch(err => {

        });
    });
});

   