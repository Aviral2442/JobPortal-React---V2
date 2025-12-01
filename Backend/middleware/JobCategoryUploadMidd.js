const multer = require('multer');
const path = require('path');
const fs = require('fs');

// ✅ Helper: ensure folder exists
function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * ✅ Universal Upload Middleware Factory
 * @param {string} folderName - Subfolder inside /uploads (e.g., "JobCategoryImages", "Resumes", etc.)
 * @returns multer instance
 */
const upload = (folderName = 'MiscFiles') => {
  const uploadDir = path.join('uploads', folderName);
  ensureDirExists(uploadDir);

  // ✅ Allowed file types
  const allowedMimeTypes = [
    // Images
    'image/jpeg',
    'image/png',
    'image/jpg',
    'image/webp',
    'image/gif',

    // Audio
    'audio/mpeg',
    'audio/wav',
    'audio/mp3',

    // Video
    'video/mp4',
    'video/mpeg',
    'video/quicktime',

    // Documents
    'application/pdf',
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  // ✅ Storage configuration
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      ensureDirExists(uploadDir);
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const timestamp = Date.now();
      const random = Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname).toLowerCase();
      const cleanName = file.originalname
        .replace(/\s+/g, '_')
        .replace(/[^a-zA-Z0-9._-]/g, '');
      cb(null, `${timestamp}-${random}-${cleanName}`);
    },
  });

  // ✅ File filter
  const fileFilter = (req, file, cb) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          `Unsupported file type: ${file.mimetype}. Allowed formats: images, audio, video, pdf, csv, excel`
        ),
        false
      );
    }
  };

  // ✅ Multer config (limit set to 200MB)
  return multer({
    storage,
    fileFilter,
    limits: {
      fileSize: 200 * 1024 * 1024, // 200 MB
    },
  });
};

module.exports = upload;
