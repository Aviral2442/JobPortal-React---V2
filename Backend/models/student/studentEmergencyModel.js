// models/StudentEmergencyContact.js
const mongoose = require("mongoose");

const StudentEmergencyContactSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  contactName: String,
  relation: String,
  phoneNumber: String,
  address: String,

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentEmergencyContactSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentEmergencyContact", StudentEmergencyContactSchema);
