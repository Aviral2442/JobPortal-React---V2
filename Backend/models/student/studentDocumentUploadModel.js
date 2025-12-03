const mongoose = require("mongoose");
const { currentUnixTimeStamp } = require("../../utils/currentUnixTimeStamp");

// Identity documents
const IdentityDocumentSchema = new mongoose.Schema({
  aadharNumber: { type: String, unique: true, sparse: true },
  aadharFrontImg: { type: String },
  aadharBackImg: { type: String },

  panNumber: { type: String, unique: true, sparse: true },
  panImg: { type: String },

  voterId: { type: String, unique: true, sparse: true },

  passportNumber: { type: String, unique: true, sparse: true },

  drivingLicenseNo: { type: String, unique: true, sparse: true },
  drivingLicenseFrontImg: { type: String },

  categoryCertificateImg: { type: String },
  domicileCertificateImg: { type: String },
  incomeCertificateImg: { type: String },
  birthCertificateImg: { type: String }
}, { _id: false });


// Additional documents
const OtherDocumentSchema = new mongoose.Schema({
  documentName: { type: String, required: true },
  documentFile: { type: String, required: true }
}, { _id: true });


const StudentDocumentsSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, unique: true },

  identityDocuments: { type: IdentityDocumentSchema, default: {} },
  otherDocuments: { type: [OtherDocumentSchema], default: [] },

  createdAt: { type: Number, default: () => currentUnixTimeStamp() },
  updatedAt: { type: Number, default: () => currentUnixTimeStamp() }
});

StudentDocumentsSchema.pre("save", function (next) {
  this.updatedAt = currentUnixTimeStamp();
  next();
});

module.exports = mongoose.model("StudentDocuments", StudentDocumentsSchema);
