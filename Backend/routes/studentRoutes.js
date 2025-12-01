const express = require('express');
const router = express.Router();
const upload = require('../middleware/JobCategoryUploadMidd');
const studentController = require('../controllers/studentController');

// Student Registration Route
router.post('/student_registration', upload('StudentProfile').single('studentProfilePic'), studentController.studentRegistration);
router.post('/student_login', studentController.studentLogin);
router.post('/studentForgetPassword', studentController.studentForgetPassword);
router.post('/verifyStudentOtp', studentController.verifyStudentOtp);
router.post('/resetStudentPassword', studentController.resetStudentPassword);

module.exports = router;
