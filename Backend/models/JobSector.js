const mongoose = require('mongoose')

const JobSectorSchema = new mongoose.Schema({
    jobsector_name: { type:String, required: true, unique: true },
    jobsector_status: { type: Number, default: 0 }, // 0 = Active, 1 = Inactive
    jobsector_created_at: { type: Number, default: () => Math.floor(Date.now() / 1000) }, // UNIX time
    jobsector_updated_at: { type: Number, default: null },
})

module.exports = mongoose.model('JobSector',JobSectorSchema);