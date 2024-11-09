const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const AWS = require("aws-sdk");
const { AuthController } = require("../Controller");
const fs = require("fs");
require("dotenv").config();
var baseurl = "D:\NimbusEstimate\backend\Images";
// var ID = "AKIAU6GDVOUTY4EORUEX";
// var SECRET = "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";

// The name of the bucket that you have created
// var BUCKET_NAME = "bangasreejewellers-images-upload.s3.ap-south-1.amazonaws.com";
const dotenv = require("dotenv");

// Specify the path to your .env file

require("dotenv").config({ path: "../../../.env" });
// const abc =require("../../../.env");
///env----------------------------------------
// var ID = process.env.ID;
// var SECRET = process.env.SECRET;
// var BUCKET_NAME = process.env.BUCKET_NAME;
//----------------------------------------------
var ID = "AKIAU6GDVOUTY4EORUEX";
var SECRET = "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";
var BUCKET_NAME = "images.bangasreejewellers.in";
console.log(SECRET, BUCKET_NAME, "s14");
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    // Set your region here
    LocationConstraint: "ap-south-1",
  },
};

// s3.createBucket(params, function(err, data) {
//   if (err) console.log(err, err.stack);
//   else console.log('Bucket Created Successfully', data.Location);
// });
//------------------------------agent---------------------------------------------------------
const multerConfigagent = multer.memoryStorage();
const uploadAgent = multer({
  storage: multerConfigagent,
  // Limits configuration to restrict file size and number of files
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB (in bytes)
    files: 3, // Maximum 5 files
  },
});
//-----------------------------------------------------------------------------

//---------------------------------superuser---------------------------------------

const multerConfigsuperuser = multer.memoryStorage();
const uploadSuperuser = multer({
  storage: multerConfigsuperuser,
  // Limits configuration to restrict file size and number of files
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB (in bytes)
    files: 3, // Maximum 5 files
  },
});
//---------------------------------------------------------------------------------

//----------------------------------customer------------------------------------------
const multerConfigcustomer = multer.memoryStorage();
const uploadCustomer = multer({
  storage: multerConfigcustomer,
  // Limits configuration to restrict file size and number of files
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB (in bytes)
    files: 6, // Maximum 5 files
  },
});
//--------------------------------------------------------------------------------------

console.log("3"); 
router.post("/login", AuthController.securelogin);
router.post("/estimate-add", AuthController.estimateadd);
router.post("/item-list", AuthController.itemlist);
router.post("/stone-list", AuthController.stonelist);
router.post("/purity-list", AuthController.puritylist);
router.post("/stonesub-list", AuthController.stonesublist);
router.post("/reporttype-list", AuthController.reporttypelist);
router.post("/customer-list", AuthController.customerlist);
router.post("/salesman-list", AuthController.salesmanlist);
router.post("/company-list", AuthController.companylist);
//  router.post("/token-generate",PermissonCheck.GenerateToken);
router.post(
  "/user-registration",
  AuthController.UserRegistration
);

// router.post("/forget-password", Logger.Logreq,AuthController.forgetpass,Logger.Logres);
// router.post("/reset-password",Logger.Logreq , AuthController.resetpass,Logger.Logres);

// router.post("/loginauthcontroller/loginservices/login",securelogin);
module.exports = router;
