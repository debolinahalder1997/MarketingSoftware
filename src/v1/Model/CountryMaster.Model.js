const { sq } = require("../../DataBase/ormdb");
const { DataTypes } = require("sequelize");

// Define the AccountMaster model
const country_masters = sq.define("country_masters", {
  ID: { type: DataTypes.BIGINT, primaryKey: true, allowNull: false },
  Country_name:{type:DataTypes.STRING,allowNull:false},
  
});

// Sync the model with the database
sq.sync()
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

module.exports = { country_masters };
