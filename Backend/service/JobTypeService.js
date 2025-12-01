const JobType = require('../models/JobType');
const moment = require('moment');

// Get Job Type List with Filters and Pagination
exports.getJobTypeList = async (query) => {
    const {
        dateFilter,
        fromDate,
        toDate,
        searchFilter,
        page = 1,
        limit = 10
    } = query;

    const skip = (page - 1) * limit;
    const filter = {};

    // Search Filter
    if (searchFilter) {
        filter.jobType_name = { $regex: searchFilter, $options: 'i' };
    }
    // Date Filter
    if (dateFilter) {
        const today = moment().startOf('day');
        const now = moment().endOf('day');
        let startDate, endDate;

        switch (dateFilter) {
            case 'today':
                startDate = today.unix();
                endDate = now.unix();
                break;
            case 'yesterday':
                startDate = today.subtract(1, 'days').unix();
                endDate = now.subtract(1, 'days').unix();
                break;
            case 'this_week':
                startDate = moment().startOf('week').unix();
                endDate = moment().endOf('week').unix();
                break;
            case 'this_month':
                startDate = moment().startOf('month').unix();
                endDate = moment().endOf('month').unix();
                break;
            case 'custom':
                if (fromDate && toDate) {
                    startDate = moment(fromDate, 'YYYY-MM-DD').startOf('day').unix();
                    endDate = moment(toDate, 'YYYY-MM-DD').endOf('day').unix();
                }
                break;
        }
        if (startDate && endDate) {
            filter.jobType_created_at = { $gte: startDate, $lte: endDate };
        }
    }

    // Pagination and Data Retrieval
    const totalCount = await JobType.countDocuments(filter);
    const jobTypes = await JobType.find(filter)
        .sort({ jobType_created_at: -1 })
        .skip(skip)
        .limit(parseInt(limit));

    return {
        jobTypes,
        totalCount,
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalCount / limit)
    };
}

// Create a New Job Type
exports.createJobType = async (data) => {
    try {
        const newJobType = new JobType({
            jobType_name: data.jobType_name,
            jobType_created_at: Math.floor(Date.now() / 1000)
        });

        const savedJobType = await newJobType.save();
        return { success: true, jobType: savedJobType };
    } catch (error) {
        return { success: false, error: error.message };
    }
};