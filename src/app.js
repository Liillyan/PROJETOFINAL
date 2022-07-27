const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

app.use(express.json());


 const mentorRoutes = require('./Routes/mentorRoutes');


app.use("/mentor", mentorRoutes);

app.get('/', (req, res) => {
    res.status(200).send({
        title: "Reprograma -> Mentorando - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá, ser humano do outro lado da tela, bem vindo ao meu projeto final!!"
    })
})


module.exports = app;
