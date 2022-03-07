const express = require("express"),
    router = express.Router(),
    jugadorControl = require("../controller/jugador.controller")

router.post("/", jugadorControl.create)
router.get("/", jugadorControl.get)
router.get("/:_id", jugadorControl.findById)
router.delete("/:_id", jugadorControl.remove)
router.put("/", jugadorControl.update)
router.post("/search", jugadorControl.search)

module.exports = router