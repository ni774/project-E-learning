const express = require("express");
const router = express.Router();
const Course = require("../model/Course");

router.get("/",async (req,res,next)=>{
   //this route will provide all of the course
   let courses;
   try {
       courses = await Course.find();
   } catch(err){
       console.log(err);
    }

    if(!courses){
        return res.status(404).json({message:"No courses found"})
    }
    return res.status(200).json({courses})
});

module.exports = router;