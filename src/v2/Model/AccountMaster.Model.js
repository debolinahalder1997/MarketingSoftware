const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const AccountMaster = sq.define("account_master", {
  GL_CODE: { type: DataTypes.BIGINT, primaryKey: true, allowNull: false },
  ACC_NAME: { type: DataTypes.STRING, allowNull: false },
  ACC_GROUP: { type: DataTypes.BIGINT, allowNull: true },
  OPENING: { type: DataTypes.DOUBLE, allowNull: true },
  LAST_YEAR_BAL: { type: DataTypes.DOUBLE, allowNull: true },
  CURRENT_BAL: { type: DataTypes.DOUBLE, allowNull: true },
  TEMP_BAL: { type: DataTypes.DOUBLE, allowNull: true },
  UP_ALLOWED: { type: DataTypes.BIGINT},
  FORMER_NAME: { type: DataTypes.STRING, allowNull: true },
  ADDRESS1: { type: DataTypes.STRING, allowNull: true },
  ADDRESS2: { type: DataTypes.STRING, allowNull: true },
  ADDRESS3: { type: DataTypes.STRING, allowNull: true },
  ITFILENO: {type:DataTypes.BIGINT},
  LOCID: {
    type: DataTypes.BIGINT,
    references: {
      model: "locationmaster",
      key: "LOCID",
    },
  },
  TRANAMT: { type: DataTypes.DOUBLE, allowNull: true },
  nullfydata: {type: DataTypes.DOUBLE, allowNull: true},
  A_Type: {type: DataTypes.STRING, allowNull: true},
  ACC_CODE: {type: DataTypes.STRING, allowNull: true},
  Credit_Limit:{type: DataTypes.DOUBLE, allowNull: true},
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
});
module.exports = { AccountMaster };
