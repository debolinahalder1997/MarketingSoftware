const { sq } = require("../../DataBase/ormdb");
const { DataTypes } = require("sequelize");

// Define the AccountMaster model
const tracking_masters = sq.define("tracking_masters", {
  ID: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  DateTime: { type: DataTypes.DATETIME, allowNull: false },
  Userid: {
    type: DataTypes.BIGINT,
    references: {
      model: "usermasters",
      key: "ID",
    },
  },
  ZoneID: {
    type: DataTypes.BIGINT,
    references: {
      model: "zone_masters",
      key: "ID",
    },
  },
  Coordinates: { type: DataTypes.STRING },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
  Address: { type: DataTypes.STRING },
});

// Sync the model with the database
sq.sync()
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

module.exports = { tracking_masters };
