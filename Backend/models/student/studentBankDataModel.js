// models/StudentBankInfo.js
const mongoose = require("mongoose");

const StudentBankInfoSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  bankHolderName: String,
  bankName: String,
  accountNumber: String,
  ifscCode: String,
  branchName: String,
  passbookUrl: String,

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentBankInfoSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentBankInfo", StudentBankInfoSchema);
