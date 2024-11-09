const express = require("express");
const router = express.Router();
const { DocumnetController } = require("../Controller/index");
const multer = require("multer");
const fs = require("fs");

// Middleware to parse `req.body` before multer processes the file
router.use(express.urlencoded({ extended: true }));
router.use(express.json()); // This is essential for parsing JSON payloads

// Multer storage configuration
const storage = multer.diskStorage({
  destination: './Images/',
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Save with original name initially
  }
});

const uploadAgent = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB limit
    files: 1,
  },
});

router.post("/documnet-upload", uploadAgent.any(), (req, res, next) => {
  console.log("Files:", req.files);
  console.log("Request Body:", req.body);

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  // Change the file name after the file is saved
  req.files.forEach((file) => {
    const oldPath = file.path;
    const reportType = (req.body.ReportType).trim() || 'defaultReportType'; // Default value if ReportType is missing
    const date = req.body.Date || new Date().toISOString().split('T')[0]; // Use today's date if Date is missing
    const formattedDate = date.replace(/-/g, ''); // Assuming the date is in YYYY-MM-DD format
    const newFileName = `${reportType}-${formattedDate}.pdf`;
    const newPath = `./Images/${newFileName}`;
    console.log(formattedDate,"date check");
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error("Error renaming file:", err);
        return res.status(500).json({ error: "File renaming failed" });
      }
      console.log(`File renamed to: ${newPath}`);
    });
  });

  // Proceed to the next middleware
  next();
}, DocumnetController.uploaddocumnet);
router.post("/show-report", DocumnetController.showreport);
module.exports = router;
