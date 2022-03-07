const mongoose = require("mongoose")

const faltaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        lowercase: true
    },
    nomenclatura: {
        type: String,
        uppercase: true
    }



})

module.exports = mongoose.model('falta', faltaSchema)