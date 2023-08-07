const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  //   date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("students", StudentSchema);
