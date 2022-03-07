const express = require("express"),
    router = express.Router(),
    tecnicoControl = require("../controller/tecnico.controller")

router.post("/", tecnicoControl.create)
router.get("/", tecnicoControl.get)
router.get("/:_id", tecnicoControl.findById)
router.delete("/:_id", tecnicoControl.remove)
router.put("/", tecnicoControl.update)
router.post("/search", tecnicoControl.search)

module.exports = router