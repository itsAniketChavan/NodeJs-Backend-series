const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateUser,
  findUser,
} = require("../controller/userController");

router.post("/register", registerUser);
router.put("/:id", updateUser);
router.get('/:id', findUser)

module.exports = router;
