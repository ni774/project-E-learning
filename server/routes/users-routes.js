const express = require("express");
const router = express.Router();
// const user= require("../model/user");
const userController = require("../controllers/users-controllers");

const dbo = require("../db/conn");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/logout",userController.logout);


module.exports = router;