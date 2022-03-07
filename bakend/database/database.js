const moongoose = require('mongoose'),
    config = require('../config/config')

moongoose.connect(config.urlDB).then(db => console.log(`Conectado a la base de datos`)).catch(err => console.log(err))


module.exports = moongoose