const express = require("express");
const router = express.Router();
// const user= require("../model/user");
const userController = require("../controllers/users-controllers");

const dbo = require("../db/conn");
const User= require("../model/user");

// middile ware--
const auth= require("../middileware/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.delete("/removeuser/:id",auth, userController.deleteUser);
// router.get("/getalluser",auth,userController.getAllUser);
router.get("user/:id",userController.getById);
router.get("/dashboard",auth, userController.getUserbymail);
router.get("/",(req,res)=>{
    console.log("hello users");
    let users;
    try {
         users = User.find();
        console.log(users);
    } catch (error) {
        console.log(users);
    }
   
});

// //protected route auth
// router.get("/user-auth",requireSignIn,(req,res)=>{
//     res.status(200).send({ok:true});
// })

module.exports = router;