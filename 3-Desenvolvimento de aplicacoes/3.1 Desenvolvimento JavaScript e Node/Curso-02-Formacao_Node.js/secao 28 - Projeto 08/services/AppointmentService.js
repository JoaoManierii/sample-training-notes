var appointment = require('../models/Appointment');
var mongoose = require('mongoose');
var AppointmentFactoery = require('../factories/AppointmentFactory');
const { text } = require('body-parser');
var mailer = require("nodemailer");

const Appo = mongoose.model('Appointment', appointment);


class AppointmentService {
    async create(name, email, cpf, description, date, time) {
        const newAppo = new Appo({
            name,
            email,
            cpf,
            description,
            date,
            time,
            finished: false
        });
        try {
            await newAppo.save();
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    async GetAll(showFinished) {
        if (showFinished) {
            return await Appo.find();
        }
        else {
            var appos = await Appo.find({ 'finished': false });
            var appointments = [];

            appos.forEach(appointment => {

                if (appointment.date != undefined) {
                    appointments.push(AppointmentFactoery.Build(appointment));
                }
            });
            return appointments;
        }
    }

    async GetById(id) {
        try {
            var event = await Appo.findOne({ '_id': id });
            return event;
        }
        catch (error) {
            console.log(error);
        }
        return {};
    }

    async Finish(id) {
        try {
            await Appo.findByIdAndUpdate(id, { 'finished': true });
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    async Search(query) {
        try {
            var appos = await Appo.find().or([{ email: query }, { cpf: query }]);
            return appos;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }

    async SendNotification(){
        var appos = await this.GetAll(false);
        
        var transporter = mailer.createTransport({
            host: "sandbox.smtp.mailtrap.io" ,
            port: 2525,
            auth: {
                user: "32671a857dcbb3",
                pass: "c7839084f16280"
            }
         });

        appos.forEach(async app => {
            
            var date = app.start.getTime(); 
            var hour = 1000 * 60 * 60;
            var gap = date-Date.now();

            if(gap <= hour){
                
                if(!app.notified){

                    await Appo.findByIdAndUpdate(app.id,{notified: true});
                    
                    transporter.sendMail({
                        from: "Joao <joao@x.com.br>",
                        to: app.email,
                        subject: "Sua consulta vai acontecer em breve!",
                        text: "Sua consulta vai acontecer em 1h"
                    }).then( () => {

                    }).catch(err => {

                    })

                }
            }

        })
    }
}
module.exports = new AppointmentService();