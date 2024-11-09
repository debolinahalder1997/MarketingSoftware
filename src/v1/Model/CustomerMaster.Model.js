const { sq } = require("../../DataBase/ormdb");
const { DataTypes } = require("sequelize");

// Define the CustomerMaster model
const customer_masters = sq.define("customer_masters", {
  ID: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  CoName: { type: DataTypes.STRING, allowNull: false },
  PhNo: { type: DataTypes.BIGINT, allowNull: true },
  Mobile: { type: DataTypes.BIGINT, allowNull: true },
  PinCode: { type: DataTypes.BIGINT, allowNull: true },
  Contact_Name: { type: DataTypes.STRING, allowNull: true },
  ADDRESS: { type: DataTypes.STRING, allowNull: true },
  Remarks: { type: DataTypes.STRING, allowNull: true },
  id_area: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "Area_Masters", // Ensure this model name matches exactly
      key: "ID",
    },
  },
  id_state: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "state_masters",
      key: "ID",
    },
  },
  id_city: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "city_masters",
      key: "ID",
    },
  },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
  // STATUS:{
  //   type: DataTypes.TINYINT
  // },
  REFNAME: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ID_Vendor: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  ID_Vendor1: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
});

// Sync the model with the database
sq.sync()
  .then(() => {
    console.log("CustomerMaster table created successfully!");
  })
  .catch((err) => {
    console.error("Error creating CustomerMaster table:", err);
  });

module.exports = { customer_masters };
