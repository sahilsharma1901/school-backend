const express = require("express");

const studentController = require("../controllers/student");

const router = express.Router();

router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudent);
router.post("/", studentController.postStudent);
router.patch("/edit/:studentId", studentController.updateStudent);
router.delete("/delete/:studentId", studentController.deleteStudent);

module.exports = router;