const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const AWS = require("aws-sdk");
const { AuthController } = require("../Controller");
const fs = require("fs");
require("dotenv").config();
var baseurl = "D:NimbusEstimate\backendImages";
const dotenv = require("dotenv");

// Specify the path to your .env file

require("dotenv").config({ path: "../../../.env" });
var ID = process.env.ID;
var SECRET = process.env.SECRET;
var BUCKET_NAME = process.env.BUCKET_NAME;

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
router.post("/area-add", AuthController.areaadd);
router.post("/city-add", AuthController.cityadd);
router.post("/vendor-add", AuthController.vendoradd);
router.post("/state-add", AuthController.stateadd);
router.post("/country-add", AuthController.countryadd);
router.post("/zone-add", AuthController.zoneadd);
router.post("/area-list", AuthController.arealist);
router.post("/city-list", AuthController.citylist);
router.post("/vendor-list", AuthController.vendorlist);
router.post("/state-list", AuthController.statelist);
router.post("/customer-add", AuthController.customeradd);
router.post("/customer-list", AuthController.customerlist);
router.post("/zone-list", AuthController.zonelist);
router.post("/country-list", AuthController.countrylist);
router.post("/admin", AuthController.adminPanel);
//  router.post("/token-generate",PermissonCheck.GenerateToken);
router.post("/user-registration", AuthController.UserRegistration);

router.post("/user-edit", AuthController.UserEdit);

// router.post("/forget-password", Logger.Logreq,AuthController.forgetpass,Logger.Logres);
// router.post("/reset-password",Logger.Logreq , AuthController.resetpass,Logger.Logres);

// router.post("/loginauthcontroller/loginservices/login",securelogin);
module.exports = router;
