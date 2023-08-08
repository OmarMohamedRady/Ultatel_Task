const StudentModel = require("../Models/StudentModel");
const StudentValidation = require("../Utils/StudentValidation");
class StudentController {
  async GetAllStudents(req, res) {
    try {
      let AllStudentsData = await StudentModel.find({});
      return res.status(200).json({
        success: true,
        message: "data retrieved successfully",
        data: AllStudentsData,
      });
    } catch (err) {
      return res.json({
        success: false,
        message: "failed to retrieve data",
        error: err,
      });
    }
  }

  async CreateNewStudent(req, res) {
    try {
      let StudentData = req.body;
      const valid = StudentValidation(StudentData);
      if (!valid) {
        return res.json({
          success: false,
          message: "validation error",
        });
        // console.log(StudentValidation.errors);
      }
      let CheckStudent = await StudentModel.findOne({
        email: StudentData.email,
      });

      if (CheckStudent) {
        return res.json({
          success: false,
          message: "student is already exist",
        });
      }
      let NewStudent = new StudentModel(StudentData);
      await NewStudent.save();
      return res.status(201).json({
        success: true,
        message: "student added successfully.",
      });
    } catch (err) {
      // console.log(err)
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
}
module.exports = new StudentController();
