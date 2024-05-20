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

// o codigo abaixo comentado tem o problema de promise hell, ou seja, muitas promessas aninhadas 
// pegarId().then((id) => {
//     buscarEmailNoBanco(id).then((email) => {
//         enviarEmail("Ola, como vai ", email).then(() => {
//             console.log("Email enviado, para o usuario com id: " + id);
//         }).catch((erro) => {
//             console.log(erro);
//         });
//     });
// });

// o codigo abaixo resolve o problema de promise hell, usando async e await
async function principal() {
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    try {
        await enviarEmail("Ola, como vai ", email);
        console.log("Email enviado, para o usuario com id: " + id);
    } catch(erro) {
        console.log(erro);
    }
}

principal();