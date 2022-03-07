const Posicion = require("../model/posicion"),


    posicionControler = {}

posicionControler.create = async (req, res) => {
    const {
        nombre,
        nomenclatura

    } = req.body

    const newPosicion = new Posicion({
        nombre: nombre,
        nomenclatura: nomenclatura

    })

    await newPosicion.save()

    res.json({
        status: true
    })

}

posicionControler.get = async (req, res) => {
    const posicion = await Posicion.find({})

    res.json(posicion)
}

posicionControler.findById = async (req, res) => {
    const posicion = await Posicion.find({
        _id: req.params._id
    })
    res.json(posicion)
}

posicionControler.remove = async (req, res) => {
    await Posicion.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

posicionControler.update = async (req, res) => {
    const {
        _id,
        nombre,
        nomenclatura,
    } = req.body

    let toUpdate = {
        nombre: nombre,
        nomenclatura: nomenclatura

    }

    await Posicion.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}

posicionControler.search = async (req, res) => {
    const {
        nombre
    } = req.body
    const posicion = await Posicion.find({
        nombre: {
            $regex: ".*" + nombre + ".*"
        }
    })
    res.json(posicion)

}


module.exports = posicionControler