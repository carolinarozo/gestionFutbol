const Jugador = require("../model/jugador"),


    jugadorControler = {}

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

jugadorControler.create = async (req, res) => {
    const {
        nombre,
        fechaNacimiento


    } = req.body

    const edad = calculodeEdad(fechaNacimiento)

    const newjugador = new Jugador({
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        edad: edad


    })

    await newjugador.save()

    res.json({
        status: true
    })

}

jugadorControler.get = async (req, res) => {
    const jugador = await Jugador.find({})

    res.json(jugador)
}

jugadorControler.findById = async (req, res) => {
    const jugador = await Jugador.find({
        _id: req.params._id
    })
    res.json(jugador)
}

jugadorControler.remove = async (req, res) => {
    await Jugador.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

jugadorControler.update = async (req, res) => {
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

    await Jugador.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}

jugadorControler.search = async (req, res) => {

    const {
        nombre
    } = req.body
    const jugador = await Jugador.find({
        nombre: {
            $regex: ".*" + nombre + ".*"
        }
    })
    res.json(jugador)

}


module.exports = jugadorControler