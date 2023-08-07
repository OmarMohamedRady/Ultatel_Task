const StudentModel = require("../Models/StudentModel");
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
}
module.exports = new StudentController();
