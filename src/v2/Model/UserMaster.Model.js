const { sq } = require("../../DataBase/ormdb");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const Pwd = bcrypt.genSaltSync(10);
const { sequelize, DataTypes } = require("sequelize");
// console.log(Pwd);
const date = new Date();
const UserMasters = sq.define("usermasters", {
  ID: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  CompanyCode: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "CompanyCode",
    },
  },
  LoginCode: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "companymasters",
      key: "LoginCode",
    },
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UUid: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
  },
  PhoneNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Utype: {
    type: DataTypes.BIGINT,
  },
  LogOut: {
    type: DataTypes.TINYINT,
  },
});

sq.sync().then(() => {
  console.log("Table created successfully!");
});

// const pass = "Abc@123";
// const hashPassword = bcrypt.hashSync(pass, Pwd);
// console.log(hashPassword);
// const su1 = UserMasters.create({
//   CompanyCode: "NSPL",
//   Name: "Debolina Das",
//   Password: hashPassword,
//   UUid: uuidv4(),
//   PhoneNumber: "6546544654",
//   Email: "debolina420@gmail.com",
//   Utype: 1,
//   LogOut: 0,
// });

module.exports = { UserMasters };
/*INSERT INTO `usermasters`(`CompanyCode`, `UserName`, `UUid`, `Eamil`, `PhoneNumber`, `Password`, `Utype`, `createdAt`, `updatedAt`)select `CompanyCode`,`CustomerName`,`UUid`,`EmailId`,`PhoneNumber`,`password`,3,`createdAt`, `updatedAt` from customermasters;*/
/*INSERT INTO `usermasters`(`CompanyCode`, `UserName`, `UUid`, `Eamil`, `PhoneNumber`, `Password`, `Utype`, `createdAt`, `updatedAt`)select `CompanyCode`,`Name`,`UUid`,`EmailId`,`Phonenumber`,`password`,2,`createdAt`, `updatedAt` from agentmasters;*/
