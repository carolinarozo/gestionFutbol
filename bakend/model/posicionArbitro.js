const mongoose = require("mongoose")

const posicionArbitroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        lowercase: true
    },
    nomenclatura: {
        type: String,
        uppercase: true
    }



})

module.exports = mongoose.model('posicionArbitro', posicionArbitroSchema)