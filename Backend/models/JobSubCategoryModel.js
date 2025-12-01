const mongoose = require('mongoose');

const JobSubCategorySchema = new mongoose.Schema({
    subcategory_category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'JobCategory', required: true },
    subcategory_name: { type: String, required: true, unique: true },
    subcategory_image: { type: String, required: true },
    subcategory_slug: { type: String, unique: true },
    subcategory_status: { type: Number, default: 0 }, // 0 = Active, 1 = Inactive
    subcategory_created_at: { type: Number, default: () => Math.floor(Date.now() / 1000) }, // UNIX time
    subcategory_updated_at: { type: Number, default: null },
});

module.exports = mongoose.model('JobSubCategory', JobSubCategorySchema);
