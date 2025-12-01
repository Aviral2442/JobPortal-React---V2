// models/StudentPreferences.js
const mongoose = require("mongoose");

const StudentPreferencesSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  preferredJobSector: { type: String }, // Government/Private/PSU
  preferredJobCategory: { type: String },
  preferredJobLocation: { type: String },
  expectedSalaryMin: { type: Number },
  expectedSalaryMax: { type: Number },

  employmentType: { type: String }, // full-time/part-time/internship/remote
  willingToRelocate: { type: Boolean, default: false },

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentPreferencesSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentPreferences", StudentPreferencesSchema);
