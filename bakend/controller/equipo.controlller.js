const Equipo = require("../model/equipo"),
    Tecnico = require('../model/tecnico')




equipoControler = {}



equipoControler.create = async (req, res) => {
    const {
        nombre,
        id_tecnico,
        color,
        id_futbolistas


    } = req.body



    const newEquipo = new Equipo({
        nombre: nombre,
        id_tecnico: id_tecnico,
        color: color,
        id_futbolistas: id_futbolistas


    })

    await newEquipo.save()

    res.json({
        status: true
    })

}

equipoControler.get = async (req, res) => {
    const equipo = await Equipo.find({})

    let equipoi = []




    for (let i = 0; i < equipo.length; i++) {
        console.log(equipo[i].id_tecnico)
        const tecnico = await Tecnico.find({
            _id: equipo[i].id_tecnico

        })

        const objetoEquipo = new Object()



        objetoEquipo._id = equipo[i]._id
        objetoEquipo.nombre = equipo[i].nombre
        objetoEquipo.color = equipo[i].color
        objetoEquipo.id_tecnico = equipo[i].id_tecnico
        objetoEquipo.nombreTecnico = tecnico[0].nombre
        objetoEquipo.id_futbolistas = equipo[i].id_futbolistas




        console.log(objetoEquipo)
        equipoi.push(objetoEquipo)




    }
    console.log(equipo)










    res.json(equipoi)
}

equipoControler.findById = async (req, res) => {
    const equipo = await Equipo.find({
        _id: req.params._id
    })
    res.json(equipo)
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
        color,
        id_futbolistas,
        id_tecnico

    } = req.body



    let toUpdate = {
        nombre: nombre,
        color: color,
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
    const equipo = await Equipo.find({
        nombre: {
            $regex: ".*" + nombre + ".*"
        }
    })
    res.json(equipo)

}


module.exports = equipoControler