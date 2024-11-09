const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const MainItemMaster = sq.define("main_item_master", {
  ITEMCODE: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  DESCRIPTION: { type: DataTypes.STRING },
  LAST_ID: { type: DataTypes.BIGINT },
  BALANCE: { type: DataTypes.DOUBLE, defaultValue: 0.0 },
  GROUP: {
    type: DataTypes.STRING,
    references: {
      model: "item_group_master",
      key: "Group_Code",
    },
  },
  TYPE: { type: DataTypes.TINYINT },
  fpcs: { type: DataTypes.BIGINT, defaultValue: 0 },
  fweight: { type: DataTypes.DOUBLE(10, 3), defaultValue: 0.0 },
  Detail: {
    type: DataTypes.STRING,
  },
  Rate: {
    type: DataTypes.DOUBLE(10, 2),
    defaultValue: 0.0,
  },
  Rate_Type: {
    type: DataTypes.STRING,
  },
  Percentage: {
    type: DataTypes.DOUBLE(3, 2),
    defaultValue: 0,
  },
  Brand: {
    type: DataTypes.STRING,
  },
  ITEM_TYPE: { type: DataTypes.STRING },
  LOOSE_STONE: { type: DataTypes.STRING },
  TallyUpdt: { type: DataTypes.STRING },
  Silver: { type: DataTypes.DOUBLE(10, 3), defaultValue: 0.0 },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
});
module.exports = { MainItemMaster };
