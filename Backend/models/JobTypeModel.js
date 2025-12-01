const mongoose = require('mongoose');

const JobTypeSchema = new mongoose.Schema({
    job_type_name: { type: String, required: true },
    job_type_status: { type: Number, default: 0 }, // 0 = Active, 1 = Inactive
    job_type_created_at: { type: Number, default: () => Math.floor(Date.now() / 1000) }, // UNIX time
});

module.exports = mongoose.model('JobType', JobTypeSchema);