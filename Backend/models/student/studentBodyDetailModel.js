// models/StudentBodyDetails.js
const mongoose = require("mongoose");

const StudentBodyDetailsSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  heightCm: { type: Number },
  weightKg: { type: Number },
  bloodGroup: { type: String },
  eyeColor: { type: String },
  hairColor: { type: String },

  identificationMark1: { type: String },
  identificationMark2: { type: String },

  disability: { type: Boolean, default: false },
  disabilityType: { type: String },
  disabilityPercentage: { type: Number },

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentBodyDetailsSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentBodyDetails", StudentBodyDetailsSchema);
