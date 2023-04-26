const express = require("express");
const router = express.Router();
const Course = require("../model/Course");
const coursesController = require("../controllers/courses-controller");
const islogedin=require("../controllers/users-controllers");
const dbo = require("../db/conn");

const auth= require("../middileware/auth");

router.get("/",coursesController.getAllCourses);


router.post("/",coursesController.addCourse);
router.get("/:id",coursesController.getById);
router.put("/:id",coursesController.updateCourse);


module.exports = router;