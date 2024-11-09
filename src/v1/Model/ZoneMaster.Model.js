const { sq } = require("../../DataBase/ormdb");
const { DataTypes } = require("sequelize");

// Define the AccountMaster model
const zone_masters = sq.define("zone_masters", {
  ID: { type: DataTypes.BIGINT, primaryKey: true, allowNull: false },
  NAME: { type: DataTypes.STRING, allowNull: false },
  Parent_zone: { type: DataTypes.BIGINT },
  id_city: {
    type: DataTypes.BIGINT,
    references: {
      model: "city_masters",
      key: "ID",
    },
  },
});

// Sync the model with the database
sq.sync()
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

module.exports = { zone_masters };
