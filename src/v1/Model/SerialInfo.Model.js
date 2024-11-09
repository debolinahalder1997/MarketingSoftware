const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const serial_infos = sq.define("serial_infos", {
  SRL: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  TRANCODE: { type: DataTypes.STRING, allowNull: true },
  LASTSERIAL: { type: DataTypes.BIGINT },
  NARATION: { type: DataTypes.STRING },
  PRINTVOUCHER: { type: DataTypes.STRING },
  PRINT_STATUS: { type: DataTypes.STRING },
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
module.exports = { serial_infos };
