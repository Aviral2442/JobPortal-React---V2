// models/StudentExperience.js
const mongoose = require("mongoose");

const ExperienceItemSchema = new mongoose.Schema({
  companyName: String,
  jobTitle: String,
  jobType: String, // full-time/part-time/intern
  experienceDurationMonths: Number,
  startDate: Number,
  endDate: Number,
  responsibilities: String,
  experienceCertificateUrl: String
}, { _id: false });

const StudentExperienceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },
  experiences: [ExperienceItemSchema],

  totalExperienceMonths: { type: Number, default: 0 },

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentExperienceSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  // optionally compute totalExperienceMonths here
  next();
});

module.exports = mongoose.model("StudentExperience", StudentExperienceSchema);
