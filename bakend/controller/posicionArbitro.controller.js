const PosicionArbitro = require("../model/posicionArbitro"),


    poosicionArbitroControler = {}

poosicionArbitroControler.create = async (req, res) => {
    const {
        nombre,
        nomenclatura

    } = req.body

    const newPosicionArbitro = new PosicionArbitro({
        nombre: nombre,
        nomenclatura: nomenclatura

    })

    await newPosicionArbitro.save()

    res.json({
        status: true
    })

}

poosicionArbitroControler.get = async (req, res) => {
    const posicionArbitro = await PosicionArbitro.find({})

    res.json(posicionArbitro)
}

poosicionArbitroControler.findById = async (req, res) => {
    const posicionArbitro = await PosicionArbitro.find({
        _id: req.params._id
    })
    res.json(posicionArbitro)
}

poosicionArbitroControler.remove = async (req, res) => {
    await PosicionArbitro.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

poosicionArbitroControler.update = async (req, res) => {
    const {
        _id,
        nombre,
        nomenclatura,
    } = req.body

    let toUpdate = {
        nombre: nombre,
        nomenclatura: nomenclatura

    }

    await PosicionArbitro.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}

poosicionArbitroControler.search = async (req, res) => {
    const {
        nombre
    } = req.body
    const posicionArbitro = await PosicionArbitro.find({
        nombre: {
            $regex: ".*" + nombre + ".*"
        }
    })
    res.json(posicionArbitro)

}


module.exports = poosicionArbitroControler