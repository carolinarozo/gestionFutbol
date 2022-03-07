const Arbitro = require("../model/arbitro"),


    arbitroControler = {}

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

arbitroControler.create = async (req, res) => {
    const {
        nombre,
        fechaNacimiento


    } = req.body

    const edad = calculodeEdad(fechaNacimiento)

    const newarbitro = new Arbitro({
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        edad: edad


    })

    await newarbitro.save()

    res.json({
        status: true
    })

}

arbitroControler.get = async (req, res) => {
    const arbitro = await Arbitro.find({})

    res.json(arbitro)
}

arbitroControler.findById = async (req, res) => {
    const arbitro = await Arbitro.find({
        _id: req.params._id
    })
    res.json(arbitro)
}

arbitroControler.remove = async (req, res) => {
    await Arbitro.deleteOne({
        _id: req.params._id
    })
    res.json({
        status: true
    })
}

arbitroControler.update = async (req, res) => {
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

    await Arbitro.findOneAndUpdate({
        _id: _id
    }, toUpdate, {
        new: true
    })
    res.json({
        status: true
    })
}

arbitroControler.search = async (req, res) => {

    const {
        nombre
    } = req.body
    const arbitro = await Arbitro.find({
        nombre: {
            $regex: ".*" + nombre + ".*"
        }
    })
    res.json(arbitro)

}


module.exports = arbitroControler