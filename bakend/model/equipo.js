const mongoose = require("mongoose")

const equipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        lowercase: true
    },
    color: {
        type: String

    },
    id_tecnico: {
        type: String
    },

    id_futbolistas: {
        type: Array
    }




})

module.exports = mongoose.model('equipo', equipoSchema)