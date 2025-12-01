 const mongoose = require('mongoose')

const JobTypeSchema = new mongoose.Schema({
    jobType_name: {type: String, required: true, unique: true},
    jobType_status: { type: Number, default: 0 }, // 0 = Active, 1 = Inactive
    jobType_created_at: {type: Number, default: () => Math.floor(Date.now() / 1000)},
    jobType_updated_at: {type:Number, default:null}
})

module.exports = mongoose.model('JobType', JobTypeSchema);