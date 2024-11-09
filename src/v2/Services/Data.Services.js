const { sq } = require("../../DataBase/ormdb");
const { MainItemMaster } = require("../Model/MainItemMaster.Model");
const { StoneMaster } = require("../Model/StoneMaster.Model");
const { PuritytMasters } = require("../Model/PurityMaster.Model");
const { ReportTypeMasters } = require("../Model/ReportTypeMaster.Model");
const { CustomerMaster } = require("../Model/CustomerMaster.Model");
const { SalesManMaster } = require("../Model/SalesManMaster.Model");
const { CompanyMasters } = require("../Model/CompanyMaster.Model");
const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");
class Dataservice {
  async ItemList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await MainItemMaster.findAll({       
         where: { 
        CompanyCode:CompanyCode  
                 }
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
  async StoneList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await StoneMaster.findAll({
        where: { STONE_SUB:null||'',
          CompanyCode:CompanyCode  
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
  async PurityList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await PuritytMasters.findAll({       
        where: { 
       CompanyCode:CompanyCode  
                }
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
  async StoneSubList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date,STONE_CODE } = req.body;

      await StoneMaster.findAll({
        where: {     stonesub: {
          [Op.ne]: '', // This means "not equal to an empty string"
          CompanyCode:CompanyCode
        },
        STONE_CODE:STONE_CODE
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
  async ReportTypeList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await ReportTypeMasters.findAll({       
        where: { 
       CompanyCode:CompanyCode  
                }
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
  async CustomerList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await CustomerMaster.findAll({       
        where: { 
       CompanyCode:CompanyCode  
                }
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
  async SalesmanList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await SalesManMaster.findAll({       
        where: { 
       CompanyCode:CompanyCode  
                }
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
  async CompanyList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await CompanyMasters.findAll().then(async (Result) => {
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
module.exports = new Dataservice();
