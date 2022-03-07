const express = require("express"),
    router = express.Router(),
    arbitroControl = require("../controller/arbitro.controller")

router.post("/", arbitroControl.create)
router.get("/", arbitroControl.get)
router.get("/:_id", arbitroControl.findById)
router.delete("/:_id", arbitroControl.remove)
router.put("/", arbitroControl.update)
router.post("/search", arbitroControl.search)

module.exports = router