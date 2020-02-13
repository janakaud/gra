let google = require('googleapis').google;
let _auth = require('../Authorizer');
const storage = google.storage('v1');
let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function(request, response) {
    s3.listObjects({
        'Bucket': 'btbucket.images',
        'MaxKeys': 10,
        'Prefix': ''
    }).promise()
        .then(data => {
            console.log(data)
            storage.objects.list({
                bucket: 'test_sigma_cloud_storage',
                maxResults: 10,
                prefix: ''
            })
                .then(response => {
                    console.log(response.data);
                    response.send({"aws": data, "gcp": response.data});
                })
                .catch(err => {
                    console.log(err, err.stack);
                    res.send(500, err)
                });
        })
        .catch(err => {
            console.log(err, err.stack);
            res.send(500, err)
        });
}