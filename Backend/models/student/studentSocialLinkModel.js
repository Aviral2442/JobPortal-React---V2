// models/StudentSocialLinks.js
const mongoose = require("mongoose");

const StudentSocialLinksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  linkedIn: String,
  github: String,
  portfolioUrl: String,
  facebook: String,
  instagram: String,

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentSocialLinksSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentSocialLinks", StudentSocialLinksSchema);
