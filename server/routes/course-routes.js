const express = require("express");
const router = express.Router();
const Course = require("../model/Course");
const coursesController = require("../controllers/courses-controller");
const islogedin=require("../controllers/users-controllers");
const dbo = require("../db/conn");


const middleware=(req,res,next)=>{
    if(islogedin==true){
      console.log("user loged in");
      next();
    }else{
      console.log("user not loged in");
      res.send("login first");
    }
}

router.get("/",coursesController.getAllCourses);


router.post("/",coursesController.addCourse);
// router.get("/:id",coursesController.getById);
// router.put("/:id",coursesController.updateCourse);


module.exports = router;