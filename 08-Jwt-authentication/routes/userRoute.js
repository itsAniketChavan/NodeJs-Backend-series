const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateUser,
  findUser,
  login,
  deleteUser,
 
} = require("../controller/userController");
const {verifyToken,restrict} = require('../middleware/auth')

router.post("/register", registerUser);
router.put("/:id",verifyToken , updateUser);
router.get('/:id', findUser)
router.post('/login', login)
router.delete('/:id', verifyToken,  deleteUser)

module.exports = router;
