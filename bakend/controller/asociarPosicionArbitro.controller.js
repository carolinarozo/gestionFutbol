const AsociarPosicionArbitro = require("../model/asignarArbitroPosicion"),


    asociarPosicionArbitroControler = {}


asociarPosicionArbitroControler.create = async (req, res) => {
    const {

        id_posicion,
        id_Arbitro


    } = req.body



    const newasociarPosicionArbitro = new AsociarPosicionArbitro({

        id_posicion: id_posicion,
        id_Arbitro: id_Arbitro


    })

    await newasociarPosicionArbitro.save()

    res.json({
        status: true
    })

}

asociarPosicionArbitroControler.get = async (req, res) => {
    const asociarPosicionArbitro = await AsociarPosicionArbitro.find({})

    res.json(asociarPosicionArbitro)
}

asociarPosicionArbitroControler.findById = async (req, res) => {
    const asociarPosicionArbitro = await AsociarPosicionArbitro.find({
        _id: req.params._id
    })
    res.json(asociarPosicionArbitro)
}

asociarPosicionArbitroControler.remove = async (req, res) => {
    await AsociarPosicionArbitro.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

asociarPosicionArbitroControler.update = async (req, res) => {
    const {
        _id,

        id_Arbitro,
        id_posicion

    } = req.body



    let toUpdate = {

        id_posicion: id_posicion,
        id_Arbitro: id_Arbitro

    }

    await AsociarPosicionArbitro.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}




module.exports = asociarPosicionArbitroControler