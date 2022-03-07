const express = require("express"),
    router = express.Router(),
    faltaControl = require("../controller/faltas.controller")

router.post("/", faltaControl.create)
router.get("/", faltaControl.get)
router.get("/:_id", faltaControl.findById)
router.delete("/:_id", faltaControl.remove)
router.put("/", faltaControl.update)
router.post("/search", faltaControl.search)

module.exports = router