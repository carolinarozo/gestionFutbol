const mongoose = require("mongoose")

const jugadorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        lowercase: true
    },
    fechaNacimiento: String,
    edad: Number




})

module.exports = mongoose.model('jugador', jugadorSchema)