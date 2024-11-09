const express = require("express");
const router = express.Router();
const authentication  = require("./Auth.Route.js");
const documnetroutes  = require("./Documnet.Route.js");

console.log("2");
router.use("/auth-routes", authentication)

router.use("/documnet-routes", documnetroutes)

module.exports=router