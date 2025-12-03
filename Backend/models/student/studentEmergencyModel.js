const mongoose = require("mongoose");
const { currentUnixTimeStamp } = require("../../utils/currentUnixTimeStamp");

const StudentEmergencyContactSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  emergencyContactName: String,
  emergencyRelation: String,
  emergencyPhoneNumber: String,
  emergencyAddress: String,

  createdAt: { type: Number, default: () => currentUnixTimeStamp() },
  updatedAt: { type: Number, default: () => currentUnixTimeStamp() }
});

StudentEmergencyContactSchema.pre("save", function (next) {
  this.updatedAt = currentUnixTimeStamp();
  next();
});

module.exports = mongoose.model("StudentEmergencyContact", StudentEmergencyContactSchema);
