const express = require("express");
const router = express.Router();
const StudentController = require("../Controllers/StudentController");
router.get("/", StudentController.GetAllStudents);
router.post("/create", StudentController.CreateNewStudent);
router.put("/update/:id", StudentController.UpdateStudent);
router.delete("/delete/:id", StudentController.deleteStudent);

module.exports = router;
