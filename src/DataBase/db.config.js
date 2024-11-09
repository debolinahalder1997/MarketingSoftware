require("dotenv").config({ path: "../../.env" });
module.exports = {
  HOST: process.env.Host,
  dbUSER: "root",
  PASSWORD: process.env.PASSWORD,
  DB: process.env.database,
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
