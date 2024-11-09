const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const city_masters = sq.define("city_masters", {
  ID: { type: DataTypes.BIGINT, primaryKey: true, allowNull: false },
  NAME: { type: DataTypes.STRING, allowNull: false },
  id_state: {
    type: DataTypes.BIGINT,
    references: {
      model: "state_masters", // Ensure this model name matches exactly
      key: "ID",
    },
  },
});
sq.sync().then(() => {
  console.log("Table created successfully!");
});
module.exports = { city_masters };
