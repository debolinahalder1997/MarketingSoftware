const { sq } = require("../../DataBase/ormdb");
const { DataTypes } = require("sequelize");

// Define the AccountMaster model
const state_masters = sq.define("state_masters", {
  ID: { type: DataTypes.BIGINT, primaryKey: true, allowNull: false },
  State_name:{type:DataTypes.STRING,allowNull:false},
  id_country:{type: DataTypes.BIGINT, references: {
    model: "country_masters", // Ensure this model name matches exactly
    key: "ID",
  }}
});

// Sync the model with the database
sq.sync()
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

module.exports = { state_masters };
