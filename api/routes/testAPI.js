var express = require("express");
var router = express.Router();
var multer = require('multer');
var { Storage } = require("@google-cloud/storage");
var path = require('path');
const storage = new Storage({
    keyFilename: path.join(__dirname, "../remotify-secret-key.json"),
  });

const removeWhiteSpaces = (name) => {
    let newName = name.replace(/\s+/g, "");
  
    return newName;
  };

router.get("/", function(req, res, next) {
    res.send("API is working properly");

});

router.post('/upload',function(req,res,next){
    
    let img = req.body['galaxyimage'];
    let imageName = removeWhiteSpaces(
        req.body['group']+ '-' + req.body['username'] + '-' + req.body['galaxyname'] + '-' +Date.now() + '.png');
    if(img){
        const bucketName = "outerspace-artist-artwork";
        const myBucket = storage.bucket(bucketName);
        const file = myBucket.file(imageName);
        const contents = Buffer.from(img.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
        const options = {
            contentType:'image/png',
            public:true,
        }
        file.save(contents,options, function(err) {
            if (!err) {
                res.send(`https://storage.googleapis.com/${bucketName}/${imageName}`);
            }
          });
        }

});

module.exports = router;
