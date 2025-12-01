// models/StudentAddress.js
const mongoose = require("mongoose");

const StudentAddressSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true, index: true },

  current: {
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    district: String,
    pincode: String
  },

  permanent: {
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    district: String,
    pincode: String
  },

  isPermanentSameAsCurrent: { type: Boolean, default: false },

  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() }
});

StudentAddressSchema.pre("save", function(next){
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("StudentAddress", StudentAddressSchema);
