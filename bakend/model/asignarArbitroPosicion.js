const mongoose = require("mongoose")

const asiganarPosicionArbitroSchema = new mongoose.Schema({

    id_posicion: {
        type: String
    },

    id_Arbitro: {
        type: Array
    }




})

module.exports = mongoose.model('asiganarPosicionArbitro', asiganarPosicionArbitroSchema)