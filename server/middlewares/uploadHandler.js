const AWS = require('aws-sdk');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const multerS3 = require('multer-s3');

const uuid = require('uuid');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_BUCKET_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const storage = multerS3({
  s3,
  bucket: process.env.AWS_BUCKET_NAME,

  key: (req, file, cb) => {
    console.log(file, 'heeererrerrerererererererrerrerere');
    cb(null, uuid.v4() + path.extname(file.originalname));
  },
});

module.exports = multer({ storage });
