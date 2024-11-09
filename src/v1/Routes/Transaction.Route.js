const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const AWS = require("aws-sdk");
const { TranController } = require("../Controller");
const fs = require("fs");
require("dotenv").config();

router.post("/feedback-trans", TranController.feedbacktrans);
router.post("/feedback-list", TranController.feedbacklist);
router.post("/track-add", TranController.trackadd);


module.exports = router;