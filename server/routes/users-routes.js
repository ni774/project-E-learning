const express = require("express");
const router = express.Router();
// const user= require("../model/user");
const userController = require("../controllers/users-controllers");

const dbo = require("../db/conn");

// middile ware--
const auth= require("../middileware/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.delete("/removeuser/:id",auth, userController.deleteUser);
// router.get("/getalluser",auth,userController.getAllUser);
router.get("user/:id",userController.getById);
router.get("/dashboard",auth, userController.getUserbymail);

// //protected route auth
// router.get("/user-auth",requireSignIn,(req,res)=>{
//     res.status(200).send({ok:true});
// })

module.exports = router;