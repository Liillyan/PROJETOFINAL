const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Banco de dados conectado com sucesso!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect
}
