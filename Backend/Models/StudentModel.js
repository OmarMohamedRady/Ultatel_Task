const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  FirstName: { type: String, required: true, minlength: 3, maxlength: 20 },
  LastName: { type: String, required: true, minlength: 3, maxlength: 20 },
  Email: { type: String, required: true, unique: true },
  Gender: { type: String, enum: ["male", "female"], required: true },
  BirthDate: {
    type: { year: Number, month: Number, day: Number },
    required: true,
  },
  Age: { type: Number, required: true },
  Country: { type: String, required: true },
});

// StudentSchema.pre("save", function (next) {
//   // Set the time to midnight (00:00:00)
//   this.birthDate.setUTCHours(0, 0, 0, 0);
//   next();
// });
module.exports = mongoose.model("students", StudentSchema);
