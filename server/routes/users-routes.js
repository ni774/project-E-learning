const express = require("express");
const router = express.Router();
// const user= require("../model/user");
const userController = require("../controllers/users-controllers");

const dbo = require("../db/conn");

// middile ware--
const auth= require("../middileware/auth");
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.delete("/removeuser/:id",userController.deleteUser);
router.get("/getalluser",userController.getAllUser);
router.get("/:id",userController.getById);


module.exports = router;