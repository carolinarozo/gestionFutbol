const Faltas = require("../model/faltas"),


    faltasControler = {}

faltasControler.create = async (req, res) => {
    const {
        nombre,
        nomenclatura

    } = req.body

    const newFaltas = new Faltas({
        nombre: nombre,
        nomenclatura: nomenclatura

    })

    await newFaltas.save()

    res.json({
        status: true
    })

}

faltasControler.get = async (req, res) => {
    const faltas = await Faltas.find({})

    res.json(faltas)
}

faltasControler.findById = async (req, res) => {
    const faltas = await Faltas.find({
        _id: req.params._id
    })
    res.json(faltas)
}

faltasControler.remove = async (req, res) => {
    await Faltas.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

faltasControler.update = async (req, res) => {
    const {
        _id,
        nombre,
        nomenclatura,
    } = req.body

    let toUpdate = {
        nombre: nombre,
        nomenclatura: nomenclatura

    }

    await Faltas.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}

faltasControler.search = async (req, res) => {
    const {
        nombre
    } = req.body
    const faltas = await Faltas.find({
        nombre: {
            $regex: ".*" + nombre + ".*"
        }
    })
    res.json(faltas)

}


module.exports = faltasControler