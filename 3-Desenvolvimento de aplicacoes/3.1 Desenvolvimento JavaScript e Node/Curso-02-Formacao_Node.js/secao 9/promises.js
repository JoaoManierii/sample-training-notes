const e = require("express");

function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1500);
    });

}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("jotamanieri@gmail.com");
        }, 2000);
    });
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            if(!deuErro) {
                resolve({time: 6, to: "jotamanieri@gmail.com"}); // Promessa OK!
            } else {
                reject("Fila cheia"); // Promessa rejeitada
            } 
        } , 4000); // 4 segundos de espera
    }
    );
}

function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Joao", lang: "SQL"},
                {name: "Maria", lang: "Python"},
                {name: "Jose", lang: "Java"}
            ]);
        }, 3000);
    });
}

async function principal() {
    var usuarios = await pegarUsuarios();
    console.log(usuarios);
    console.log("Fim da execucao");
}

principal();
   
// pegarId().then((id) => {
//     buscarEmailNoBanco(id).then((email) => {
//         enviarEmail("Ola, como vai ", email).then(() => {
//             console.log("Email enviado, para o usuario com id: " + id);
//         }).catch((erro) => {
//             console.log(erro);
//         });
//     });
// });


// enviarEmail("Ola Mano").then((dados) => {
//     console.log(`
//     Tempo de envio: ${dados.time}
//     -------------------------
//     Para: ${dados.to}
//     `);
// }).catch((erro) => {
//     console.log(`Ocorreu um erro: ${erro}`);
// });