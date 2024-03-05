const express = require("express");
const router = express.Router();
const {
  registerMenu,
  updateMenu,
  deleteMenu,
  findMenu,
} = require("../controller/menucontroller");

router.post("/register", registerMenu);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);
router.get("/:id", findMenu)

module.exports = router;
