const mongoose = require("mongoose")

const arbitroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        lowercase: true
    },
    fechaNacimiento: String,
    edad: Number




})

module.exports = mongoose.model('arbitro', arbitroSchema)