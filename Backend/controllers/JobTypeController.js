const jobTypeService = require('../service/JobTypeService');

exports.getJobTypeList = async (req, res) => {
    try {
        const result = await jobTypeService.getJobTypeList(req.query);

        res.status(200).json({
            status: 200,
            message: 'Job Type list fetched Successfully',
            jsonData: result,
        });
    } catch(error){
        console.log('Error in getJobTypeList Controller:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};


exports.createJobType = async (req, res) => {
    try {
        const { jobType_name } = req.body;
        if (!jobType_name) {
            return res.status(400).json({ status: false, message: 'Job Type name is required' });
        }
        const result = await jobTypeService.createJobType({ jobType_name });

        res.status(200).json(result);
    } catch (error) {
        console.error('Error in createJobType Controller:', error);
        res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
};


exports.updateJobType = async (req, res) => {
    try {
        const { id, jobType_name } = req.body;
        if (!id || !jobType_name) {
            return res.status(400).json({ status: false, message: 'Job Type ID and name are required' });
        }
        const result = await jobTypeService.updateJobType({ id, jobType_name });

        res.status(200).json(result);
    } catch (error) {
        console.error('Error in updateJobType Controller:', error);
        res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
};