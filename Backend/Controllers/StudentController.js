const StudentModel = require("../Models/StudentModel");
const StudentValidation = require("../Utils/StudentValidation");
class StudentController {
  ///////////////////////////////////////////////GetAllStudents//////////////////////////////////////////////////////

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

  ///////////////////////////////////////////////CreateNewStudent////////////////////////////////////////////////////

  async CreateNewStudent(req, res) {
    try {
      let StudentData = req.body;
      const IsValid = StudentValidation(StudentData);
      // if (!valid) {
      //   return res.json({
      //     success: false,
      //     message: "validation error",
      //   });
      //   // console.log(StudentValidation.errors);
      // }

      CheckStudentValidation(IsValid, "validation error");
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

  ///////////////////////////////////////////////UpdateStudent///////////////////////////////////////////////////////

  async UpdateStudent(req, res) {
    try {
      let StudentID = req.params.id;
      let StudentData = req.body;
      const IsValid = StudentValidation(StudentData);
      // if (!valid) {
      //   return res.json({
      //     success: false,
      //     message: "validation error",
      //   });
      // }
      CheckStudentValidation(IsValid, "validation error");
      let CheckStudent = await StudentModel.findOne({ _id: StudentID });
      if (!CheckStudent) {
        return res.status(404).json({
          success: false,
          message: "student not found.",
        });
      }
      let UpdatedStudent = await StudentModel.findOneAndUpdate(
        { _id: StudentID },
        StudentData
      );
      // console.log(req.body)
      return res.status(201).json({
        success: true,
        message: "student update successfully.",
      });
    } catch (err) {
      // console.log(err);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }

  ///////////////////////////////////////////////deleteStudent///////////////////////////////////////////////////////

  async deleteStudent(req, res) {
    try {
      let StudentID = req.params.id;
      let CheckStudent = await StudentModel.findOne({ _id: StudentID });
      if (!CheckStudent) {
        return res.status(404).json({
          success: false,
          message: "student not found.",
        });
      }
      let DeletedStudent = await StudentModel.deleteOne({ _id: StudentID });
      return res.status(201).json({
        success: true,
        message: "student deleted successfully.",
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }

  CheckStudentValidation(IsValid, message) {
    if (!IsValid) {
      return res.json({
        success: false,
        message: message,
      });
    }
  }
}
module.exports = new StudentController();
