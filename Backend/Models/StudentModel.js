const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 3, maxlength: 20 },
  lastName: { type: String, required: true, minlength: 3, maxlength: 20 },
  email: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  birthDate: { type: String, required: true },
  country: { type: String, required: true },
});

// StudentSchema.pre("save", function (next) {
//   // Set the time to midnight (00:00:00)
//   this.birthDate.setUTCHours(0, 0, 0, 0);
//   next();
// });
module.exports = mongoose.model("students", StudentSchema);
