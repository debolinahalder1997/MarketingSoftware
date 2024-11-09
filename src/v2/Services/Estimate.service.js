const { sq } = require("../../DataBase/ormdb");
const { ReportMasters } = require("../Model/ReportMaster.Model");
const { v4: uuidv4 } = require("uuid");

class Estimateservice {
  async Estimateadd(req, res, next) {
    console.log(req.body);

    try {
      const { CompanyCode, ReportType, Date, User } = req.body;
      const uuid = uuidv4();
      const formattedDate = Date.replace(/-/g, '');
      const Doc = `${ReportType}-${formattedDate}`;
      console.log(Doc);

      await ReportMasters.create({
        UUID: uuid,
        CompanyCode:CompanyCode,
        ReportType:ReportType,
        Date:Date,
        Doc:Doc
      });

      // Send a successful response
      return res.status(200).json({
        errMsg: false,
        response: "File upload successful",
      });
    } catch (error) {
      console.error("Error in Uploaddoc service:", error);

      // Send an error response
      if (!res.headersSent) {
        return res.status(500).json({
          errMsg: true,
          response: "An error occurred while uploading the document",
          error: error.message,
        });
      }
    }
  }
}

module.exports = new Estimateservice();
