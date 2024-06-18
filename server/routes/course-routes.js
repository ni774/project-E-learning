const express = require("express");
const router = express.Router();
const Course = require("../model/Course");
const coursesController = require("../controllers/courses-controller");
const islogedin=require("../controllers/users-controllers");
const dbo = require("../db/conn");
const auth= require("../middileware/auth");
const isAdmin = require("../middileware/adminAuth");
const formidable = require('express-formidable');
const upload = require("../helper/fileUploadHelper");

router.get("/search/:keyword", coursesController.searchProduct);
router.get("/",coursesController.getAllCourses);

router.post("/add",auth,isAdmin,upload.single('thumbnail'),coursesController.addCourse);

router.get("/:id",coursesController.getById);

router.get("/photo/:id",coursesController.getphoto);

router.put("/:id",auth,isAdmin,coursesController.updateCourse);

router.delete("/:id",auth,isAdmin,coursesController.deleteCourse);



module.exports = router;