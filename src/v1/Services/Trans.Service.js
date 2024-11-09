const { sq } = require("../../DataBase/ormdb");
const { QueryTypes } = require("sequelize");
const { serial_infos } = require("../Model/SerialInfo.Model");
const {
  Feedback_Transactions,
} = require("../Model/Feedback_Transaction.Model");

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const { response } = require("express");

const Pwd = bcrypt.genSaltSync(10);
class TransService {
  async FeedbackTrans(req, res, next) {
    console.log(req.body, "request agent reg");

    let flag = 0;
    let msg = "";

    try {
      const Voudate = req.body.Voudate || null;
      const Id_Name = req.body.Id_Name;
      const Custstatus = req.body.Custstatus;
      const Actiondate = req.body.Actiondate;
      const CompanyCode = req.body.CompanyCode;
      const STATUS = req.body.STATUS;
      const remarks = req.body.remarks;
      const STATUS1 = req.body.STATUS1;
      const ID_USER = req.body.ID_USER;
      const TRANCODE = "FST";
      await sq.sync();

      const lastsrl = await serial_infos.findOne({
        attributes: ["LASTSERIAL"],
        where: { TRANCODE: TRANCODE, CompanyCode: CompanyCode },
      });

      const srl = lastsrl.dataValues.LASTSERIAL + 1;
      const VOUNO = `${TRANCODE}${srl}`;

      await Feedback_Transactions.create({
        Vounum: VOUNO,
        Voudate: Voudate,
        Id_Name: Id_Name,
        Custstatus: Custstatus,
        Actiondate: Actiondate,
        STATUS: STATUS,
        remarks: remarks,
        STATUS1: STATUS1,
        ID_USER: ID_USER,
        CompanyCode: CompanyCode,
      })
        .then(async (RegRes) => {
          await serial_infos.update(
            { LASTSERIAL: srl },
            {
              where: { TRANCODE: TRANCODE },
            }
          );
          return res.status(200).json({
            errMsg: false,
            response: "FeedBack Added Successfully",
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({
            errMsg: false,
            Response: "FeedBack Add failed." + err,
          });
        });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ response: "Server error: " + error.message });
    }
  }

  async FeedbackList(req, res, next) {
    console.log(req.body, "request agent reg");

    let flag = 0;
    let msg = "";

    try {
      const Voudate = req.body.Voudate || null;
      const Id_Name = req.body.Id_Name;
      const Custstatus = req.body.Custstatus;
      const Actiondate = req.body.Actiondate;
      const CompanyCode = req.body.CompanyCode;
      const STATUS = req.body.STATUS;
      const remarks = req.body.remarks;
      const STATUS1 = req.body.STATUS1;
      const ID_USER = req.body.ID_USER;
      const TRANCODE = req.body.TRANCODE;
      await sq.sync();

      await Feedback_Transactions.findAll().then(async (Result) => {
        if (Result.length != 0) {
          return res.status(200).json({ errMsg: false, response: Result });
        } else {
          return res.status(400).json({ errMsg: false, response: Result });
        }
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ response: "Server error: " + error.message });
    }
  }
  async TrackAdd(req, res, next) {
    console.log(req.body, "request agent reg");

    let flag = 0;
    let msg = "";

    try {
      const DateTime = req.body.DateTime || null;
      const Userid = req.body.Userid;
      const ZoneID = req.body.ZoneID;
      const Coordinates = req.body.Coordinates;
      const CompanyCode = req.body.CompanyCode;
      const Address = req.body.Address;

      await sq.sync();



      await tracking_masters.create({
        DateTime: DateTime,
        Userid: Userid,
        ZoneID: ZoneID,
        Coordinates: Coordinates,
        Address: Address,
        CompanyCode: CompanyCode,
      })
      .then(async(RegRes) => {
        return res.status(200).json({
          errMsg: false,
          response: "Submitted Successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          errMsg: false,
          Response: "Submisson failed." + err,
        });
      });

        
      

    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ response: "Server error: " + error.message });
    }
  }
}
module.exports = new TransService();
