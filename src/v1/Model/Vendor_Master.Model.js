const { sq } = require("../../DataBase/ormdb");
const { DataTypes } = require("sequelize");

// Define the AccountMaster model
const Vendor_Masters = sq.define("Vendor_Masters", {
  ID: { type: DataTypes.BIGINT, primaryKey: true, allowNull: false },
  NAME:{type:DataTypes.STRING,allowNull:false}
});

// Sync the model with the database
sq.sync()
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

module.exports = { Vendor_Masters };
