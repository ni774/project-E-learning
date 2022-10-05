const express = require("express");
const router = express.Router();
const user= require("../model/user");
const userController = require("../controllers/users-controllers");

const dbo = require("../db/conn");

router.post("/signup", userController.signup);
router.post("/login", userController.login);


module.exports = router;