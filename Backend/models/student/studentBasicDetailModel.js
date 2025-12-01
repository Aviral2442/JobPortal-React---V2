// models/StudentBasicInfo.js
const mongoose = require("mongoose");

const StudentBasicInfoSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  studentDOB: { type: Number }, // unix ms
  studentGender: { type: String, enum: ["male","female","other","prefer_not_to_say"], default: "prefer_not_to_say" },

  studentAlternateMobileNo: { type: String },

  studentMaritalStatus: { type: String, enum: ["single","married","other","prefer_not_to_say"], default: "single" },

  studentMotherTongue: { type: String },
  studentNationality: { type: String },
  studentCitizenship: { type: String },

  studentCreatedAt: { type: Number, default: () => Date.now() },
  studentUpdatedAt: { type: Number, default: () => Date.now() }
});

StudentBasicInfoSchema.pre("save", function(next){
  this.studentUpdatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentBasicInfo", StudentBasicInfoSchema);
