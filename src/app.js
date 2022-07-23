require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const db = require('./database/mongoConfig')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
    res.status(200).send({
        title: "Reprograma -> Mentorando - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá, ser humano do outro lado da tela, bem vindo!"
    })
})

db.connect()

module.exports = app;
