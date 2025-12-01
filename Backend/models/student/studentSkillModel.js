// models/StudentSkills.js
const mongoose = require("mongoose");

const StudentSkillsSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  technicalSkills: [String],
  softSkills: [String],
  computerKnowledge: [String],
  languageProficiency: [{
    language: String,
    read: { type: Boolean, default: false },
    write: { type: Boolean, default: false },
    speak: { type: Boolean, default: false }
  }],

  hobbies: [String],

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentSkillsSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentSkills", StudentSkillsSchema);
