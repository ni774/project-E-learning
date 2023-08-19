const express = require("express");
const router = express.Router();
const Course = require("../model/Course");
const coursesController = require("../controllers/courses-controller");
const islogedin=require("../controllers/users-controllers");
const dbo = require("../db/conn");
const auth= require("../middileware/auth");
const isAdmin = require("../middileware/adminAuth");
const formidable = require('express-formidable');

router.get("/",auth,coursesController.getAllCourses);

router.post("/add",auth,isAdmin,formidable(),coursesController.addCourse);

router.get("/:id",auth,coursesController.getById);

router.put("/:id",auth,isAdmin,coursesController.updateCourse);

router.delete("/:id",auth,isAdmin,coursesController.deleteCourse);

router.get("/search/:keyword",auth,coursesController.searchProduct);


module.exports = router;