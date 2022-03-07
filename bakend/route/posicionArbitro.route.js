const express = require("express"),
    router = express.Router(),
    posicionArbitroControl = require("../controller/posicionArbitro.controller")

router.post("/", posicionArbitroControl.create)
router.get("/", posicionArbitroControl.get)
router.get("/:_id", posicionArbitroControl.findById)
router.delete("/:_id", posicionArbitroControl.remove)
router.put("/", posicionArbitroControl.update)
router.post("/search", posicionArbitroControl.search)

module.exports = router