const express = require('express')
const router = express.Router();
const JobTypeController = require('../controllers/JobTypeController')

router.get('/get_job_type_list', JobTypeController.getJobTypeList)
router.post('/create_job_type', JobTypeController.createJobType)

module.exports = router;