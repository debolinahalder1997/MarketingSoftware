const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const ReportTypeMasters = sq.define("reporttypemasters", {
  ID: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Reportname: {
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
module.exports = { ReportTypeMasters };
