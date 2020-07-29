const express = require("express");

const standardController = require("../controllers/standard");

const router = express.Router();

router.get("/", standardController.getClasses);
router.get("/:classNumber", standardController.getClass);
router.post("/:classNumber", standardController.postStudentInClass);

module.exports = router;

