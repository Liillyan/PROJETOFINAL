const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    mentor:{
        type: String,
        required: true
    },
    profissão:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },

    whatsapp:{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('mentor', mentorSchema);