let google = require('googleapis').google;
let _auth = require('./Authorizer');
const storage = google.storage('v1');

exports.handler = function(request, response) {
    storage.objects.list({
        bucket: 'test_sigma_cloud_storage',
        maxResults: 10,
        prefix: ''
    })
        .then(res => {
            console.log(res.data);
            res.send(res.data)
        })
        .catch(err => {
            res.send(500, err)
        });
}