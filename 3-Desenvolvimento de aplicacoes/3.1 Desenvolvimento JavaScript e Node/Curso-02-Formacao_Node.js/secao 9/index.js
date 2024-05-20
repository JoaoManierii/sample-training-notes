setTimeout(() => {
    console.log("Meu nome nao e Joao!");
}, 3000); // 3 segundos de espera

function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        -------------------------
        ${corpo}
        -------------------------
        De: Joao
        `);
        callback("OK", 5, "8s");
    }
    , 8000); // 8 segundos de espera
}

console.log("Inicio do envio do email");

enviarEmail("Oi, seja bem vindo a COMPASS", "jotamanieri@gmail.com", (time, erro) => {
    if(erro == undefined) {
        console.log("Tudo OK!");
        console.log(`Tempo de envio: ${time}`);
}
    else
        console.log("Erro: " + erro);
    console.log("Tudo OK!");
});

