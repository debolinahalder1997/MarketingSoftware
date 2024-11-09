const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const {
  sequelize: {},
  DataTypes: {},
  UUID: {},
  UUIDV4,
  DataTypes,
} = require("sequelize");
const CustomerMaster = sq.define("customer_master", {
  CUSTNO: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
  },
  NAME: { type: DataTypes.STRING, allowNull: false },
  PHONE: { type: DataTypes.BIGINT, allowNull: true },
  ADDRESS1: { type: DataTypes.STRING, allowNull: true },
  ADDRESS2: { type: DataTypes.STRING, allowNull: true },
  ADDRESS3: { type: DataTypes.STRING, allowNull: true },
  GL_CODE: {
    type: DataTypes.BIGINT,
    references: { model: "accountmaster", key: "GL_CODE" },
  },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
});
module.exports = { CustomerMaster };
