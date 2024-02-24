const express = require("express");
const router = express.Router();
const { addMenu, findMenu, menuDelete } = require("../Controllers/menuController");

router.post("/", addMenu);
router.get("/:name", findMenu);
router.delete("/:id", menuDelete)

module.exports = router;
