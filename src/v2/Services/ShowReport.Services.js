const { sq } = require("../../DataBase/ormdb");
const { ReportMasters } = require("../Model/ReportMaster.Model");
const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");
class ShowDocService {
  async ShowReport(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await ReportMasters.findAll({
        where: {
          ReportType: ReportType,
          Date: Date,
        },
      }).then(async (Result) => {
        if (Result.length != 0) {
          return res.status(200).json({ errMsg: false, response: Result });
        } else {
          return res.status(400).json({ errMsg: false, response: Result });
        }
      });

      // const users =  AgentMasters.findAll();
    } catch (error) {
      return res.status(500).json({ status: "FAILED", data: error });
    }
  }
}
module.exports = new ShowDocService();
