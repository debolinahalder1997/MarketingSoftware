const express = require("express");
const router = express.Router();
const authentication = require("./Auth.Route.js");
const tranroutes = require("./Transaction.Route.js");
console.log("2");
router.use("/auth-routes", authentication);
router.use("/tarn-routes", tranroutes);

module.exports = router;
