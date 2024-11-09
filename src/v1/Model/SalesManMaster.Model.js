const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const SalesManMaster = sq.define("salesman_master", {
  CODE: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
  NAME: { type: DataTypes.STRING, allowNull: false },
  ADDRESS: { type: DataTypes.STRING, allowNull: false },
  PHONE: { type: DataTypes.BIGINT, allowNull: true },
  CONTACTPERSON: { type: DataTypes.STRING, allowNull: true },
  LISCENCENO: { type: DataTypes.STRING, allowNull: true },
  TrgAmt: { type: DataTypes.DOUBLE, allowNull: true },
  vat_no: { type: DataTypes.STRING, allowNull: true },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
});
module.exports = { SalesManMaster };
