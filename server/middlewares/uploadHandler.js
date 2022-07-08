const AWS = require('aws-sdk');
const crypto = require('crypto');
const { createError } = require('../utils/constants.js');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_BUCKET_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3({ signatureVersion: 'v4' });

const handleUpload = (req, res, next) => {
  try {
    const body = req.body;

    const createBucketParams = {
      Bucket: `apple-drop`,
      ACL: 'public-read-write',
    };

    s3.createBucket(createBucketParams, (err, data) => {
      console.log(err);
      console.log(data);
      if (err && err.statusCode == 409) {
        console.log('Bucket exists');
        getURL(body.images);
      } else if (data) {
        console.log('Bucket created', data);
        const corsOptions = {
          Bucket: `apple-drop`,
          CORSConfiguration: {
            CORSRules: [
              {
                AllowedMethods: ['PUT', 'POST', 'GET'],
                AllowedHeaders: ['*'],
                AllowedOrigins: [
                  'http://localhost:3000',
                  'http://localhost:8080',
                  'https://dev.apple-drop.com',
                  'https://stage.apple-drop.com',
                  'https://app.apple-drop.com',
                  'https://apple-drop.com',
                  '*',
                ],
              },
            ],
          },
        };
        s3.putBucketCors(corsOptions, (err, data) => {
          if (err) {
            console.error('Failed to write cors settings to s3', err);

            next(createError(err.message));
            reject({
              error: 'Failed to write cors settings to s3',
            });
          } else if (data) {
            console.log('cors settigns written to s3');
            return getURL(body.images);
          }
        });
      }
    });

    const getURL = (images) => {
      console.log(images);
      const result = [];
      let fileName;
      let signedURL;
      const putObjParams = {
        Bucket: `apple-drop`,
        Key: '',
        ContentType: '',
        ACL: 'public-read-write',
      };

      images.forEach((image) => {
        fileName = `${crypto.randomUUID()}-${image.name}`;
        putObjParams.Key = `${body.container}/${fileName}`;
        putObjParams.ContentType = image.type;
        signedURL = s3.getSignedUrl('putObject', putObjParams);
        result.push({
          originalName: image.name,
          signedURL: signedURL,
          fileName: fileName,
          location: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/public/${fileName}`,
        });
      });

      res.locals.images = result;

      return next();
    };
  } catch (error) {
    return next(createError(error.message));
  }
};

module.exports = handleUpload;
