const mongoose = require("mongoose")

const tecnicoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        lowercase: true
    },
    fechaNacimiento: String,
    edad: Number




})

module.exports = mongoose.model('tecnico', tecnicoSchema)