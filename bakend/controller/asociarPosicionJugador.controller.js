const AsociarPosicionJugador = require("../model/asignarJugadorPosicion"),


    asociarPosicionJugadorControler = {}


asociarPosicionJugadorControler.create = async (req, res) => {
    const {

        id_posicion,
        id_jugador


    } = req.body



    const newasociarPosicionJugador = new AsociarPosicionJugador({

        id_posicion: id_posicion,
        id_jugador: id_jugador


    })

    await newasociarPosicionJugador.save()

    res.json({
        status: true
    })

}

asociarPosicionJugadorControler.get = async (req, res) => {
    const asociarPosicionJugador = await AsociarPosicionJugador.find({})

    res.json(asociarPosicionJugador)
}

asociarPosicionJugadorControler.findById = async (req, res) => {
    const asociarPosicionJugador = await AsociarPosicionJugador.find({
        _id: req.params._id
    })
    res.json(asociarPosicionJugador)
}

asociarPosicionJugadorControler.remove = async (req, res) => {
    await AsociarPosicionJugador.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

asociarPosicionJugadorControler.update = async (req, res) => {
    const {
        _id,

        id_posicion,
        id_jugador

    } = req.body



    let toUpdate = {

        id_posicion: id_posicion,
        id_jugador: id_jugador

    }

    await AsociarPosicionJugador.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}




module.exports = asociarPosicionJugadorControler