// const path = require("path");
class StudentController {
  async GetAllStudents(req, res) {
    console.log("hello students");
    // console.log(__dirname);
    res.send("ok");
  }
}
module.exports = new StudentController();
