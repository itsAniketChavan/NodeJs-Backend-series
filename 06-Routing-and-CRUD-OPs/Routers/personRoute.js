const express = require("express");
const router = express.Router();
const Person = require("../models/person");
const {
  registerUser,
  finduser,
  appPersons,
  getbyworktype,
  updatePerson,
  deletePerson
} = require("../Controllers/personController");

router.get("/", appPersons);
router.post("/", registerUser);
router.get("/:id", finduser);
router.get("/worktype/:type", getbyworktype);
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router;
