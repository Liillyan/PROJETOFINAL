const express = require("express");
const router = express.Router();

const Controller = require("../Controller/mentorController");

router.get("/all", Controller.getAll);

router.post("/create", Controller.createMentor);

 router.put("/update/:id", Controller.updateMentor);

 router.delete("/delete/:id", Controller.deleteMentor);

module.exports = router;