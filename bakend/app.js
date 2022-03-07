const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    config = require('./config/config'),
    db = require('./database/database'),
    consumer = require("./oi/consumer"),
    socketIO = require('socket.io')




app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(cors())

app.use('/api', require('../bakend/route/index'))


const server = app.listen(config.port, () => {

    console.log(`inicio del servidor en el puerto: ${config.port}`)
})

const io = socketIO(server, {

    cors: {
        origins: ['http:localhost:4200/']
    }
})


consumer.start(io)