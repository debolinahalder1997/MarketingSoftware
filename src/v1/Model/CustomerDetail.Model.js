const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const Customer_Details = sq.define("Customer_Details", {
  ID: {
    primaryKey: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement:true
  },
  Vounum: { type: DataTypes.STRING, allowNull: false },
  Voudate: { type: DataTypes.DATEONLY, allowNull: false },
  vousrl: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  Id_Name:{
    type:DataTypes.BIGINT,
    allowNull:false,
    references: {
      model: "customer_masters", // Ensure this model name matches exactly
      key: "ID",
    },
  },
  Acctdate:
  {
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  detail:
  {
    type:DataTypes.STRING,
    allowNull:false
  },




});

sq.sync()
  .then(() => {
    console.log("CustomerMaster table created successfully!");
  })
  .catch((err) => {
    console.error("Error creating CustomerMaster table:", err);
  });
module.exports = { Customer_Details };
