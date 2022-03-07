const express = require("express"),
    router = express.Router(),
    asignarPosicionArbitroControl = require("../controller/asociarPosicionArbitro.controller")

router.post("/", asignarPosicionArbitroControl.create)
router.get("/", asignarPosicionArbitroControl.get)
router.get("/:_id", asignarPosicionArbitroControl.findById)
router.delete("/:_id", asignarPosicionArbitroControl.remove)
router.put("/", asignarPosicionArbitroControl.update)


module.exports = router