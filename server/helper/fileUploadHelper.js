const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
    console.log("hii helper upload");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, "IMG" + '-' + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
