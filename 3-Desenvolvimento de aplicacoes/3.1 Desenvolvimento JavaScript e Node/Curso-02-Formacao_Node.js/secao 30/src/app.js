let express = require("express");
let app = express();
let mongoose = require("mongoose");
let user = require("./models/User");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const e = require("express");
let jtwsecret = "123";


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/guiapics");

let User = mongoose.model("User", user);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/user", async (req, res) => {

    if(req.body.name == "" || req.body.email == "" || req.body.password == "") {
        res.sendStatus(400);
        return;
    }
    try {
        let user = await User.findOne({"email": req.body.email});
        if(user != undefined) {
            res.statusCode(400);
            res.json({error: "Email ja existente"});
            return;
        }

        let password = req.body.password
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);

        let newuser = new User(name = req.body.name, email = req.body.email, password = hash);
        await newuser.save();
        res.json({email})
    } catch (err) {
        res.sendStatus(500);
    }

});

app.post("/auth", async (req, res) => {
    let {email, password} = req.body;

    let user = await User.findOne({"email":email});
    if(user == undefined) {
        res.sendStatus(404);
        res.json({errors: {email: "Email nao encontrado"}});
        return;
    }

    if(await bcrypt.compare(password, user.password)) {
        res.sendStatus(403);
        res.json({errors: {password: "Senha errada"}});
        return;
    }

    jwt.sign({email}, jtwsecret, {expiresIn: "48h"}, (err, token) => {
        if(err) {
            res.sendStatus(500);
        } else {
            res.json({token});
        }
    });

});
app.delete("/user/:email", async (req, res) => {
    await User.remove({email: req.params.email});
    res.sendStatus(200);
});
  
module.exports = app;
