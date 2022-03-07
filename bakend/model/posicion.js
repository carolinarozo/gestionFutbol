const mongoose = require("mongoose")

const posicionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        lowercase: true
    },
    nomenclatura: {
        type: String,
        uppercase: true
    }



})

module.exports = mongoose.model('posicion', posicionSchema)