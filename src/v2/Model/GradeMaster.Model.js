const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const {
  sequelize: {},
  DataTypes: {},
  UUID: {},
  UUIDV4,
  DataTypes,
} = require("sequelize");
const GradeMasters = sq.define("grade_master", {
  ID_GRADE: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  PURITY: {
    type: DataTypes.BIGINT,
    references: {
      model: "purity_master",
      key: "purity",
    },
  },
  GRADE: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  GRADE_RATIO: { type: DataTypes.DOUBLE, allowNull: false },
  MASTER_GRADE: { type: DataTypes.STRING, allowNull: true },
  DESCRIPTION: { type: DataTypes.STRING, allowNull: true },
  OPENING: { type: DataTypes.DOUBLE, allowNull: true },
  OPENINGNT: { type: DataTypes.DOUBLE, allowNull: true },
  STONE_WT: { type: DataTypes.DOUBLE, allowNull: false },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
});
sq.sync().then(() => {
  console.log("Table created successfully!");
});
module.exports = { GradeMasters };
