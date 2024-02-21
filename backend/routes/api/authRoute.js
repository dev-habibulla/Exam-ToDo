const express = require("express")
const secureApi = require("../../middleware/secureApi")
const registrasionController = require("../../controllers/registrasionController")
const _ = express.Router()

_.post("/registrasion", secureApi, registrasionController);
// ok ebar kor


module.exports = _