const express = require("express"),
    router = express.Router(),
    posicionControl = require("../controller/posicion.controller")

router.post("/", posicionControl.create)
router.get("/", posicionControl.get)
router.get("/:_id", posicionControl.findById)
router.delete("/:_id", posicionControl.remove)
router.put("/", posicionControl.update)
router.post("/search", posicionControl.search)

module.exports = router