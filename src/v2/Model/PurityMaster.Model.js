const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const PuritytMasters = sq.define("purity_master", {
  PURITY: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
  },
  DESCRIPTION: { type: DataTypes.STRING, allowNull: true },
  DEALER_ACC_CODE: { type: DataTypes.STRING, allowNull: true },
  SALES_ACC_CODE: { type: DataTypes.STRING, allowNull: true },
  OLD_GOLD_PURCHASE: { type: DataTypes.BIGINT, allowNull: true },
  NEW_GOLD_PURCHASE: { type: DataTypes.BIGINT, allowNull: true },
  CUST_OP_BAL: { type: DataTypes.DOUBLE, allowNull: true },
  OLD_OP_BAL: { type: DataTypes.DOUBLE, allowNull: true },
  NEW_OP_BAL: { type: DataTypes.DOUBLE, allowNull: true },
  GOLD: {type: DataTypes.DOUBLE, allowNull: true},
  RATIO: { type: DataTypes.DOUBLE, allowNull: true },
  GOLD_RATE: { type: DataTypes.DOUBLE, allowNull: true },
  Old_Op_Gr_Bal: { type: DataTypes.DOUBLE, allowNull: true },
  New_Op_Gr_Bal: { type: DataTypes.DOUBLE, allowNull: true },
  METAL_RATE: { type: DataTypes.DOUBLE, allowNull: true },
  METAL_VAL: { type: DataTypes.DOUBLE, allowNull: true },
  GOLD_RATE_MRP: { type: DataTypes.DOUBLE, allowNull: true },
  GROSS: { type: DataTypes.DOUBLE, allowNull: true },
  NETT: { type: DataTypes.DOUBLE, allowNull: true },
  COST_RATE: { type: DataTypes.DOUBLE, allowNull: true },
  MAKINGCOMMISSION: {type: DataTypes.DOUBLE, allowNull: true},
  PrePrinted: {type: DataTypes.TINYINT, allowNull: true},
  TagDesc: {type: DataTypes.STRING, allowNull: true},
  NotInCumalative: {type: DataTypes.TINYINT, allowNull: true},
  P_TYPE: {type: DataTypes.TINYINT, allowNull: true},
  HM: { type: DataTypes.DOUBLE, allowNull: true },
  Tejori_Show: {type: DataTypes.TINYINT, allowNull: true},
  CHKSLV: {type: DataTypes.TINYINT, allowNull: true},
  SALES_PER: {type: DataTypes.DOUBLE, allowNull: true},
  Prate: {type: DataTypes.DOUBLE, allowNull: true},
  Fran_Rate: {type: DataTypes.DOUBLE, allowNull: true},
  PtySrl: {type: DataTypes.INTEGER, allowNull: true},
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
});
sq.sync().then(() => {
  console.log("Table created successfully!");
});
module.exports = { PuritytMasters };
