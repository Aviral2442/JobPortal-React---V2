// models/StudentCertifications.js
const mongoose = require("mongoose");

const CertificationSchema = new mongoose.Schema({
  name: String,
  issuer: String,
  issueDate: Number,
  expiryDate: Number,
  certificateId: String,
  certificateUrl: String
}, { _id: false });

const StudentCertificationsSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },
  certifications: [CertificationSchema],

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentCertificationsSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentCertifications", StudentCertificationsSchema);
