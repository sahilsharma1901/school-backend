const express = require("express");

const standardController = require("../controllers/teacher");

const router = express.Router();

router.get("/", standardController.getTeachers);

module.exports = router;

