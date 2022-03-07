const mongoose = require("mongoose")

const asiganarPosicionJugadorSchema = new mongoose.Schema({

    id_posicion: {
        type: String
    },

    id_futbolistas: {
        type: Array
    }




})

module.exports = mongoose.model('asiganarPosicionJugador', asiganarPosicionJugadorSchema)