const mongoose = require('mongoose');

const JobSectorSchema = new mongoose.Schema({
    job_sector_name: { type: String, required: true },
    job_sector_status: { type: Number, default: 0 }, // 0 = Active, 1 = Inactive
    job_sector_created_at: { type: Number, default: () => Math.floor(Date.now() / 1000) }, // UNIX time
});

module.exports = mongoose.model('JobSector', JobSectorSchema);