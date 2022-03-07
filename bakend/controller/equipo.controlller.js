const Equipo = require("../model/equipo"),


    equipoControler = {}


equipoControler.create = async (req, res) => {
    const {
        nombre,
        id_tecnico,
        id_futbolistas


    } = req.body



    const newEquipo = new Equipo({
        nombre: nombre,
        id_tecnico: id_tecnico,
        id_futbolistas: id_futbolistas


    })

    await newEquipo.save()

    res.json({
        status: true
    })

}

equipoControler.get = async (req, res) => {
    const Equipo = await Equipo.find({})

    res.json(Equipo)
}

equipoControler.findById = async (req, res) => {
    const Equipo = await Equipo.find({
        _id: req.params._id
    })
    res.json(Equipo)
}

equipoControler.remove = async (req, res) => {
    await Equipo.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

equipoControler.update = async (req, res) => {
    const {
        _id,
        nombre,
        id_futbolistas,
        id_tecnico

    } = req.body



    let toUpdate = {
        nombre: nombre,
        id_tecnico: id_tecnico,
        id_futbolistas: id_futbolistas

    }

    await Equipo.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}

equipoControler.search = async (req, res) => {

    const {
        nombre
    } = req.body
    const Equipo = await Equipo.find({
        nombre: {
            $regex: ".*" + nombre + ".*"
        }
    })
    res.json(Equipo)

}


module.exports = equipoControler