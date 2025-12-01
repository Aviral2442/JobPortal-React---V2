// models/StudentParentalInfo.js
const mongoose = require("mongoose");

const StudentParentalInfoSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  fatherName: String,
  fatherContactNumber: String,
  fatherOccupation: String,
  fatherEmail: String,
  fatherAnnualIncome: Number,

  motherName: String,
  motherContactNumber: String,
  motherOccupation: String,
  motherEmail: String,
  motherAnnualIncome: Number,

  guardianName: String,
  guardianRelation: String,
  guardianContactNumber: String,

  numberOfFamilyMembers: { type: Number },
  familyType: { type: String, enum: ["joint","nuclear","other"] },

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentParentalInfoSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentParentalInfo", StudentParentalInfoSchema);
