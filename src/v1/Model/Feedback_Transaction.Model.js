const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const Feedback_Transactions = sq.define("feedback_transactions", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Vounum: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Voudate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Id_Name: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "customer_masters",
      key: "ID",
    },
  },
  Custstatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Actiondate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  STATUS: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ID_USER: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});
sq.sync()
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((err) => {
    console.error("Error creating table:", err);
  });

module.exports = { Feedback_Transactions };
