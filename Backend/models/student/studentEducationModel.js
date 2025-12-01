// models/StudentEducation.js
const mongoose = require("mongoose");

const StudentEducationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  highestQualification: String,
  currentEducationStatus: { type: String, enum: ["studying","completed","dropped","other"], default: "studying" },

  tenth: {
    schoolName: String,
    board: String,
    passingYear: Number,
    percentage: Number,
    marksheetUrl: String
  },

  twelfth: {
    schoolCollegeName: String,
    board: String,
    stream: String,
    passingYear: Number,
    percentage: Number,
    marksheetUrl: String
  },

  graduation: {
    collegeName: String,
    courseName: String,
    specialization: String,
    passingYear: Number,
    percentage: Number,
    marksheetUrl: String
  },

  postGraduation: {
    collegeName: String,
    courseName: String,
    specialization: String,
    passingYear: Number,
    percentage: Number,
    marksheetUrl: String
  },

  additionalEducation: {
    diplomaCourse: String,
    itiCourse: String,
    polytechnic: String,
    vocationalCourse: String
  },

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentEducationSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentEducation", StudentEducationSchema);
