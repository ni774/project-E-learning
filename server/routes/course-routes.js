const express = require("express");
const router = express.Router();
const Course = require("../model/Course");
const coursesController = require("../controllers/courses-controller");
const islogedin=require("../controllers/users-controllers");
const dbo = require("../db/conn");

const auth= require("../middileware/auth");

router.get("/",auth,coursesController.getAllCourses);


router.post("/",auth,coursesController.addCourse);
router.get("/:id",auth,coursesController.getById);
router.put("/:id",auth,coursesController.updateCourse);
router.delete("/:id",auth,coursesController.deleteCourse);


module.exports = router;