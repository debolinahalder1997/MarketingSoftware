const { sq } = require("../../DataBase/ormdb");
const { Area_Masters } = require("../Model/AreaMaster.Model");
const { Vendor_Masters } = require("../Model/Vendor_Master.Model");
const { city_masters } = require("../Model/city_masters.Model");
const { state_masters } = require("../Model/state_masters.Model");
const { zone_masters } = require("../Model/ZoneMaster.Model");
const { SalesManMaster } = require("../Model/SalesManMaster.Model");
const { CompanyMasters } = require("../Model/CompanyMaster.Model");
const { country_masters } = require("../Model/CountryMaster.Model");
const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");
class Dataservice {
  async AreaList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await Area_Masters.findAll({
        where: {
          CompanyCode: CompanyCode,
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
  async VendorList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await Vendor_Masters.findAll().then(async (Result) => {
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
  async CityList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await city_masters
        .findAll({
          where: {
            CompanyCode: CompanyCode,
          },
        })
        .then(async (Result) => {
          if (Result.length != 0) {
            return res.status(200).json({ errMsg: false, response: Result });
          } else {
            return res.status(200).json({ errMsg: false, response: Result });
          }
        });

      // const users =  AgentMasters.findAll();
    } catch (error) {
      return res.status(400).json({ status: "FAILED", data: error });
    }
  }
  async StateList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date, STONE_CODE } = req.body;

      await state_masters
        .findAll({
          where: {
            CompanyCode: CompanyCode,
          },
        })
        .then(async (Result) => {
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
  async AdminPanel(req, res, next) {
    try {
      const { CompanyCode, StartDate, EndDate } = req.body;
      let sql = `Select * from customer_masters as cm inner join feedback_transactions as ft 
    on cm.ID = ft.Id_Name inner join area_masters as am on am.ID=cm.id_area inner join city_masters as cim on
    cim.ID=cm.id_city inner join state_masters as sm on sm.ID=cm.id_state inner join country_masters as con
    on con.ID=cm.COUNTRY`;
      sq.sync();
      const dnconn = await sq
        .query(sql, {
          type: QueryTypes.SELECT,
        })
        .then(async (resp) => {
          console.log(resp, "hl");
          return res.status(200).json({ response: resp });
        })
        .catch((err) => {
          console.log(err);
        });
      return dnconn;
    } catch (error) {
      return res.status(500).json({ status: "FAILED", data: error });
    }
  }
  async CustomerList(req, res, next) {
    try {
      const { CompanyCode, Date } = req.body;
      let sql = "";
      //sql ="SELECT Cm.*, Am.Code, Sm.State_name,City.NAME AS City_Name, Vm1.NAME AS Vendor_Name, Vm2.NAME AS Vendor1_Name FROM customer_masters AS Cm JOIN area_masters AS Am ON Cm.id_area = Am.id JOIN state_masters AS Sm ON Cm.id_state = Sm.id JOIN city_masters AS City ON Cm.id_city = City.id JOIN vendor_masters AS Vm1 ON Cm.ID_Vendor = Vm1.id JOIN vendor_masters AS Vm2 ON Cm.ID_Vendor1 = Vm2.id and Cm.CompanyCode=:CompanyCode	";
      sql = "SELECT * FROM customer_masters";
      let resDB = sq
        .query(sql, {
          replacements: { CompanyCode: CompanyCode },
          type: QueryTypes.SELECT,
        })
        .then(async (Result) => {
          if (Result?.length !== 0) {
            return res.status(200).json({ errMsg: false, response: Result });
          } else {
            return res.status(400).json({ errMsg: false, response: [] });
          }
        });
      return resDB;
      // const users =  AgentMasters.findAll();
    } catch (error) {
      return res.status(400).json({ status: "FAILED", data: error });
    }
  }
  async SalesmanList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await SalesManMaster.findAll({
        where: {
          CompanyCode: CompanyCode,
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
  async zonelist(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await zone_masters.findAll().then(async (Result) => {
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
  async CountryList(req, res, next) {
    try {
      const { CompanyCode, ReportType, Date } = req.body;

      await country_masters.findAll().then(async (Result) => {
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
