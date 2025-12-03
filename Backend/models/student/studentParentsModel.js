const mongoose = require("mongoose");
const { currentUnixTimeStamp } = require("../../utils/currentUnixTimeStamp");

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
  motherEmail: {type: String, lowercase: true, trim: true},
  motherAnnualIncome: Number,

  guardianName: String,
  guardianRelation: String,
  guardianContactNumber: String,

  numberOfFamilyMembers: { type: Number },
  familyType: { type: String, enum: ["joint", "nuclear", "other"] },

  createdAt: { type: Number, default: () => currentUnixTimeStamp() },
  updatedAt: { type: Number, default: () => currentUnixTimeStamp() }
});

StudentParentalInfoSchema.pre("save", function (next) {
  this.updatedAt = currentUnixTimeStamp();
  next();
});

module.exports = mongoose.model("StudentParentalInfo", StudentParentalInfoSchema);
