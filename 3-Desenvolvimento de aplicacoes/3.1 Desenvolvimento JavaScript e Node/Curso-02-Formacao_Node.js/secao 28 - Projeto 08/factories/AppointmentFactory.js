const e = require("express");

class AppointmentFactoery {
    Build(simpleAppointment) {

        var day = simpleAppointment.date.getDate() + 1;
        var month = simpleAppointment.date.getMonth();
        var yar = simpleAppointment.date.getFullYear();
        var hour = Number.parseInt(simpleAppointment.time.split(":")[0]);
        var minute = Number.parseInt(simpleAppointment.time.split(":")[1]);

        var startDate = new Date(yar, month, day, hour, minute, 0, 0);


       var appo = {
        id: simpleAppointment.id,
        title: simpleAppointment.name + " - " + simpleAppointment.description,
        start: startDate,
        end: startDate,
        notified: simpleAppointment.notified,
        email: simpleAppointment.email
       } 
         return appo;
    }
}

module.exports = new AppointmentFactoery();