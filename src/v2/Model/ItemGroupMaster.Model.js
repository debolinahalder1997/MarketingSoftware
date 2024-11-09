const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const { sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const ItemGoupMaster = sq.define("itemgoupmaster", {
  Group_Code: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  Group_Desc: { type: DataTypes.STRING, allowNull: false },
  DESCRIPTION: { type: DataTypes.STRING, allowNull: false },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
});
module.exports = { ItemGoupMaster };
