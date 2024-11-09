const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const ReportMasters = sq.define("reportmasters", {
  ID: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  UUID: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  ReportType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Doc: {
    type: DataTypes.STRING,
    allowNull: false,
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
sq.sync().then(() => {
  console.log("Table created successfully!");
});
module.exports = { ReportMasters };
