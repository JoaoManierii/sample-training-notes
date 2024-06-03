const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "jotamanieri@gmail.com",
        pass: "123456"
    }
});

transporter.sendMail({
    from: "Joao Otavio <jotamanieri@gmail.com>",
    to: "Joao Manieri <jotamanieri@paypal.com>",
    subject: "Titulo aleatorio",
    text: "Conteudo do texto em si",
    html: "Ola <strong> mundo </strong>!"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
});