const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const StoneMaster = sq.define("stonemaster", {
  stone_id:{type:DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false, 
  },
  STONE_SUB: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  STONE_CODE: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  STONE_NAME: { type: DataTypes.STRING, allowNull: false },
  UNIT: { type: DataTypes.BIGINT(10), allowNull: false },
  STONE_SALE: { type: DataTypes.BIGINT(10), allowNull: false },
  STONE_PURC: { type: DataTypes.BIGINT(10), allowNull: false },
  OPPCS: { type: DataTypes.DOUBLE(10, 3), allowNull: true },
  OPWT: { type: DataTypes.DOUBLE(10, 3), allowNull: true },
  STONE_SALE_2: { type: DataTypes.BIGINT(10), allowNull: false },
  METAL: {type: DataTypes.DOUBLE(10, 3), allowNull: true},
  STONE_OLD_PURC: {type: DataTypes.BIGINT(10), allowNull: false},
  OpStudWt: {ype: DataTypes.BIGINT(10), allowNull: false},
  STONE_NAME1: { type: DataTypes.STRING, allowNull: true },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
});
module.exports = { StoneMaster };
