const express = require("express"),
    router = express.Router(),
    equipoControl = require("../controller/equipo.controlller")

router.post("/", equipoControl.create)
router.get("/", equipoControl.get)
router.get("/:_id", equipoControl.findById)
router.delete("/:_id", equipoControl.remove)
router.put("/", equipoControl.update)
router.post("/search", equipoControl.search)

module.exports = router