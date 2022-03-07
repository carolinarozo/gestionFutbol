const Tecnico = require("../model/tecnico"),


    tecnicoControler = {}

function calculodeEdad(fechadeNacimiento) {
    const fecha = new Date(fechadeNacimiento)

    const fechaActual = new Date()

    let añoActual = fechaActual.getFullYear()

    let añoFecha = fecha.getFullYear()

    let años = añoActual - añoFecha
    if (fechaActual.getMonth() > (fechaActual.getMonth() + 1) || fecha.getDay() > fechaActual.getDay()) {
        años = años - 1
    }
    return años
}

tecnicoControler.create = async (req, res) => {
    const {
        nombre,
        fechaNacimiento


    } = req.body

    const edad = calculodeEdad(fechaNacimiento)

    const newTecnico = new Tecnico({
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        edad: edad


    })

    await newTecnico.save()

    res.json({
        status: true
    })

}

tecnicoControler.get = async (req, res) => {
    const tecnico = await Tecnico.find({})

    res.json(tecnico)
}

tecnicoControler.findById = async (req, res) => {
    const tecnico = await Tecnico.find({
        _id: req.params._id
    })
    res.json(tecnico)
}

tecnicoControler.remove = async (req, res) => {
    await Tecnico.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

tecnicoControler.update = async (req, res) => {
    const {
        _id,
        nombre,
        fechaNacimiento

    } = req.body

    const edad = calculodeEdad(fechaNacimiento)

    let toUpdate = {
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        edad: edad

    }

    await Tecnico.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}

tecnicoControler.search = async (req, res) => {

    const {
        nombre
    } = req.body
    const tecnico = await Tecnico.find({
        nombre: {
            $regex: ".*" + nombre + ".*"
        }
    })
    res.json(tecnico)

}


module.exports = tecnicoControler