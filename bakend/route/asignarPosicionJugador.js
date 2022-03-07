const express = require("express"),
    router = express.Router(),
    asignarPosicionJugadorControl = require("../controller/asociarPosicionJugador.controller")

router.post("/", asignarPosicionJugadorControl.create)
router.get("/", asignarPosicionJugadorControl.get)
router.get("/:_id", asignarPosicionJugadorControl.findById)
router.delete("/:_id", asignarPosicionJugadorControl.remove)
router.put("/", asignarPosicionJugadorControl.update)


module.exports = router