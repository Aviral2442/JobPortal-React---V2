// models/StudentDocuments.js
const mongoose = require("mongoose");

const StudentDocumentsSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  class10MarksheetUrl: String,
  class12MarksheetUrl: String,
  graduationMarksheetUrl: String,
  pgMarksheetUrl: String,

  aadharNumber: String,
  aadharUrl: String,
  panNumber: String,
  panUrl: String,

  voterId: String,
  passportNumber: String,
  drivingLicense: String,

  categoryCertificateUrl: String, // SC/ST/OBC/EWS
  domicileCertificateUrl: String,
  incomeCertificateUrl: String,
  birthCertificateUrl: String,

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentDocumentsSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentDocuments", StudentDocumentsSchema);
